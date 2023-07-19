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
        return new Location([
            "jenis" => $row['jenis'],
            "nama" => $row['nama_outlet'],
            "alamat" => $row['alamat'],
            "lat" => $row['latitude'],
            "long" => $row['longitude'],
        ]);
    }
}
