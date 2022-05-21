@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <h4>{{__("users.addUser")}}</h4>
            {!! Form::open(['method'=>'POST', 'action'=>'\App\Http\Controllers\UserController@store', 'files'=>true]) !!}
            <div class="row">
                <div class="form-group col-md-6">
                    {!! Form::label('name', __("users.name")) !!}
                    {!! Form::text('name', null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6">
                    {!! Form::label('email', __("users.email")) !!}
                    {!! Form::email('email', null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6">
                    {!! Form::label('password', __("users.pass")) !!}
                    {!! Form::password('password', ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6">
                    {!! Form::label('role', __("users.role")) !!}
                    {!! Form::select('role',  [0 => __("users.admin"), 1 => __("users.user"), 2 => __("users.mod")],
                    null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group col-md-6 mt-3">
                    {!! Form::submit(__("users.save"), ['class'=>'btn btn-primary']) !!}
                </div>

                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
