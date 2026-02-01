
## Membership-Anzeige von monatlich auf 4-wöchentlich umstellen

### Übersicht
Alle Membership-bezogenen Texte werden von "monatlich" auf "4-wöchentlich" umgestellt, mit Fokus auf den Wochen-Rhythmus (1x pro Woche, 2x pro Woche, So oft du willst).

---

### Änderungen

#### 1. PricingMembershipCards.tsx

| Vorher | Nachher |
|--------|---------|
| "4 Kurse pro Monat" | "1x pro Woche" |
| "8 Kurse pro Monat" | "2x pro Woche" |
| "Unbegrenzte Kurse" | "So oft du willst" |
| "/Monat" | "/4 Wochen" |

---

#### 2. PricingSection.tsx (Homepage)

| Vorher | Nachher |
|--------|---------|
| suffix: "/Monat" | suffix: "/4 Wochen" |
| "Monatlich kündbar" | "Jederzeit kündbar" |

---

#### 3. Preise.tsx (Preise-Seite)

| Vorher | Nachher |
|--------|---------|
| Subheading: "Monatlich" | "4-Wöchentlich" |
| "Jederzeit monatlich kündbar" | "Jederzeit kündbar" |

---

### Technische Details

**Betroffene Dateien:**
- `src/components/PricingMembershipCards.tsx` (Zeilen 11, 17, 23, 48)
- `src/components/PricingSection.tsx` (Zeilen 36, 40)
- `src/pages/Preise.tsx` (Zeilen 82, 94)

**Keine neuen Abhängigkeiten erforderlich.**
