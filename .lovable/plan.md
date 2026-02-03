

# Plan: Neues Hero-Bild testen

## Aktion

Das hochgeladene Bild `hop_eröffnung-30.jpg` wird als neues Hero-Bild in den Header eingebaut.

## Anpassungen

### 1. Bild kopieren
- Bild von `user-uploads://hop_eröffnung-30.jpg` nach `src/assets/hero-reformer.jpg` kopieren

### 2. Hero.tsx anpassen
- Import von `hero-studio.jpg` auf `hero-reformer.jpg` ändern
- `objectPosition` anpassen: Da das Bild vertikal ausgerichtet ist (Person liegt, Beine nach oben), muss der Fokuspunkt neu gesetzt werden
  - Desktop (1/3 Streifen rechts): `objectPosition: 'center 30%'` - zeigt oberen Bereich mit Beinen und Ball
  - Mobile (fullscreen): `objectPosition: 'center 40%'` - optimaler Ausschnitt für Hochformat

### 3. Alt-Text aktualisieren
- Von "House of Pilates Dresden Studio" zu "Pilates Training auf dem Reformer im House of Pilates Dresden"

## Dateiaenderungen

| Datei | Aenderung |
|-------|-----------|
| `src/assets/hero-reformer.jpg` | Neu (kopiert) |
| `src/components/Hero.tsx` | Import und objectPosition anpassen |

## Hinweis

Das ist ein Test - das urspruengliche Bild (`hero-studio.jpg`) bleibt erhalten, falls du zurueckwechseln moechtest.

