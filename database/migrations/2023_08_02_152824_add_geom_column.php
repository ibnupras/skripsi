<?php

use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use MStaack\LaravelPostgis\Schema\Blueprint;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('kantor', function (Blueprint $table) {
            $table->point('geom', 'GEOMETRY', 4326);
        });
        // Schema::create('atmmakassar', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('nama');
        //     $table->string('alamat')->nullable();
        //     $table->string('jenis')->nullable();
        //     $table->point('geom', 'GEOMETRY', 4326);
        //     $table->timestamps();
        // });
        // Schema::create('kcpmakassar', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('nama');
        //     $table->string('alamat')->nullable();
        //     $table->string('jenis')->nullable();
        //     $table->point('geom', 'GEOMETRY', 4326);
        //     $table->timestamps();
        // });
        // Schema::create('kfomakassar', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('nama');
        //     $table->string('alamat')->nullable();
        //     $table->string('jenis')->nullable();
        //     $table->point('geom', 'GEOMETRY', 4326);
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
};
