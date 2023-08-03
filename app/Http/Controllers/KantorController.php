<?php

namespace App\Http\Controllers;

use App\Models\Kantor;
use Illuminate\Http\Request;
use MStaack\LaravelPostgis\Geometries\Point;

class KantorController extends Controller
{
    public function index(){
        $kantor = Kantor::all();
        return view('admin.kantor', compact('kantor'));
    }
    // public function getKantor(Request $request){
    //     $data = Kantor::where('jenis', $request->jenis)->get();
    //     return response()->json(['message' => 'Berhasil mengambil data', 'data'=>$data], 200);
    // }
    public function edit($id, Request $request)
    {
        $kantor = Kantor::findOrFail($id);
        return view('admin.kantor-edit', compact('kantor'));
    }
    public function update($id, Request $request)
    {
        $kantor = null;
        $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'jenis' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);
        $kantor = Kantor::findOrFail($id);

        $kantor->nama = $request->nama;
        $kantor->alamat = $request->alamat;
        $kantor->jenis = $request->jenis;
        $kantor->geom = new Point($request->latitude, $request->longitude);
        $kantor->save();
        return redirect()->route('kantor.index');
    }
    public function delete($id, Request $request)
    {
        Kantor::where('id', $id)->delete();
        return redirect()->route('kantor.index');    
    }
    public function create()
    {
        return view('admin.kantor-tambah');
    }
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'jenis' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);
        $created = Kantor::create([
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'jenis' => $request->jenis,
            'geom' => new Point($request->latitude, $request->longitude),
        ]);
        return redirect()->route('kantor.index');
    }
}
