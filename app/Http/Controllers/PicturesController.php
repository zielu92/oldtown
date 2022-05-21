<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePicturesRequest;
use App\Http\Requests\UpdatePicturesRequest;
use App\Models\Pictures;

class PicturesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePicturesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePicturesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pictures  $pictures
     * @return \Illuminate\Http\Response
     */
    public function show(Pictures $pictures)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pictures  $pictures
     * @return \Illuminate\Http\Response
     */
    public function edit(Pictures $pictures)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePicturesRequest  $request
     * @param  \App\Models\Pictures  $pictures
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePicturesRequest $request, Pictures $pictures)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pictures  $pictures
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pictures $pictures)
    {
        //
    }
}
