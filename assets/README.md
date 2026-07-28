# Assets

Letakkan semua gambar portofolio di sini. Setelah menambahkan gambar, update path di file komponen yang sesuai.

## Struktur Folder

```
assets/
├── profile-photo.jpg       # Foto profil (Hero)
├── hero-bg.jpg             # Background hero (opsional)
├── skills/
│   ├── web-development.jpg # Kartu skill: Web Development
│   ├── iot.jpg             # Kartu skill: IoT Development
│   └── network.jpg         # Kartu skill: Network & Systems
├── projects/
│   ├── sadam-art.jpg       # Proyek: SADAM ART
│   └── smart-posture.jpg   # Proyek: Smart Posture
├── experience/
│   └── serbu-computer.jpg  # Logo: Serbu Computer
├── certifications/
│   ├── microsoft-office.jpg
│   ├── content-creator.jpg
│   ├── dasar-visualisasi-data.jpg
│   └── dasar-ai.jpg
└── testimonials/
    ├── person-1.jpg
    ├── person-2.jpg
    └── person-3.jpg
```

## Spesifikasi Gambar

| Asset | Dimensi Minimum | Ratio | Format |
|-------|-----------------|-------|--------|
| `profile-photo.jpg` | 300 x 300 px | 1:1 | JPG/PNG/WebP |
| `hero-bg.jpg` | 1920 x 480 px | 4:1 | JPG/PNG/WebP |
| Skills images | 600 x 400 px | 3:2 | JPG/PNG/WebP |
| Projects images | 800 x 500 px | 16:10 | JPG/PNG/WebP |
| Experience logo | 200 x 200 px | 1:1 | JPG/PNG/WebP |
| Certifications | 600 x 375 px | 16:10 | JPG/PNG/WebP |
| Testimonials avatar | 200 x 200 px | 1:1 | JPG/PNG/WebP |

## Cara Mengganti Gambar

1. Tempatkan file gambar di folder `assets/` (ikuti struktur di atas)
2. Buka file komponen yang ingin diupdate (contoh: `components/Hero.tsx`)
3. Ganti placeholder `<div className="img-placeholder">Image</div>` dengan tag `<Image>`:

```tsx
// Sebelum (placeholder)
<div className="w-36 h-36 img-placeholder">
  <span>Photo</span>
</div>

// Sesudah (dengan gambar)
import Image from "next/image";

<Image
  src="/assets/profile-photo.jpg"
  alt="Foto profil"
  width={144}
  height={144}
  className="rounded-3xl object-cover"
/>
```

4. Untuk gambar di folder subdirektori (skills/, projects/, dst), path-nya:
   - `/assets/skills/web-development.jpg`
   - `/assets/projects/sadam-art.jpg`
   - dst.

## Tips

- Gunakan format **WebP** untuk ukuran file lebih kecil
- Kompres gambar di [squoosh.app](https://squoosh.app) sebelum upload
- Pastikan semua gambar memiliki **alt text** yang deskriptif
- Untuk hero background, gunakan gambar lebar dengan overlay gelap sudah built-in di CSS
