# Documentation Index

## Canonical curriculum

- [`../data/curriculum.yml`](../data/curriculum.yml) — μοναδική πηγή αλήθειας για τα 10 thematic domains, τα 24 modules, τους κωδικούς εμφάνισης, τη σειρά, την κατάσταση, τη διαθεσιμότητα και τις συνδέσεις περιεχομένου
- [`../data/theory-coverage.yml`](../data/theory-coverage.yml) — μοναδική πηγή αλήθειας για τα 318 source-question IDs, τα μελλοντικά κεφάλαια και τις αντιστοιχίσεις σε PDF viewer pages, domains και modules
- [`THEORY_COVERAGE_MAP.md`](THEORY_COVERAGE_MAP.md) — παραγόμενη αναφορά πλήρους κάλυψης, κενών και αμφισημιών
- [`TRACEABILITY_MATRIX.md`](TRACEABILITY_MATRIX.md) — αντιστοίχιση modules, σημείων του PDF, ερωτήσεων και εργαστηρίων με placeholders για όσα δεν έχουν χαρτογραφηθεί

Το PDF περιέχει κυρίως ομάδες ερωτήσεων και όχι τα domains ή modules της
εφαρμογής. Τα domains ορίζονται από την εφαρμογή για κατανόηση και ανάκληση,
με καθοδηγητικές ερωτήσεις ως νοητικά σημεία ανάκλησης.

Το `MOD-NN` παραμένει το μόνιμο τεχνικό ID κάθε module, ενώ το `NN.NN` είναι
ο κωδικός που παρουσιάζεται στον εκπαιδευόμενο: το πρώτο ζεύγος προσδιορίζει
το domain και το δεύτερο τη θέση μέσα σε αυτό. Παραδείγματα:
`MOD-17` → `02.02` και `MOD-24` → `09.04`. Η ιεραρχία είναι
application-defined και δεν σχετίζεται με την αρίθμηση ερωτήσεων του PDF.
Τα μελλοντικά κεφάλαια σχεδιασμού εμφανίζονται ως `NN.NN.NN`, όπως
`09.04.01`, με τεχνικά IDs όπως `CH-09-04-01`. Η βαθμίδα καταγράφεται μόνο
στο coverage dataset και δεν αποτελεί ακόμη πλήρη θεωρία ή learner UI.

## Project

- [`product/PROJECT_BRIEF.md`](product/PROJECT_BRIEF.md) — σκοπός, κοινό, όρια και επιτυχία του έργου
- [`FUTURE_BACKLOG.md`](FUTURE_BACKLOG.md) — ιδέες εκτός της τρέχουσας φάσης

## Syllabus

- [`../syllabus/README.md`](../syllabus/README.md) — canonical ιεραρχία των 10 domains, οι καθοδηγητικές ερωτήσεις και η αντιστοίχιση των 24 modules

## Theory

- [`../theory/README.md`](../theory/README.md) — κανόνες και κατάλογος της διαθέσιμης θεωρίας
- [`../theory/01-digital-logic-and-number-systems.md`](../theory/01-digital-logic-and-number-systems.md) — πρώτη διαθέσιμη ενότητα (`NEEDS_VERIFICATION`)

## Questions

- [`../questions/README.md`](../questions/README.md) — σύστημα ερωτήσεων, αυτοαξιολόγησης και τεκμηρίωση του συμπληρωματικού StudyApp pack
- [`../questions/MOD-01-flashcards.md`](../questions/MOD-01-flashcards.md) — τράπεζα 12 canonical flashcards του MOD-01 (`NEEDS_VERIFICATION`)
- [`../study-pack.html`](../study-pack.html) — διαδραστική συμπληρωματική τράπεζα 75 flashcards: 35 Ομάδα Α και 40 Ομάδα Β (`NEEDS_VERIFICATION`, εκτός canonical registries)
- `../data/study-pack-a-*.json` — δεδομένα 35 εισαγόμενων flashcards της Ομάδας Α
- `../data/study-pack-b-*.json` — δεδομένα 40 εισαγόμενων flashcards της Ομάδας Β

Οι 75 συμπληρωματικές κάρτες δεν διαθέτουν ακόμη verified αντιστοίχιση με
source-question IDs και PDF viewer pages του canonical coverage map. Δεν
μεταβάλλουν τη διαθεσιμότητα ή την κατάσταση ολοκλήρωσης των 24 modules.

## Practical work

- [`../practical/README.md`](../practical/README.md) — εργαστήρια και πρακτικές δεξιότητες
- [`../practical/LAB-GEN-001-binary-and-logic.md`](../practical/LAB-GEN-001-binary-and-logic.md) — δυαδικές μετατροπές και λογικές πράξεις

## Resources

- [`../resources/KNOWLEDGE_SOURCE.md`](../resources/KNOWLEDGE_SOURCE.md) — μοναδική canonical πηγή γνώσης και κανόνες ιχνηλασιμότητας
- `../resources/TERMINOLOGY-EL-EN.md` — δίγλωσση τεχνική ορολογία, προς δημιουργία

## Progress

- [`../progress/STUDY_PLAN.md`](../progress/STUDY_PLAN.md) — μη canonical, ενδεικτικό πρόγραμμα 12 κύκλων μελέτης
- `../progress/PROGRESS_TRACKER.md` — πίνακας προόδου, προς δημιουργία

## Current phase

**Phase 1 — Pilot / Early Access stabilization**

Κριτήρια ολοκλήρωσης:

- [x] Βασικό README
- [x] Κανόνες εκπαιδευτικού περιεχομένου
- [x] Χάρτης τεκμηρίωσης
- [x] Project brief
- [x] Canonical curriculum 10 domains και 24 modules
- [x] Αρχικός πίνακας ιχνηλασιμότητας
- [x] Θεματικός χάρτης 10 domains με καθοδηγητικές ερωτήσεις
- [x] Πρότυπα θεωρίας, ερωτήσεων και εργαστηρίων
- [x] Αρχικό πρόγραμμα μελέτης
- [x] Κανονικός planning map και για τις 318 θεωρητικές ερωτήσεις
- [x] Συμπληρωματική τράπεζα 75 StudyApp flashcards (`NEEDS_VERIFICATION`)
- [ ] Ανθρώπινη επαλήθευση όλων των mappings, της ταξινομίας κεφαλαίων και του StudyApp pack
- [x] Πρώτη διαθέσιμη canonical εκπαιδευτική ενότητα (`NEEDS_VERIFICATION`)

Μόνο το `MOD-01` διαθέτει σήμερα canonical μάθημα, flashcards, quiz και
εργαστήριο και παραμένει `NEEDS_VERIFICATION`. Τα `MOD-02` έως `MOD-24` είναι
planned curriculum placeholders, όχι ολοκληρωμένα μαθήματα. Η συμπληρωματική
τράπεζα 75 flashcards παραμένει εκτός canonical registries μέχρι να
ολοκληρωθεί η ιχνηλασιμότητά της. Η πλήρης θεωρία θα εισαχθεί σε
μεταγενέστερα Pull Requests.
