<?php
namespace App\Http\Controllers;

use App\Models\Informasi;
use Illuminate\Http\Request;

class InformasiController extends Controller
{
    public function simpanInformasi(Request $request)
    {
        // Validasi data yang diterima dari permintaan
        $validatedData = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        // Simpan data ke database
        $informasi = Informasi::create([
            'judul' => $validatedData['judul'],
            'deskripsi' => $validatedData['deskripsi'],
            'latitude' => $validatedData['latitude'],
            'longitude' => $validatedData['longitude'],
        ]);

        // Jika data berhasil disimpan, kirimkan respons JSON
        if ($informasi) {
            return response()->json(['message' => 'Data berhasil disimpan', 'id'=>$informasi->id], 200);
        } else {
            return response()->json(['message' => 'Gagal menyimpan data'], 500);
        }
    }

    public function hapusInformasi(Request $request)
    {
        // Validasi data yang diterima dari permintaan
        $validatedData = $request->validate([
            'id' => 'required',
        ]);

        // Simpan data ke database
        $informasi = Informasi::where('id', $validatedData['id'])->delete();

        // Jika data berhasil disimpan, kirimkan respons JSON
        if ($informasi) {
            return response()->json(['message' => 'Data berhasil dihapus'], 200);
        } else {
            return response()->json(['message' => 'Gagal menghapus data'], 500);
        }
    }

    public function getInformasi(){
        $informasi = Informasi::all();
        return response()->json(['message' => 'Berhasil mengambil data', 'data'=>$informasi], 200);
    }
}
