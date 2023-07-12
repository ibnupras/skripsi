<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyImage extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'deskription',
        'name',
        'slug',
        'location',
    ];

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }

}
