<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function admin()
    {
        return view("admin.admin");
    }

    public function user()
    {
       return view("user.user");
    }
    public function checkRole(Request $request){
        if(Auth::user()->role_id == 1){
            return redirect()->route('admin');
        }else{
            return redirect()->route('user');
        }
    }
}
