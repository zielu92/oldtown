@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <h4>{{__("categories.add")}}</h4>
            {!! Form::open(['method'=>'POST', 'action'=>'\App\Http\Controllers\CategoriesController@store']) !!}
            <div class="row">
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                @if (Session::has('message'))
                    <div class="alert alert-info">{{ Session::get('message') }}</div>
                @endif
                <div class="form-group col-md-6">
                    {!! Form::label('name', __("categories.name")) !!}
                    {!! Form::text('name', null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6">
                    {!! Form::label('type', __("categories.type")) !!}
                    {!! Form::select('type',  [1 => __("categories.marker"),2 => __("categories.layers")],
                    null, ['class'=>'form-control']) !!}
                </div>
                {{-- TODO:Create style creator--}}
                <div class="form-group col-md-6">
                    {!! Form::label('style', __("categories.style")) !!}
                    {!! Form::text('style', null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6 mt-4">
                    {!! Form::submit(__("categories.add"), ['class'=>'btn btn-primary']) !!}
                </div>

                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
