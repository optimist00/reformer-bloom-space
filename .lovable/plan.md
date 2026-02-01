

## Zweizeilige Membership-Beschreibungen mit Untertitel

### Übersicht
Jede Membership erhält eine zweizeilige Beschreibung: Haupttext + kursiver Untertitel darunter.

---

### Neue Struktur

| Membership | Haupttext | Untertitel (kursiv) |
|------------|-----------|---------------------|
| MEDIUM | 1 Session / Woche | Dein wöchentliches Ritual |
| LARGE | 2 Sessions / Woche | Erreiche deine Ziele doppelt so schnell |
| UNLIMITED | So oft du möchtest | Grenzenlose Freiheit |

---

### Technische Änderungen

**Datei:** `src/components/PricingMembershipCards.tsx`

1. **Interface erweitern** (Zeile 3): Neues Feld `tagline` hinzufügen

2. **Daten aktualisieren** (Zeilen 8-26):
   - `sessionsInfo` auf die neuen Haupttexte ändern
   - `tagline` mit den kursiven Untertiteln ergänzen

3. **Rendering anpassen** (Zeilen 40-42):
   - Bestehende `<p>` für `sessionsInfo` beibehalten
   - Neue `<p>` mit `italic` Klasse für `tagline` darunter

---

### Vorher/Nachher

```text
Vorher:
┌─────────────────────────┐
│ Membership MEDIUM       │
│ 1x pro Woche            │
│ 109,00 € /4 Wochen      │
└─────────────────────────┘

Nachher:
┌─────────────────────────┐
│ Membership MEDIUM       │
│ 1 Session / Woche       │
│ Dein wöchentliches Ritual  <- kursiv
│ 109,00 € /4 Wochen      │
└─────────────────────────┘
```

