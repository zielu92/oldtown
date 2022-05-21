@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-lg-12">
            <div class="pull-left">
                <h1>{{__("categories.categories")}}</h1>
            </div>
            <div class="pull-right">
                <a href="{{route('admin.categories.create')}}" class="btn btn-primary btn-lg pull-right">
                    {{__("categories.add")}}
                </a>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>{{__("categories.name")}}</th>
                    <th>{{__("categories.type")}}</th>
                    <th>{{__("categories.created")}}</th>
                    <th>{{__("categories.action")}}</th>
                </tr>
                </thead>
                <tbody>
                @if($categories)
                    @foreach($categories as $category)
                        <tr>
                            <td>{{$category->name}}</td>
                            <td>{{$category->typeAsString()}}</td>
                            <td>{{$category->created_at->diffForHumans()}}</td>
                            <td><a href="{{route('admin.categories.edit', $category->id)}}">{{__("categories.edit")}}</a></td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
        </div>
    </div>
@endsection
