<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMapObjectRequest;
use App\Http\Requests\UpdateMapObjectRequest;
use App\Models\Coordinate;
use App\Models\MapObject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MapObjectController extends Controller
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
     * @param  \App\Http\Requests\StoreMapObjectRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id']=Auth::user()->id;
        $objId = MapObject::create($data)->id;
        $coordinates = explode(',', $data['latLng']);
        Coordinate::create(['long'=>$coordinates[0], 'lat'=>$coordinates[1], 'map_objects_id'=>$objId]);
        return response()->json([
             'success' => true,
             'message' => 'Object has been added'
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\RedirectResponse
     */
    public function show($id)
    {
        $mapObject = MapObject::findOrFail($id);
        if ((!$mapObject['is_public'] && (Auth::user()->isAdmin() || Auth::user()->isMod())) || $mapObject['is_public']) {
            return view('map.show', [
                'id' => $id
            ]);
        }
        else {
            return redirect()->back();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\Response
     */
    public function edit(MapObject $mapObject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMapObjectRequest  $request
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMapObjectRequest $request, MapObject $mapObject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($mapObject)
    {
        MapObject::findOrFail($mapObject)->delete();
        return redirect()->back();
    }

    public function getMapObjects() {
        return response()->json(MapObject::where('is_public', true)->with('coordinate')->get());
    }

    public function publish($mapObject) {
        MapObject::findOrFail($mapObject)->update(array('is_public' => true));;
        return redirect()->back();
    }

    public function getMapObject($id) {
        $mapObject = MapObject::find($id)->with('coordinate')->first();
        return isset($mapObject) ? response()->json($mapObject, 200) : response()->json('error',404);
    }
}
