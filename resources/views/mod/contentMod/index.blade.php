@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <div class="pull-left">
                <h1>{{__("contentMod.contentMod")}}</h1>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>{{__("contentMod.name")}}</th>
                    <th>{{__("contentMod.nameOld")}}</th>
                    <th>{{__("contentMod.address")}}</th>
                    <th>{{__("contentMod.category")}}</th>
                    <th>{{__("contentMod.dates")}}</th>
                    <th>{{__("contentMod.description")}}</th>
                    <th>{{__("contentMod.type")}}</th>
                    <th>{{__("contentMod.user")}}</th>
                    <th>{{__("contentMod.created")}}</th>
                    <th>{{__("contentMod.action")}}</th>
                </tr>
                </thead>
                <tbody>
                @if($contents)
                    @foreach($contents as $content)
                        <tr class="{{$content->is_public ? 'table-success' : ''}}">
                            <td>{{$content->name}}</td>
                            <td>{{$content->nameOld}}</td>
                            <td>{{$content->address}} + add alternative addresses from DB</td>
                            <td>{{$content->category_id ? $content->category->name : 'none'}}</td>
                            <td>{{$content->from}} - {{$content->till}}</td>
                            <td>{{$content->description}}</td>
                            <td>{{$content->type}}</td>
                            <td>{{$content->user->name}}</td>
                            <td>{{$content->created_at->diffForHumans()}}</td>
                            <td>
                                <a href="/mapObject/{{$content->id}}" class="btn btn-info">{{__("contentMod.show")}}</a>
                                {!! Form::open(['method'=>'DELETE', 'class'=>'col-1', 'action'=>['\App\Http\Controllers\MapObjectController@destroy', $content]]) !!}
                                {!! Form::submit(__("contentMod.remove"), ['class'=>'btn btn-danger']) !!}
                                {!! Form::close() !!}
                                @if(!$content->is_public)
                                    {!! Form::open(['method'=>'PUT', 'class'=>'col-1', 'action'=>['\App\Http\Controllers\MapObjectController@publish', $content]]) !!}
                                    {!! Form::submit(__("contentMod.publish"), ['class'=>'btn btn-success']) !!}
                                    {!! Form::close() !!}
                                @endif
                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
            {{$contents->render()}}
        </div>
    </div>
@endsection
