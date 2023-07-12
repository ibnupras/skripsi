<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use Auth;

class SurveyController extends Controller
{
    // Menampilkan halaman daftar survey
    public function index()
    {
        $survey = Survey::all();
        return view('survey',['surveys'=>$survey]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'deskription' => 'required',
            'location' => 'required',
        ]);
        Survey::create([
            'user_id' =>Auth::user()->id,
            'title' => $request->title,
            'deskription' => $request->deskription,
            'location' => $request->location,
        ]);
        
        return redirect()->route('survey');
    }
    public function delete(Request $request,$id)
    {
        $survey = survey::find($id)->delete();   
        if ($survey) {
            return redirect()->route('survey')->with('success', 'Survey deleted successfully.');
        }
    
        return redirect()->route('survey')->with('error', 'Survey not found.');
    }
    
}
