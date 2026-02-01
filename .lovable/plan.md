
# Plan: Konsistente Section-Label-Struktur auf der Preise-Seite

## Ziel
Die drei Übergangs-Labels ("Öfter hier?", "Du willst noch mehr Vorteile?", "Noch individueller?") sollen den Kunden logisch durch die Preisstufen führen - von einzelnen Kursen über Memberships bis zum Personal Training. Alle Labels bekommen das gleiche Design und die gleiche Positionierung.

## Analyse der gewünschten Struktur

```text
┌─────────────────────────────────────────┐
│         Discovery Package               │  Einstieg für Neukunden
│         (Aktion-Badge)                  │
└─────────────────────────────────────────┘
                    │
          ~~~~ Öfter hier? ~~~~           ← Übergang: "Du kommst wieder?"
                    │
┌─────────────────────────────────────────┐
│           KURSPÄSSE                     │  Einzelkurs, 5er, 10er Karte
│     (Einzelkurs bis 10er Karte)         │
└─────────────────────────────────────────┘
                    │
    ~~~~ Du willst noch mehr Vorteile? ~~~← Übergang: "Mehr Commitment = Mehr Vorteile"
                    │
┌─────────────────────────────────────────┐
│          MEMBERSHIPS                    │  Regelmäßiges Training
│   (Medium, Large, Unlimited)            │
│   + Member Benefits                     │
└─────────────────────────────────────────┘
                    │
       ~~~~ Noch individueller? ~~~~      ← Übergang: "Persönliche Betreuung"
                    │
┌─────────────────────────────────────────┐
│       PERSONAL TRAINING                 │  1:1 Sessions
│         (Kontakt per Mail)              │
└─────────────────────────────────────────┘
```

## Umsetzung

### 1. Eine einheitliche Komponente verwenden
- `SectionDivider` wird zur Standard-Komponente für alle drei Labels
- `InlineSectionLabel` wird nicht mehr benötigt
- Alle Labels erscheinen **zwischen** den Sections als eigenständige Übergangselemente

### 2. Anpassungen an SectionDivider
- Einheitliches Styling für alle drei Verwendungen
- Konsistente Abstände: `py-6` (etwas kompakter als aktuell `py-8`)
- Gleiche Wellenlinien-Größe und Textgröße

### 3. Neue Seitenstruktur in Preise.tsx

```text
Discovery Package (section, mb-0)
↓
SectionDivider "Öfter hier?"
↓
Kurspässe (section, bg-beige/50, py-12)
↓
SectionDivider "Du willst noch mehr Vorteile?"
↓
Memberships (section, py-12)
↓
SectionDivider "Noch individueller?"
↓
Personal Training (section, bg-beige/50, py-12)
↓
CTA Section
```

### 4. PersonalTrainingSection anpassen
- `InlineSectionLabel` entfernen (wird als SectionDivider davor platziert)
- Section behält nur Headline, Text und Kontakt-Info
- Padding und Hintergrund bleiben gleich

### 5. Abstände vereinheitlichen
- Discovery Package: `mb-0` statt `mb-8` (SectionDivider bringt eigenen Abstand)
- Alle SectionDivider: `py-6` für gleichmäßige Abstände
- Alle Content-Sections: `py-12`

---

## Technische Details

### Dateien die geändert werden:

1. **src/components/SectionDivider.tsx**
   - Padding von `py-8` auf `py-6` reduzieren für kompaktere Übergänge

2. **src/pages/Preise.tsx**
   - Import von `InlineSectionLabel` entfernen
   - Discovery Package `mb-8` auf `mb-0` ändern
   - "Öfter hier?" als `SectionDivider` **vor** der Kurspässe-Section platzieren
   - `InlineSectionLabel` aus der Kurspässe-Section entfernen
   - "Du willst noch mehr Vorteile?" bleibt als `SectionDivider` (bereits korrekt)
   - "Noch individueller?" als `SectionDivider` **vor** der PersonalTrainingSection platzieren

3. **src/components/PersonalTrainingSection.tsx**
   - `InlineSectionLabel` Import und Verwendung entfernen
   - Nur Content behalten (Headline, Text, E-Mail)

4. **src/components/InlineSectionLabel.tsx**
   - Kann gelöscht werden (wird nicht mehr verwendet)
