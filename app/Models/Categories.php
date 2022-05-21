<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Lang;


class Categories extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'type', 'style'];

    public function typeAsString()
    {
        switch($this->type) {
            case(1):
                return Lang::get('categories.marker');
            default:
                return Lang::get('categories.unknown');
        }
    }
}
