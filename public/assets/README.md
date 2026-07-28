# Public Assets

Semua gambar portfolio diletakkan di sini. Next.js otomatis menyajikan file dari folder `public/` melalui URL `/assets/...`.

## Cara Pakai

1. Taruh gambar di folder yang sesuai
2. Komponen sudah otomatis memanggil path-nya (tidak perlu ubah kode)

## Struktur

```
public/assets/
├── profile-photo.jpg              ← Foto profil (Hero section)
├── hero-bg.jpg                    ← Background hero (opsional)
│
├── skills/
│   ├── web-development.jpg        ← Kartu skill: Web Development
│   ├── iot.jpg                    ← Kartu skill: IoT Development
│   └── network.jpg                ← Kartu skill: Network & Systems
│
├── projects/
│   ├── sadam-art.jpg              ← Proyek: SADAM ART
│   └── smart-posture.jpg          ← Proyek: Smart Posture
│
├── experience/
│   └── serbu-computer.jpg         ← Logo: Serbu Computer
│
├── education/
│   ├── universitas-brawijaya.jpg  ← Universitas Brawijaya
│   └── smkn-6-malang.jpg          ← SMKN 6 Malang
│
├── organization/
│   └── provoks.jpg                ← PROVOKS (Programmer Vokasi)
│
├── certifications/
│   ├── microsoft-office.jpg       ← Sertifikat: Microsoft Office
│   ├── content-creator.jpg        ← Sertifikat: Content Creator (BNSP)
│   ├── dasar-visualisasi-data.jpg ← Sertifikat: Dasar Visualisasi Data
│   └── dasar-ai.jpg               ← Sertifikat: Dasar AI
```

## Spesifikasi

| Gambar | Ukuran Min. | Ratio | Format |
|--------|-------------|-------|--------|
| `profile-photo.jpg` | 300×300 px | 1:1 | JPG/PNG/WebP |
| `hero-bg.jpg` | 1920×480 px | 4:1 | JPG/PNG/WebP |
| Skills | 600×400 px | 3:2 | JPG/PNG/WebP |
| Projects | 800×500 px | 16:10 | JPG/PNG/WebP |
| Experience | 200×200 px | 1:1 | JPG/PNG/WebP |
| Education | 200×200 px | 1:1 | JPG/PNG/WebP |
| Organization | 200×200 px | 1:1 | JPG/PNG/WebP |
| Certifications | 600×375 px | 16:10 | JPG/PNG/WebP |

## Tips

- Kompres gambar di [squoosh.app](https://squoosh.app) sebelum upload
- Format **WebP** lebih ringan dari JPG/PNG
- Rename file sesuai nama di atas supaya otomatis terbaca komponen
