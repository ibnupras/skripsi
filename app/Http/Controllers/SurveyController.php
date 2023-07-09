<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    // Menampilkan halaman daftar survey
    public function index()
    {
        return view('survey');
    }

    
}
