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
                        <form action="{{ route('survey') }}" method="POST">
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
                            <label for="status">{{ __('Survey') }}</label>
                                <span class="text-gray-700">Images</span>
                                <input type="file" name="images[]"
                                    class="block w-full mt-1 rounded-md"
                                    placeholder="" multiple/>
                            </label>

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
    <tbody>
        @foreach($surveys as $survey)
        <tr>
            <td>{{ $survey->user->name }}</td>
            <td>{{ $survey->deskription }}</td>
            <td>{{ $survey->title }}</td>
            <td>{{ $survey->location }}</td>
            <td>{{ $survey->image }}</td>
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
@endsection
