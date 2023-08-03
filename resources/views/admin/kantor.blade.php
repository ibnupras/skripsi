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
    <div class="container my-5">
        <div class="row">
            <div class="col-12">
                <div class="card card-body">
                    <a href="{{ route('kantor.tambah') }}" class="btn btn-info mb-3">Tambah Kantor</a>
                    <table class="table table-xs table-striped table-hover table-bordered" id="datatable">
                        <thead class="table-primary">
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Jenis</th>
                                <th>Geo <br>(Lat, Long)</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($kantor as $item)
                            <tr>
                                <td>{{ $loop->index + 1 }}</td>
                                <td>{{ $item->nama }}</td>
                                <td>{{ $item->alamat }}</td>
                                <td>{{ $item->jenis }}</td>
                                <td>{{ $item->geom }}</td>
                                <td>
                                    <div class="d-flex">
                                        <a href="{{ route('kantor.edit', ['id' => $item->id]) }}" class="btn btn-primary btn-sm">Edit</a>
                                        <a href="{{ route('kantor.delete', ['id' => $item->id]) }}" class="btn btn-danger btn-sm">Hapus</a>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script>
        $('#datatable').DataTable();
    </script>
@endsection
