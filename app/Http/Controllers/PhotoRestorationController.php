<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PhotoRestorationController extends Controller
{
    public function index() {
        return view('photoRestoration.index');
    }
}
