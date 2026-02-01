

## Horizontale Badges für Membership-Perks

### Vorschau des Designs

```text
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Priority       │  │  Community      │  │  6h Storno      │  │  Wartelisten-   │
│  Booking        │  │  Events         │  │                 │  │  Priorität      │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘

        (Desktop: 4 nebeneinander | Mobile: 2x2 Grid)
```

---

### Technische Umsetzung

**Datei:** `src/pages/Preise.tsx`

Die aktuelle `<ul>` Liste (Zeilen 101-106) wird ersetzt durch ein responsives Flex/Grid Layout mit Badges:

```tsx
<div className="flex flex-wrap justify-center gap-3 mb-4">
  <span className="inline-flex items-center px-4 py-2 rounded-full 
                   bg-sage/10 border border-sage/30 text-sm text-earth-dark">
    Priority Booking
  </span>
  <span className="inline-flex items-center px-4 py-2 rounded-full 
                   bg-sage/10 border border-sage/30 text-sm text-earth-dark">
    Community Events
  </span>
  <span className="inline-flex items-center px-4 py-2 rounded-full 
                   bg-sage/10 border border-sage/30 text-sm text-earth-dark">
    6h Storno
  </span>
  <span className="inline-flex items-center px-4 py-2 rounded-full 
                   bg-sage/10 border border-sage/30 text-sm text-earth-dark">
    Wartelisten-Priorität
  </span>
</div>
```

---

### Styling-Details

- **Hintergrund:** `bg-sage/10` (zartes Grün, passend zur Brand)
- **Border:** `border border-sage/30` (subtiler Rahmen)
- **Form:** `rounded-full` (Pill-Shape)
- **Padding:** `px-4 py-2` (kompakt aber lesbar)
- **Text:** `text-sm text-earth-dark` (klein, aber gut lesbar)
- **Abstände:** `gap-3` (gleichmäßige Abstände zwischen Badges)
- **Responsiv:** `flex-wrap` sorgt für automatischen Umbruch auf Mobile (2x2)

---

### Vorteile dieser Lösung

- Kompakt und scannable
- Passt zum minimalistischen Boutique-Stil
- Responsiv ohne zusätzlichen Code
- Visuell ansprechender als Textliste

