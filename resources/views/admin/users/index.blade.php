@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <div class="pull-left">
                <h1>{{__("users.users")}}</h1>
            </div>
            <div class="pull-right">
                <a href="{{route('admin.users.create')}}" class="btn btn-primary btn-lg pull-right">
                    {{__("users.addUser")}}
                </a>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>{{__("users.id")}}</th>
                    <th>{{__("users.name")}}</th>
                    <th>{{__("users.email")}}</th>
                    <th>{{__("users.role")}}</th>
                    <th>{{__("users.created")}}</th>
                    <th>{{__("users.updated")}}</th>
                </tr>
                </thead>
                <tbody>
                @if($users)
                    @foreach($users as $user)
                        <tr>
                            <td>{{$user->id}}</td>
                            <td><a href="{{route('admin.users.edit', $user->id)}}">{{$user->name}}</a></td>
                            <td>{{$user->email}}</td>
                            <td>{{$user->isRole()}}</td>
                            <td>{{$user->created_at->diffForHumans()}}</td>
                            <td>{{$user->updated_at->diffForHumans()}}</td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
            {{$users->render()}}
        </div>
    </div>
@endsection
