<?php

namespace App\Models;

use App\Photo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Pictures extends Model
{
    use HasFactory;
    protected $upload = '/images/';
    protected $fillable = ['user_id', 'path', 'originalName', 'map_objects_id'];

    public function getPathAttribute($photo) {
        return $this->upload . $photo;
    }

    public function getOriginalNameAttribute($photo) {
        return pathinfo($photo, PATHINFO_FILENAME);
    }

    public function photoUpload($fileUpload, $newName, $mapObject_id){

        $file_name = uniqid($newName) . '.' . $fileUpload->getClientOriginalExtension();
        $fileUpload->move('images', $file_name);
        $picture = new self();
        $picture->originalName = $fileUpload->getClientOriginalName();
        $picture->path = $file_name;
        $picture->map_objects_id = $mapObject_id;
        $picture->user_id = auth()->id();
        $picture->save();
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function map_objects_id() {
        $this->hasOne('App\Models\MapObject', 'id','map_objects_id');
    }
}
