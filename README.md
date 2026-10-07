# Gym Desk — Management App

Smart gym member management, member photo upload & ID cards, payments & fee records, automated WhatsApp reminders, and real-time dashboard for **Gym Desk**.

---

## ✨ Features Added

1. **Simple Secure Login System (Netlify & Public Protection)**:
   - App load hote hi sabse pehle **Thakur Gym Portal Login Screen** aati hai.
   - Default Username: `thakurgym` | Default Password: `dinesh3151`
   - **Password Change Karne Ka Tarika**: Future mein agar username ya password badalna ho, to Supabase Dashboard mein jaakar **Table Editor → admin_users** table mein direct edit kar sakte hain!
   - Security ke liye koi public "Forgot Password" option nahi rakha gaya hai taaki koi unauthorized user ise reset na kar sake.
2. **Payment Edit & Delete Options**:
   - Agar galti se galat payment entry dal gayi, to Payments tab mein **Edit (✏️)** button se amount, date, method ya note theek kar sakte hain.
   - Galat entry ko **Delete (🗑️)** button se single click confirmation ke saath remove kar sakte hain.
3. **Payments Tab Month-Wise Filter**:
   - Payments tab mein **Month Filter Dropdown** diya gaya hai jisse aap kisi bhi particular month (e.g. March 2026, February 2026) ki payments dekh sakte hain.
   - Upar ke Total Collection, Online Collection aur Cash Collection ke teeno cards selected month ke according dynamically update hote hain!
4. **Single-Click Gym Data Backup (Members + Payments CSV)**:
   - Header, sidebar aur toolbars mein **📥 Backup (CSV)** button diya gaya hai.
   - Single click par saare gym members ki poori jaankari aur saari payments ka poora hisaab do separate structured UTF-8 CSV files mein turant backup ho jaata hai.
5. **Member Photo Upload & Live Camera Capture**:
   - Members add karte ya edit karte waqt photo upload ya direct mobile camera se selfie lene ka feature.
   - **Smart Client-Side Compression**: Phone ke 5MB-10MB ke photo ko browser mein hi automatic crop & compress karke **~25 KB - 35 KB** kar deta hai. Database kabhi heavy nahi hota aur app supersonic fast chalti hai.
6. **Photo Everywhere**:
   - Member Directory (Cards View & Spreadsheet Table View).
   - Expiring Members & Overdue Dues lists with status ring indicators.
   - Payment History table & WhatsApp receipt generator.
   - Digital Gym ID Card / Member Pass modal with full details.
7. **Gym Desk Branding & Official Logo**:
   - Official Gym Desk logo icon, app title, PWA manifest, sidebar, mobile header, and prefilled WhatsApp reminder templates.
8. **Modern Responsive Design**:
   - Ultra-sleek dark athletic theme (Onyx black, vibrant gym emerald `#10B981`, gold alerts, glassmorphism).
   - Fully optimized for Mobile screens (Touch-first Card Grid, Bottom Navigation Bar) and Desktop screens.

---

## 💾 Database Space Calculation (500 Members ke liye)

Agar aap **500 members** ka data with photos save karte hain:

| Data Type | 1 Member ka Size | 500 Members ka Total Size |
|---|---|---|
| **Text Data** (Name, Phone, Dates, Plan, Emergency Contact) | ~0.5 KB | **~0.25 MB** (250 KB) |
| **Member Photo** (Auto-compressed 320x320 WebP/JPEG) | ~25 KB - 35 KB | **~15 MB - 18 MB** |
| **Payments & Logs** (1 Year of records) | ~0.5 KB per payment | **~1.5 MB** |
| **TOTAL SPACE NEEDED** | — | **~18 MB to 20 MB** |

### Supabase Free Tier Comparison:
- Supabase ke **Free Plan** mein aapko **500 MB Database Storage** + **1 GB File Storage** bilkul FREE milta hai.
- 500 members ka 20 MB data Supabase ki free limit ka sirf **~4%** hai!
- **Aapko koi paid plan lene ki zaroorat nahi hai.** 500 kya, 2,000+ members ka data bhi bina kisi extra kharche ke aaram se Supabase Free Tier par saalon chalega.

---

## 🚀 Setup Guide (Ek Baar Karna Hai)

1. https://supabase.com par free account banao, "New project" create karo.
2. Project khulne ke baad, left sidebar se **SQL Editor** kholo.
3. `supabase-schema.sql` file ka poora content copy-paste karke **Run** dabao.
   *(Agar table pehle se bani hui hai to SQL Editor mein sirf ye line chala dein: `alter table members add column if not exists photo_url text;`)*
4. Left sidebar se **Project Settings → API** kholo. Wahan se **Project URL** aur **anon public** key copy karo.
5. `config.js` file mein `YOUR_SUPABASE_PROJECT_URL` aur `YOUR_SUPABASE_ANON_KEY` ki jagah paste karo.
6. Local server start karein:
   ```bash
   npm start
   ```
   Aur browser mein kholein: `http://localhost:3000/`

---

## 📱 Mobile Par App Ki Tarah Kaise Chalayein (PWA)

1. Mobile browser (Chrome / Safari) mein app ka link kholein (e.g. `http://<your-pc-ip>:3000` ya aapka hosted URL).
2. **Android**: Screen ke top-right 3 dots (⋮) par tap karke **"Install app"** ya **"Add to Home screen"** karein.
3. **iPhone**: Safari mein neeche **Share** button dabakar **"Add to Home Screen"** karein.
4. Home screen par **Gym Desk** ka icon ban jaayega — tap karte hi native app ki tarah full screen open hoga!

---

## 👨‍💻 Developer & Contact

Designed and engineered with ❤️ by **Yuvraj**.

- **GitHub Profile**: [github.com/Yuvraj0880](https://github.com/Yuvraj0880) *(Check out my other projects)*
- **WhatsApp Direct Chat**: [+91 78143 36851](https://wa.me/917814336851)
- **Instagram**: [@a_simple_insta_user](https://www.instagram.com/a_simple_insta_user?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==)

