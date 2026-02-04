# Contributing

ขอบคุณที่สนใจช่วยพัฒนาโปรเจคนี้! เอกสารนี้สรุปแนวทางปฏิบัติสำหรับการเพิ่มฟีเจอร์ แก้บั๊ก และส่ง Pull Request

## Branching
- สร้าง branch ใหม่จาก `main` เสมอ
- ใช้ชื่อ branch ตามรูปแบบ: `feature/<short-desc>` หรือ `fix/<short-desc>` (ตัวอย่าง: `feature/add-contact-form`)

## Development (Local)
1. ติดตั้ง dependencies (ครั้งแรกหรือหลังเปลี่ยน lockfile):

```
npm install
```

2. รัน dev server:

```
npm run dev
```

3. สร้างเพจหรือ component ใหม่ภายใน `src/app/` (App Router) หรือ `src/pages/` ตามที่โปรเจคใช้

4. ถ้า component เป็น client-side ให้เริ่มไฟล์ด้วย `"use client"` และเรียก browser-only libraries ภายใน `useEffect` เท่านั้น

## Types, Lint, Tests, Build
- ก่อน push/PR ให้แนใจว่า:

```
npm run lint
npm run build
npm test   # ถ้ามี
```

## Environment Variables
- ไม่ commit ค่าลง repo
- เพิ่มตัวแปรที่ต้องการใน Vercel (Project → Settings → Environment Variables)
- ตัวอย่างตัวแปรที่โปรเจคนี้ต้องการ:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Pull Request
- เปิด PR จาก branch ของคุณไปยัง `main`
- ใน PR description ระบุ: สิ่งที่เปลี่ยน, วิธีทดสอบ, env vars ใหม่ (ถ้ามี)
- Checklist ตัวอย่าง (จะใส่เป็น template ใน repository):

- [ ] `npm run build` ผ่าน
- [ ] `npm run lint` ผ่าน
- [ ] Unit tests (ถ้ามี) ผ่าน
- [ ] Env vars ถูกระบุและไม่ commit ลงโค้ด

## Code Review & Merge
- ให้ reviewer ตรวจเรื่อง logic, types, performance, security และ accessibility
- เมื่อผ่าน review ให้ merge (prefer squash or merge commit ตามนโยบายทีม)

## Deployment
- เมื่อ merge แล้ว Vercel จะ build และ deploy อัตโนมัติ (ต้องตั้ง Environment Variables ใน Vercel ก่อน)
- หากต้องการ redeploy ให้ push commit ใหม่หรือตัวเลือก redeploy ใน Vercel dashboard

## Troubleshooting
- ถ้า build บน Vercel ล้ม ให้ดู Build Logs และ Runtime Logs ใน Vercel
- ถ้าพบ warning เกี่ยวกับ `@next/swc` ให้ลอง clean install:

```
rm -rf node_modules package-lock.json
npm install
```

---
ถ้าต้องการ ฉันสามารถเพิ่ม GitHub Actions config เพื่อรัน `build`/`lint`/`test` อัตโนมัติบน PR ได้ บอกฉันมาได้เลย
