<?php

namespace App\Imports;

use App\Models\Location;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class LocationImport implements ToModel,WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        dd($row);
        return new Location([
            "nim" => $row['nim'],
            "nama" => $row['nama'],
            "phone" => $row['hp'],
            "email" => $row['email'],
            "tahun_lulusan" => $row['angkatan'],
            "jurusan" => $row['jurusan'],
            "prodi" => $row['program_studi'],
            "kelamin" => $row['jenis_kelamin'],
        ]);
    }
}
