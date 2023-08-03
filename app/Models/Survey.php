<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'deskription',
        'title',
        'location',
    ];
    
    public function images()
    {
        return $this->hasMany(SurveyImage::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
