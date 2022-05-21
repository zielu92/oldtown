<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordinate extends Model
{
    use HasFactory;
    protected $fillable = ['long', 'lat', 'map_objects_id'];

    public function map_objects_id() {
        $this->hasOne('App\Models\MapObject', 'id','map_objects_id');
    }
}
