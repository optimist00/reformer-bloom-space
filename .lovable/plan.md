

## Preise-Seite Redesign mit Sektionstrennern

### Übersicht
Die Preise-Seite wird visuell neu strukturiert mit klaren Trennlinien/Animationen zwischen den Sektionen und einer neuen Personal Training Sektion am Ende.

---

### Neue Seitenstruktur

```text
┌─────────────────────────────────────────┐
│  DISCOVERY PACKAGE                      │
│  (Terracotta-Hintergrund, abgesetzt)    │
└─────────────────────────────────────────┘
                    │
         ～～～～～～～～～～～～
           "Öfter hier?"
         ～～～～～～～～～～～～
                    │
┌─────────────────────────────────────────┐
│  KURSPÄSSE                              │
│  (Beige-Hintergrund wie jetzt)          │
└─────────────────────────────────────────┘
                    │
         ～～～～～～～～～～～～
     "Du willst noch mehr Vorteile?"
         ～～～～～～～～～～～～
                    │
┌─────────────────────────────────────────┐
│  MEMBERSHIPS                            │
│  (Cream-Hintergrund wie jetzt)          │
└─────────────────────────────────────────┘
                    │
              ↓  ↓  ↓
        (Pfeil-Animation)
                    │
┌─────────────────────────────────────────┐
│  PERSONAL TRAINING                      │
│  "Dein Körper hat die ungeteilte        │
│   Aufmerksamkeit verdient"              │
│  kurse@houseofpilatesdresden.de         │
└─────────────────────────────────────────┘
```

---

### Änderungen im Detail

#### 1. Discovery Package - Visuell absetzen
- Hintergrund: `bg-terracotta/10` mit `border border-terracotta/30`
- Leicht abgerundete Card im Container
- "AKTION" Badge oben

#### 2. Neue Komponente: SectionDivider
- Schlängellinie als SVG (Wave-Pattern)
- Zentrierter Text mit Linie davor/danach
- Sanfte Fade-in Animation beim Scrollen

#### 3. Neue Komponente: ArrowDivider
- 3 animierte Pfeile nach unten
- Subtile bounce-Animation

#### 4. Neue Sektion: Personal Training
- Eleganter Hintergrund (gradient oder earth-tones)
- Headline: "Dein Körper hat die ungeteilte Aufmerksamkeit verdient"
- Subheadline: "Personaltrainings und exklusive Einzelsessions"
- Email-Link: kurse@houseofpilatesdresden.de
- Mail-Icon mit Button

---

### Technische Umsetzung

**Neue Dateien:**
- `src/components/SectionDivider.tsx` - Wiederverwendbare Trennlinie mit Text
- `src/components/ArrowDivider.tsx` - Pfeil-Animation

**Geänderte Dateien:**
- `src/pages/Preise.tsx` - Neue Struktur mit allen Komponenten
- `src/index.css` - CSS-Animationen für Wave und Pfeile

---

### SectionDivider Design

```text
    ～～～～～～～   Öfter hier?   ～～～～～～～
```

- SVG-Wave-Linie links und rechts
- Text in der Mitte (font-heading, italic)
- Farbe: `text-earth/60` und `stroke-earth/30`

---

### ArrowDivider Design

```text
            ↓
            ↓
            ↓
```

- 3 Chevron-Down Icons
- Gestaffelte Animation (nacheinander bounce)
- Farbe: `text-sage`

---

### Personal Training Sektion Design

- Hintergrund: Subtiler Gradient von `cream` zu `sand`
- Heading: "Dein Körper hat die ungeteilte Aufmerksamkeit verdient"
- Subheading: "Personaltrainings und exklusive Einzelsessions"
- Email als klickbarer Link mit Mail-Icon
- Button: "Jetzt anfragen"

