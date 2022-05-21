<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMapObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_objects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nameOld')->nullable();
            $table->string('address')->nullable();
            $table->string('addressOld')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('from')->nullable();
            $table->integer('till')->nullable();
            $table->string('description')->nullable();
            $table->integer('type');
            $table->string('picture_id')->nullable();
            $table->integer('user_id');
            $table->boolean('is_public')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('map_objects');
    }
}
