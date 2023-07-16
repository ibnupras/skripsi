<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\SurveyImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        $survey = Survey::create([
            'user_id' =>Auth::user()->id,
            'title' => $request->title,
            'deskription' => $request->deskription,
            'location' => $request->location,
        ]);
    
        $images = $request->images;

        foreach($images as $key=>$image){
            $name = time() . "_" . $image->getClientOriginalName();
            Storage::disk('dokumen_survey')->put($name, file_get_contents($image));
            SurveyImage::create([
                "survey_id" => $survey->id,
                "deskription" => "-",
                "name" => $request->imageNames[$key],
                "slug" => Str::slug($request->imageNames[$key]),
                "location" => $name,
            ]);

        }
        
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
