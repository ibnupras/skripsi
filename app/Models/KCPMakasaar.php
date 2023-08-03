<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use MStaack\LaravelPostgis\Eloquent\PostgisTrait;
use MStaack\LaravelPostgis\Geometries\Point;

class KCPMakassar extends Model
{
    use PostgisTrait;

    protected $table = 'kcpmakassar';
    protected $guarded = ['id'];
    protected $postgisFields = [
        'geom',
    ];
    protected $postgisTypes = [
        'geom' => [
            'geomtype' => 'geometry',
            'srid' => 4326
        ],
    ];
}