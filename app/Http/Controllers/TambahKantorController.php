<?php

namespace App\Http\Controllers;

use App\Models\Kantor;
use Illuminate\Http\Request;
// use MStaack\LaravelPostgis\Eloquent\PostgisTrait;
use MStaack\LaravelPostgis\Geometries\Point;

class TambahKantorController extends Controller
{
    public function index()
    {
        return view('tambahkantor');
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
            'geom' => new Point($request->longitude, $request->latitude),
        ]);
        return redirect()->route('tambahkantor');
    }
}
