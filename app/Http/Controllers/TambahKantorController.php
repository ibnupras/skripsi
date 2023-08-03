<?php

namespace App\Http\Controllers;

use App\Models\Kantor;
use App\Models\KFOMakassar;
use App\Models\ATMMakassar;
use App\Models\KCPMakassar;
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
        if ($request->jenis == 'KC') {
            $created = Kantor::create([
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jenis' => $request->jenis,
                'geom' => new Point($request->latitude, $request->longitude),
            ]);
        } elseif ($request->jenis == 'KCP') {
            $created = KCPMakassar::create([
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jenis' => $request->jenis,
                'geom' => new Point($request->latitude, $request->longitude),
            ]);
        } elseif ($request->jenis == 'KFO') {
            $created = KFOMakassar::create([
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jenis' => $request->jenis,
                'geom' => new Point($request->latitude,$request->longitude),
            ]);
        } elseif ($request->jenis == 'ATM') {
            $created = ATMMakassar::create([
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jenis' => $request->jenis,
                'geom' => new Point($request->latitude,$request->longitude),
            ]);
        }
        return redirect()->route('tambahkantor');
    }
}
