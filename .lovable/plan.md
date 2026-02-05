

# Plan: Emotionaler Hero mit neuen Textelementen

## Neue Messaging-Struktur

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Spüre den Unterschied.                               │ ← Emotionaler Hook (groß, Outfit font-light)
│                                                         │
│   ───────────                                           │
│                                                         │
│   HOUSE OF PILATES DRESDEN                             │ ← Studio-Name (uppercase, elegant)
│                                                         │
│   Dein Moment für Kraft, Balance und Wohlbefinden.     │ ← Emotionale Subheadline
│                                                         │
│   [ Probestunde buchen → ]                              │ ← Softer CTA
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Gewählte Texte

| Element | Text |
|---------|------|
| Emotionaler Hook | "Spüre den Unterschied." |
| Studio-Name | "HOUSE OF PILATES DRESDEN" |
| Subheadline | "Dein Moment für Kraft, Balance und Wohlbefinden." |
| CTA | "Probestunde buchen" |

## Technische Umsetzung

**src/components/Hero.tsx:**

1. **Neuer emotionaler Hook** "Spüre den Unterschied."
   - Font: Outfit mit `font-light`
   - Größe: text-3xl bis text-5xl
   - Tracking: Weit (`tracking-wide` oder `tracking-[0.15em]`)

2. **Studio-Name**
   - Uppercase mit weitem Letter-Spacing
   - Outfit font, font-light
   - Kleiner als der Hook (text-lg bis text-2xl)

3. **Subheadline** 
   - "Dein Moment für Kraft, Balance und Wohlbefinden."
   - Montserrat (font-body), font-medium

4. **CTA** 
   - Text: "Probestunde buchen"

