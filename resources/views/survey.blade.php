<!-- resources/views/survey/form.blade.php -->
@extends('layouts.app')

@section('content')
@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif

@if (session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
@endif

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Survey Form') }}</div>

                    <div class="card-body">
                        <form action="{{ route('survey') }}" method="POST" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group">
                                <label for="name">{{ __('deskription') }}</label>
                                <input id="name" type="text" class="form-control" name="deskription" required autofocus>
                            </div>

                            <div class="form-group">
                                <label for="name">{{ __('title') }}</label>
                                <input id="name" type="text" class="form-control" name="title" required autofocus>
                            </div>

                            <div class="form-group">
                                <label for="name">{{ __('location') }}</label>
                                <input id="name" type="text" class="form-control" name="location" required autofocus>
                            </div>

                            <div class="image-form">
                            <div id="listImage">

                            </div>
                            <a href="#" class="btn btn-secondary" onclick="TambahGambar()">Tambah</a>

                            <div class="form-group d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary ">{{ __('Submit') }}</button>
                            </div>
                        </form>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Hasil Survey') }}</div>
            <table>
                    <thead>
        <tr>
            <th>user_id</th>
            <th>deskription</th>
            <th>title</th>
            <th>location</th>
            <th>image</th>
            <th>edit</th>
        </tr>
    </thead>
    <tbody>
        @foreach($surveys as $survey)
        <tr>
            <td>{{ $survey->user->name }}</td>
            <td>{{ $survey->deskription }}</td>
            <td>{{ $survey->title }}</td>
            <td>{{ $survey->location }}</td>
            <td>
                @foreach ($survey->images as $file)
                    <div class="mb-2">
                        <span role="button" id="document-lampiran"
                            class="ms-2 text-capitalize fw-bold text-primary"
                            data-file="{{ asset('dokumen_survey/' . $file->location) }}"
                            data-type="{{ $file->ext }}"><i class="fas fa-file-pdf"></i>&nbsp; Dokumen
                            {{ $file->name }} </span>
                    </div>
                @endforeach
            </td>
            <td>
                <a href="{{ route('survey.delete',['id'=>$survey->id]) }}" class="btn btn-danger">Delete</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
                        </form>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="document-preview-img" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0 mx-auto d-flex justify-content-center">
                    <div class="col-6">
                        <img src="" class="w-100 img-thumbnail">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function TambahGambar() {
            target = $(`#listImage`);
            let count = 1;
            if ($(`#listImage .document:last-child`).data('number')) {
                count = $(`#listImage .document:last-child`).data('number') + 1;
            }
            target.append(`
                <div class="d-flex document mb-2" data-number="${count}">
                    <div>
                        <button type="button" class="btn btn-outline-danger" onclick="removeThis(this)"> Hapus</button>
                    </div>
                    <div class="ms-4 col-10">
                        <div class="row">
                            <div class="col-3">
                                <input type="text" required name="imageNames[${count}]" class="form-control required" placeholder="Judul Dokumen">
                            </div>
                            <div class="col-9">
                                <input type="file" required name="images[${count}]" class="form-control required" placeholder="Dokumen" accept="image/*" />
                            </div>
                        </div>
                    </div>
                </div>
            `)
        }
        function removeThis(param) {
            $(param).parent().parent().remove();
        }
        $('span#document-lampiran').click(function() {
            type = $(this).data('type')
            if (type == "doc") {
                $('#document-preview .modal-body iframe').attr('src', $(this).data('file'));
                $('#document-preview .modal-title').text($(this).text());
                $('#document-preview').modal('show');
            } else {
                $('#document-preview-img .modal-body img').attr('src', $(this).data('file'));
                $('#document-preview-img .modal-title').text($(this).text());
                $('#document-preview-img').modal('show');
            }

        });
    </script>
@endsection
