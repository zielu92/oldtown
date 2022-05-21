@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <h4>{{__("users.editUser")}}</h4>

            <div class="row">
                <div class="col-md-12">
                    {!! Form::model($user, ['method'=>'PATCH', 'action'=>['\App\Http\Controllers\UserController@update', $user->id],
                    'files'=>true]) !!}

                    <div class="row">
                        <div class="form-group col-md-12">
                            {!! Form::label('name', __("users.name")) !!}
                            {!! Form::text('name', null, ['class'=>'form-control']) !!}
                        </div>

                        <div class="form-group col-md-12">
                            {!! Form::label('email', __("users.email")) !!}
                            {!! Form::email('email', null, ['class'=>'form-control']) !!}
                        </div>

                        <div class="form-group col-md-12">
                            {!! Form::label('password', __("users.pass")) !!}
                            {!! Form::password('password', ['class'=>'form-control']) !!}
                        </div>

                        <div class="form-group col-md-12">
                            {!! Form::label('role', __("users.role")) !!}
                            {!! Form::select('role', [0 => __("users.admin"), 1 => __("users.user"), 2 => __("users.mod")],
                            null, ['class'=>'form-control']) !!}
                        </div>
                        <div class="row mt-3">
                        <div class="form-group col-1">
                            {!! Form::submit(__("users.save"), ['class'=>'btn btn-primary']) !!}
                        </div>

                        {!! Form::close() !!}

                        {!! Form::open(['method'=>'DELETE', 'class'=>'col-1', 'action'=>['\App\Http\Controllers\UserController@destroy', $user->id]]) !!}
                        <div class="form-group">
                            {!! Form::submit(__("users.delete"), ['class'=>'btn btn-danger']) !!}
                        </div>

                        {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
