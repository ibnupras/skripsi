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
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Form Tambah Kantor</div>
                    <div class="card-body">
                        <form action="{{ route('tambahkantor') }}" method="POST" target="_blank">
                            @csrf
                            <div class="form-group mb-3">
                                <label for="nama">Nama Outlet</label>
                                <input id="nama" type="text" class="form-control" name="nama" required autofocus>
                            </div>

                            <div class="form-group mb-3">
                                <label for="alamat">Alamat</label>
                                <textarea name="alamat" id="alamat" class="form-control" rows="2"></textarea>
                            </div>

                            <div class="form-group mb-3">
                                <label for="jenis">Jenis Outlet</label>
                                <select class="form-select" required id="jenis" name="jenis">
                                    <option value=""></option>
                                    <option value="KC">KC</option>
                                    <option value="KCP">KCP</option>
                                    <option value="KFO">KFO</option>
                                    <option value="ATM">ATM</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="latitude">Latitude</label>
                                <input id="latitude" type="text" class="form-control" name="latitude" required autocomplete="off">
                            </div>
                            <div class="form-group mb-3">
                                <label for="longitude">Longitude</label>
                                <input id="longitude" type="text" class="form-control" name="longitude" required autocomplete="off">
                            </div>


                            <div class="form-group d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary mt-3">Simpan</button>
                            </div>
                        </form>
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
