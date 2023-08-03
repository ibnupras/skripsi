<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kantor;
use MStaack\LaravelPostgis\Geometries\Point;


class KantorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Kantor::truncate();
        Kantor::create([
            "nama" => "KC MAKASSAR 1",
            "jenis"  => 'KC',
            "alamat" => "Jl. Dr. Ratulangi No.79, Kel. Labuang Baji, Kec. Mamajang Kota Makassar",
            'geom' => new Point('-5.160556', '119.417498'),
            // 'latitude' => '-5.160556',
            // 'longitude' => '119.417498',

        ]);
        Kantor::create([
            "nama" => "KC MAKASSAR 2",
            "jenis"  => 'KC',
            "alamat" => "Jl. Dr. Sam Ratulangi No. 140, Kel. Mario, Kec. Mariso Kota Makassar",
            'geom' => new Point('-5.161689', '119.416916'),
            // 'latitude' => '-5.161689',
            // 'longitude' => '119.416916',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR VETERAN",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Veteran Selatan No. 295 B, , Kel. Maricayya Baru, Kec. Makassar Kota Makassar",
            'geom' => new Point('-5.165247', '119.420356'),
            // 'latitude' => '-5.165247',
            // 'longitude' => '119.420356',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PETTARANI",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Andi Pangeran Pettarani No.70, Kel. Tammamaung, Kec. Panakukkang Kota Makassar",
            'geom' => new Point('-5.146804', '119.437778'),
            // 'latitude' => '-5.146804',
            // 'longitude' => '119.437778',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANAKUKKANG",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Boulevard kav. Edelweys A3 No. 2, Kel. Masale, Kec. Panakkukang Kota Makassar",
            'geom' => new Point('-5.156539', '119.4444517'),
            // 'latitude' => '-5.156539',
            // 'longitude' => '119.4444517',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR TAMALANREA 1",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Perintis Kemerdekaan Km. 10 No. 10-11, Kel. Tamalanrea Jaya, Kec. Tamalanrea  Kota Makassar",
            'geom' => new Point('-5.141333', '119.487442'),
            // 'latitude' => '-5.141333',
            // 'longitude' => '119.487442',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR UNISMUH",
            "jenis"  => 'KCP',
            "alamat" => "Kampus Universitas Muhammadiyah Makassar, Jl. St. Alauddin No. 259, Kel. Gunung Sari, Kec. Rappocini Kota Makassar",
            'geom' => new Point('-5.182684', '119.4423026'),
            // 'latitude' => '-5.182684',
            // 'longitude' => '119.4423026',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR TAMALANREA 2",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Perintis Kemerdekaan Ruko Parumpa No.8 KM.14  , Kel. Paccerakkang, Kec. Biringkanaya Kota Makassar",
            'geom' => new Point('-5.117065', '119.510919'),
            // 'latitude' => '-5.117065',
            // 'longitude' => '119.510919',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANNAMPU",
            "jenis"  => 'KCP',
            "alamat" => "Jl, Pannampu No. 7, Kel. Kaluku Bodoa, Kec. Tallo Kota Makassar",
            'geom' => new Point('-5.118401', '119.428012'),
            // 'latitude' => '-5.118401',
            // 'longitude' => '119.428012',

        ]);
        Kantor::create([
            "nama" => "KFO MANDIRI SULAWESI MAKASSAR",
            "jenis"  => 'KFO',
            "alamat" => "Gedung Bank Mandiri Kantor Cabang Pembantu Sulawesi, Jl. Sulawesi No. 81, Kel. Pattunuang, Kec. Wajo Kota Makassar",
            'geom' => new Point('-5.1303211', '119.4073'),
            // 'latitude' => '-5.1303211',
            // 'longitude' => '119.4073',

        ]);
        Kantor::create([
            "nama" => "KFO POS MAKASSAR",
            "jenis"  => 'KFO',
            "alamat" => "Kantor Pos Makassar, Jl. Slamet Riyadi No. 10, Kel. Bulo Gading, Kec. Ujung Pandang Kota Makassar",
            'geom' => new Point('-5.1349', '119.40691'),
            // 'latitude' => '-5.1349',
            // 'longitude' => '119.40691',

        ]);
        Kantor::create([
            "nama" => "KFO POS ANTANG",
            "jenis"  => 'KFO',
            "alamat" => "Jl. Antang Raya No. 10/12, Kel. Bangkala, Kec. Manggala Kota Makassar",
            'geom' => new Point('-5.167628', '119.4791438'),
            // 'latitude' => '-5.167628',
            // 'longitude' => '119.4791438',

        ]);
        Kantor::create([
            "nama" => "KFO MANDIRI DAYA",
            "jenis"  => 'KFO',
            "alamat" => "Komplek Bukit Khatulistiwa Blok B/ 15, Jl. Perintis Kemerdekaan KM 13, Kel. Paccerakkang, Kec. Biringkanaya Kota Makassar",
            'geom' => new Point('-5.119187', '119.510814'),
            // 'latitude' => '-5.119187',
            // 'longitude' => '119.510814',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR RS IBNU SINA",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Urip Sumoharjo KM. 5 No.264, Kel. Karampuang, Kec. Panakkukang Kota Makassar",
            'geom' => new Point('-5.139458', '119.44609'),
            // 'latitude' => '-5.139458',
            // 'longitude' => '119.44609',

        ]);

        Kantor::create([
            "nama" => "ATM KEMENAG TAKALAR",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Jend. Sudirman No.104, Kel. Kalabbirang, Kec. Pattallassang, Kab. Takalar, Sulawesi Selatan.",
            'geom' => new Point('-5.42117169999999', '119.4420082'),
            // 'latitude' => '-5.42117169999999',
            // 'longitude' => '119.4420082',

        ]);
        Kantor::create([
            "nama" => "ATM RS AWAL BROS",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Urip Sumoharjo No.43, Malimongan Baru, Bontoala, Kota Makassar, Sulawesi Selatan",
            'geom' => new Point('-5.13467109999999', '119.429325'),
            // 'latitude' => '-5.13467109999999',
            // 'longitude' => '119.429325',

        ]);
        Kantor::create([
            "nama" => "KC MAKASSAR 1",
            "jenis"  => 'ATM',
            "alamat" => "Jl. DR Ratulagi No.79, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.1605006', '119.4174839'),
            // 'latitude' => '-5.1605006',
            // 'longitude' => '119.4174839',

        ]);
        Kantor::create([
            "nama" => "ATM MOBIL KAS KELILING",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Haji Bau No. 7 E-G, Kel. Losari, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.148307', '119.41216'),
            // 'latitude' => '-5.148307',
            // 'longitude' => '119.41216',

        ]);
        Kantor::create([
            "nama" => "ATM YBW UMI MAKASSAR",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Urip Sumoharjo No.264, Kota Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.1397992', '119.446044'),
            // 'latitude' => '-5.1397992',
            // 'longitude' => '119.446044',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANAKUKKANG",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Boulevard kav. Edelweys A3 No. 2, Panakkukang, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.15656679999999', '119.4444757'),
            // 'latitude' => '-5.15656679999999',
            // 'longitude' => '119.4444757',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANAKUKKANG",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Boulevard kav. Edelweys A3 No. 2, Panakkukang, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.15656679999999', '119.4444757'),
            // 'latitude' => '-5.15656679999999',
            // 'longitude' => '119.4444757',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR TAMALANREA 1",
            "jenis"  => 'KCP',
            "alamat" => "Jl. Perintis Kemerdekaan 10 No.10-11, Kec. Tamalanrea, Makassar",
            'geom' => new Point('-5.1276829', '119.50012'),
            // 'latitude' => '-5.1276829',
            // 'longitude' => '119.50012',

        ]);
        Kantor::create([
            "nama" => "ATM POLITEKNIK NEGERI UJUNG PANDANG MAKASSAR",
            "jenis"  => 'ATM',
            "alamat" => "Jl.Perintis Kemerdekaan km.10, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.136747', '119.491711'),
            // 'latitude' => '-5.136747',
            // 'longitude' => '119.491711',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR UNISMUH",
            "jenis"  => 'ATM',
            "alamat" => "Kampus Universitas Muhammadiyah Makassar, Jl. St. Alauddin No. 259, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.1827664', '119.4410929'),
            // 'latitude' => '-5.1827664',
            // 'longitude' => '119.4410929',

        ]);
        Kantor::create([
            "nama" => "ATM STIBA MAKASSAR",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Inspeksi PAM, Antang Manggala, Kota Makassar, Sulawesi Selatan ",
            'geom' => new Point('-5.1503113', '119.4760597'),
            // 'latitude' => '-5.1503113',
            // 'longitude' => '119.4760597',

        ]);
        Kantor::create([
            "nama" => "KC MAKASSAR 1",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Dr. Ratulangi No.79, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.1605006', '119.4174839'),
            // 'latitude' => '-5.1605006',
            // 'longitude' => '119.4174839',

        ]);
        Kantor::create([
            "nama" => "ATM KAMPUNG POPSA",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Ujung Pandang No.4, Bulo Gading, Kec. Ujung Pandang Kota Makassar, Propinsi Sulawesi Selatan 90171",
            'geom' => new Point('-5.133682', '119.4044207'),
            // 'latitude' => '-5.133682',
            // 'longitude' => '119.4044207',

        ]);
        Kantor::create([
            "nama" => "ATM RS SAYANG BUNDA",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Letjen Hertasning No.52, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
            'geom' => new Point('-5.1626549', '119.4427705'),
            // 'latitude' => '-5.1626549',
            // 'longitude' => '119.4427705',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANAKUKKANG",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Boulevard kav. Edelweys A3 No. 2, Panakkukang, Makassar, Sulawesi Selatan.",
            'geom' => new Point('-5.1565668', '119.4444757'),
            // 'latitude' => '-5.1565668',
            // 'longitude' => '119.4444757',

        ]);
        Kantor::create([
            "nama" => "MAKASSAR 01",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Dr Sam Ratulangi No. 140",
            'geom' => new Point('-5.1610944', '119.4170481'),
            // 'latitude' => '-5.1610944',
            // 'longitude' => '119.4170481',

        ]);
        Kantor::create([
            "nama" => "MKK MAKASSAR 2",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Dr Sam Ratulangi No. 140",
            'geom' => new Point('-8.0941889', '112.58424'),
            // 'latitude' => '-8.0941889',
            // 'longitude' => '112,58424',

        ]);
        Kantor::create([
            "nama" => "MAKASSAR 02",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Dr Sam Ratulangi No. 140",
            'geom' => new Point('-5.1610944', '119.4170481'),
            // 'latitude' => '-5.1610944',
            // 'longitude' => '119.4170481',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR VETERAN",
            "jenis"  => 'ATM',
            "alamat" => "Jl Veteran Utara No 295 B, Kel.Maricaya Baru,Kec.Makassar,Kota Makassar",
            'geom' => new Point('-5.147824', '119.425127'),
            // 'latitude' => '-5.147824',
            // 'longitude' => '119.425127',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR TAMALANREA 2",
            "jenis"  => 'ATM',
            "alamat" => "Jl Perintis Kemerdekaan, Ruko Spg Telkomas Km 13 Daya",
            'geom' => new Point('-5.1230891', '119.5079195'),
            // 'latitude' => '-5.1230891',
            // 'longitude' => '119.5079195',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR PANNAMPU",
            "jenis"  => 'ATM',
            "alamat" => "Jl, Pannampu No. 7 Kel.Pannampu Kec.Tallo",
            'geom' => new Point('-5.1178181', '119.4272301'),
            // 'latitude' => '-5.1178181',
            // 'longitude' => '119.4272301',

        ]);
        Kantor::create([
            "nama" => "KOMPLEKS RUMAH KOS ANNISA SAMATA GOWA",
            "jenis"  => 'ATM',
            "alamat" => "Kompleks Rumah Kos Annisa Samata Gowa, Sungai Rumbai, Kab Dharmasraya , Sumatra Barat 27684",
            'geom' => new Point('-5.1958966', '119.5020698'),
            // 'latitude' => '-5.1958966',
            // 'longitude' => '119.5020698',

        ]);
        Kantor::create([
            "nama" => "DEPO MISI PASARAYA ANTANG",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Antang Raya No.49A-51, Antang, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90234",
            'geom' => new Point('-5.1611522', '119.4771646'),
            // 'latitude' => '-5.1611522',
            // 'longitude' => '119.4771646',

        ]);
        Kantor::create([
            "nama" => "SWALAYAN TOKO SATU SAMA",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Landak Lama No.17, Labuang Baji, Kec. Mamajang, Kota Makassar, Sulawesi Selatan 90132",
            'geom' => new Point('-5.161952', '119.4189753'),
            // 'latitude' => '-5.161952',
            // 'longitude' => '119.4189753',

        ]);
        Kantor::create([
            "nama" => "CRM KCP MAKASSAR PETTARANI",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Andi Pangeran Pettarani No.70 Kel.Masale Kec.Panakkukang",
            'geom' => new Point('-5.1469794', '119.4380827'),
            // 'latitude' => '-5.1469794',
            // 'longitude' => '119.4380827',

        ]);
        Kantor::create([
            "nama" => "KC MAKASSAR 2",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Dr Sam Ratulangi No. 140",
            'geom' => new Point('-5.1610944', '119.4170481'),
            // 'latitude' => '-5.1610944',
            // 'longitude' => '119.4170481',

        ]);
        Kantor::create([
            "nama" => "KCP MAKASSAR VETERAN",
            "jenis"  => 'ATM',
            "alamat" => "Jl Veteran Utara No 295 B",
            'geom' => new Point('-5.147824', '119.425127'),
            // 'latitude' => '-5.147824',
            // 'longitude' => '119.425127',

        ]);
        Kantor::create([
            "nama" => "MALL PANAKUKKANG MAKASSAR",
            "jenis"  => 'ATM',
            "alamat" => "Jl. Boulevard nO.3, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231",
            'geom' => new Point('-5.1572567', '119.445919'),
            // 'latitude' => '-5.1572567',
            // 'longitude' => '119.445919',

        ]);

    }
}
