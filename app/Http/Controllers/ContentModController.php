<?php

namespace App\Http\Controllers;

use App\Models\MapObject;
use Illuminate\Http\Request;

class ContentModController extends Controller
{
    public function index()
    {
        return view('mod.contentMod.index', [
            'contents' => MapObject::paginate(100)
        ]);
    }
}
