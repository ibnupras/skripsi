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
                            <a href="#" class="btn btn-primary" onclick="TambahGambar()">Tambah</a>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
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
