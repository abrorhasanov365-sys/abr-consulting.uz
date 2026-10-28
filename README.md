# ABR-CONSULTING sayti — abr-consulting.uz

GitHub Pages'da ishlaydigan Jekyll sayti, ikki tilda: o'zbekcha (`/`) va ruscha (`/ru/`). Barcha matnlar alohida fayllarda, ularni o'zgartirsangiz sayt 1–2 daqiqada yangilanadi.

## Ma'lumotlarni qanday yangilash mumkin

**1-usul — tahrirlash paneli (eng oson).** https://app.pagescms.org saytiga GitHub orqali kiring, shu repozitoriyni tanlang. Chap menyuda bo'limlar chiqadi: Yangiliklar, Kompaniya ma'lumotlari, Xizmatlar, Mijozlar, Jamoa, Tijorat taklifi. Tahrirlab "Save" bosing.

**2-usul — GitHub'da to'g'ridan-to'g'ri.** Faylni oching, qalam belgisini bosing, o'zgartirib "Commit changes" bosing.

Har bir til uchun matnlar alohida papkada: o'zbekcha `_data/uz/`, ruscha `_data/ru/`. Bir narsani o'zgartirsangiz, ikkinchi tilda ham yangilashni unutmang.

| Nima | Fayl |
|---|---|
| Telefon, email, Telegram, Instagram (ikkala til uchun umumiy) | `_data/contacts.yml` |
| Bosh sahifa matni, manzil, ish vaqti | `_data/uz/company.yml`, `_data/ru/company.yml` |
| Xizmatlar | `_data/uz/services.yml`, `_data/ru/services.yml` |
| Mijozlar va ularning fikrlari | `_data/*/clients.yml`, `_data/*/testimonials.yml` |
| Jamoa | `_data/*/team.yml` (rasmlar `assets/img/team/`) |
| Tariflar va tijorat taklifi | `_data/*/offer.yml` |
| Menyu | `_data/*/nav.yml` |
| Tugma va sarlavha matnlari | `_data/ui.yml` |
| Yangiliklar | o'zbekcha `_posts/`, ruscha `ru/_posts/`; fayl nomi `YYYY-MM-DD-nom.md` |
| Logo | `assets/img/logo-dark.png`, `assets/img/logo-light.png` |

### Yangi yangilik qo'shish

`_posts/` papkasida yangi fayl yarating, masalan `2026-11-05-qqs-ozgarishlari.md`:

```
---
title: "Sarlavha"
category: Soliq
summary: "Bir jumlali qisqa tavsif"
---
Maqola matni...
```
