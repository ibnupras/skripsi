<?php

namespace App\Http\Controllers;

use App\Models\Kantor;
use App\Models\KFOMakassar;
use App\Models\ATMMakassar;
use App\Models\KCPMakassar;
use Illuminate\Http\Request;
use MStaack\LaravelPostgis\Geometries\Point;

class KantorController extends Controller
{
    public function index(){
        return view('admin.kantor');
    }
    public function getKantor(Request $request){
        $data = Kantor::where('jenis', $request->jenis)->get();
        return response()->json(['message' => 'Berhasil mengambil data', 'data'=>$data], 200);
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
