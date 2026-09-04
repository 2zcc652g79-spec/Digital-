# Commercial Bank of Ethiopia (CBE) - Customer Receipt Project

A responsive, authentic clone of the Commercial Bank of Ethiopia (CBE) mobile banking receipt (`mbreceipt.cbe.com.et`), organized for academic and internship presentations.

---

## 📁 Project Structure

```
cbe_receipt/  (also synchronized in Desktop/Recipt/)
├── index.html        # Main receipt page (fully responsive, full 13 rows)
├── style.css         # Clean CSS styles (responsive layout, exact stamp overlay & print rules)
├── script.js         # JavaScript helpers (PDF download trigger & utilities)
├── README.md         # Documentation & quick guide
└── assets/           # Project media assets
    ├── cbe_logo.png        # Official high-resolution golden CBE emblem
    ├── cbe_stamp_clean.png # Exact CBE purple ink bank stamp (transparent PNG)
    ├── cbe_stamp.png       # Original stamp source image
    ├── cbe_stamp.svg       # Vector bank stamp backup
    └── cbe_qr.svg          # Authentic CBE verification QR code
```

---

## 🚀 Key Features

1. **Exact 13-Row Transaction Table**:
   - Payer & Account (`Nahom Habtu Alemayehu` / `1****7976`)
   - Receiver & Account (`Yitbark Dagmawi Ahmed` / `1****5858`)
   - Payment Type (`A2A`)
   - Payment Date & Time (`Sep 2, 2026, 4:06 PM`)
   - Reference No. (VAT Invoice No) (`FT2624523Q2Y`)
   - Reason / Type of service (`MB Transfer`)
   - Transferred Amount (`8000.00 ETB`)
   - Service Charge (`2.00 ETB`)
   - VAT (15% of service charge) (`0.30 ETB`)
   - Disaster Risk Response Fund (5% of service charge) (`0.10 ETB`)
   - **Total amount debited from customer's account**: `8002.40 ETB` (bold)

2. **Official Assets & Exact Stamp Position**:
   - **Logo**: Genuine Commercial Bank of Ethiopia golden coin emblem in the purple header.
   - **Stamp**: Authentic purple bank seal (`የኢትዮጵያ ንግድ ባንክ / Commercial Bank of Ethiopia * 9.1.6 *`) layered directly over the Payment Type through Transferred Amount rows using `mix-blend-mode: multiply`.

3. **Amount in Word & QR Card**:
   - Clean card with `Amount in Word:` heading, spelled-out Ethiopian Birr amount, and centered verification QR code.

4. **Footer & Floating Download Button**:
   - Official slogan: *"The Bank you can always rely on."*
   - Copyright: `© 2026 Commercial Bank of Ethiopia. All rights reserved.`
   - Sticky floating purple **"Download PDF"** button at the bottom center of the screen that invokes `window.print()` formatted for 1-page PDF export.

---

## ✏️ How to Edit Inputs in Code

In `index.html`, every editable value is clearly commented with an `<!-- INPUT: [Title] -->` tag:

```html
<!-- INPUT: Bank Title -->
<h1 class="bank-title">Commercial Bank of Ethiopia</h1>

<!-- INPUT: Payer Full Name -->
<td class="tx-value">Nahom Habtu Alemayehu</td>

<!-- INPUT: Transferred Amount -->
<td class="tx-value">8000.00 ETB</td>

<!-- INPUT: Total Amount Debited -->
<td class="tx-value">8002.40 ETB</td>
```

---

## 🖥️ How to Run
Simply double-click `index.html` (or `receipt2.html`) in your browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
