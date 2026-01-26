
## Gutscheine-Seite mit echten Gutschein-Optionen aktualisieren

### Übersicht
Die bestehenden Platzhalter-Karten werden durch die 3 echten Gutschein-Optionen ersetzt, jeweils mit Beschreibungstext und CTA-Button.

---

### Änderungen in `src/pages/Gutscheine.tsx`

**Bereich:** Zeilen 59-95 (Grid mit Platzhalter-Karten)

**Neue Struktur pro Gutschein-Karte:**

```text
+------------------------------------------+
|              [Preis: 40€]                |  <- Große Preisanzeige
|                                          |
|         Beschreibungstext                |  <- Erklärender Text
|                                          |
|         [Jetzt kaufen]                   |  <- CTA Button -> Bsport Link
+------------------------------------------+
```

---

### Die 3 Gutschein-Karten

**1. 40€ Gutschein**
- Preis: 40€
- Text: Ein Geschenk-Gutschein in Höhe von 40€ mit dem zum Beispiel der Zugang zu einem Einzelkurs mit einem Paar unserer Grip-Socken erworben werden kann
- CTA: "Jetzt kaufen" → `https://backoffice.bsport.io/checkout/5314/giftcard/18374/?force=true`

**2. 100€ Gutschein** (als "Beliebt" hervorgehoben)
- Preis: 100€
- Text: Ein Geschenk-Gutschein in Höhe von 100€ mit dem zum Beispiel der Zugang zu 3 Kursen mit einem Paar unserer Grip-Socken erworben werden kann.
- CTA: "Jetzt kaufen" → `https://backoffice.bsport.io/checkout/5314/giftcard/18376/?force=true`

**3. Individuelle Höhe**
- Titel: Individuelle Höhe
- Text: Ein Geschenk-Gutschein in beliebiger Höhe genau nach deinen Wünschen! Gebe dem Empfänger volle Freiheit über die Buchung
- CTA: "Jetzt kaufen" → `https://backoffice.bsport.io/checkout/5314/giftcard/18377/?force=true`

---

### Styling

- Beibehaltung des bestehenden Karten-Designs: `bg-cream rounded-2xl p-6 shadow-soft`
- 100€-Karte erhält Hervorhebung mit `border-2 border-primary` und "Beliebt"-Badge
- CTA-Buttons mit `variant="cta"` für konsistentes Branding
- Beschreibungstext in `text-muted-foreground text-sm`

---

### Zusätzliche Anpassung

**Entfernen der "Gutschein anfragen" Sektion** (Zeilen 99-115)
Da die Gutscheine jetzt direkt über Bsport gekauft werden können, wird die Kontakt-Sektion entfernt oder durch eine einfachere Frage-Sektion ersetzt.

---

### Technische Details

**Datei-Änderungen:**
- `src/pages/Gutscheine.tsx` - Karten mit echten Daten und CTA-Links aktualisieren

**Keine neuen Abhängigkeiten erforderlich.**
