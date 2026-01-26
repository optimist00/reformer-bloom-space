
## Gutschein-Sektion und Unterseite erstellen

### Übersicht
Ich werde eine neue Geschenk-Sektion unter dem FAQ-Bereich hinzufügen und eine neue "Gutscheine"-Unterseite erstellen.

---

### 1. FAQSection.tsx erweitern

**Neue Sektion nach den Kontakt-Buttons hinzufügen:**

```text
+------------------------------------------+
|           Mache jemandem eine Freude.    |  <- Kleiner Header
|                                          |
|        Jetzt Reformer Kurs schenken:     |  <- Beschreibungstext
|                                          |
|         [Gutscheine entdecken]           |  <- CTA Button -> /gutscheine
+------------------------------------------+
```

**Styling:**
- Kleiner Header im gleichen Stil wie bestehende Subheadings (uppercase, tracking, text-primary)
- Beschreibung in text-muted-foreground
- CTA-Button mit variant="cta" oder variant="secondary"
- Trennlinie oberhalb zur visuellen Abgrenzung

---

### 2. Neue Seite: Gutscheine.tsx erstellen

**Route:** `/gutscheine`

**Seitenstruktur (analog zu Preise.tsx):**
- Header mit "Zurück zur Startseite" Button
- Titel: "Gutscheine"
- Hero-Bereich mit Beschreibung zum Verschenken von Reformer-Kursen
- Platzhalter-Inhalt für Gutschein-Optionen (kann später erweitert werden)

---

### 3. Route in App.tsx registrieren

Neue Route hinzufügen:
```tsx
import Gutscheine from "./pages/Gutscheine";
// ...
<Route path="/gutscheine" element={<Gutscheine />} />
```

---

### Technische Details

**Datei-Änderungen:**
1. `src/components/FAQSection.tsx` - Neue Geschenk-Sektion hinzufügen
2. `src/pages/Gutscheine.tsx` - Neue Seite erstellen
3. `src/App.tsx` - Route registrieren

**Abhängigkeiten:**
- react-router-dom (Link) für Navigation
- Bestehende UI-Komponenten (Button)
- Bestehendes Design-System (Farben, Typografie)
