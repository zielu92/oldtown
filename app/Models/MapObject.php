<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MapObject extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'nameOld',
        'address',
        'addressOld',
        'category_id',
        'from',
        'till',
        'description',
        'type',
        'picture_id',
        'user_id',
        'is_public'
    ];

    public function category() {
        return $this->belongsTo('App\Models\Categories');
    }
    public function picture() {
        return $this->belongsTo('App\Models\Pictures');
    }
    public function user() {
        return $this->belongsTo('App\Models\User');
    }
    public function coordinate() {
        return $this->hasMany('App\Models\Coordinate', 'map_objects_id');
    }
}
