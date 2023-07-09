@extends('layouts.app')

@section('content')
@if (auth()->check())
                        @if (auth()->user()->role_id == 1)
                            <script>window.location.href = "{{ route('admin') }}";</script>
                        @elseif (auth()->user()->role_id == 2)
                            <script>window.location.href = "{{ route('user') }}";</script>
                        @endif
@endsection
