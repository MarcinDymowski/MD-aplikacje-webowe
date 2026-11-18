import express from "express";
import path from "node:path";
import { gry } from "./dane.js";

const app = express();
const PORT = 3000;


/**
 * Loguje każde żądanie w terminalu: godzina, metoda i adres.
 * Dodaje do żądania pole `req.czasZadania` (godzina w formacie HH:MM:SS),
 * z którego korzysta trasa /statystyki.
 */
const logger = (req, res, next) => {
    req.czasZadania = new Date().toLocaleTimeString("pl-PL");
    console.log(`[${req.czasZadania}] ${req.method} ${req.url}`);
    next();
};
app.use(logger);
app.use(express.static(path.join(import.meta.dirname, "public")));


/** GET /gry — pełna lista gier w katalogu. */
app.get("/gry", (req, res) => {
    res.json(gry);
});

/** GET /gry/:id — jedna gra o podanym numerze; 404, gdy takiej nie ma. */
app.get("/gry/:id", (req, res) => {
    const szukane = Number(req.params.id);
    const gra = gry.find((g) => g.id === szukane);

    if (!gra) {
        res.status(404).json({ blad: "Nie ma gry o takim numerze" });
        return;
    }

    res.json(gra);
});

/** GET /szukaj?wydawca=&max=&gracze= — filtrowanie katalogu; brak parametrów = cała lista. */
app.get("/szukaj", (req, res) => {
    const { wydawca, max, gracze } = req.query;
    let wynik = gry;

    if (wydawca) {
        wynik = wynik.filter((g) => g.wydawca.toLowerCase() === wydawca.toLowerCase());
    }

    if (max) {
        wynik = wynik.filter((g) => g.cena <= Number(max));
    }

    if (gracze) {
        wynik = wynik.filter((g) => g.gracze >= Number(gracze));
    }

    res.json(wynik);
});

/** GET /statystyki — liczba gier, średnia cena i nazwa najdroższej gry. */
app.get("/statystyki", (req, res) => {
    const sumaCen = gry.reduce((suma, g) => suma + g.cena, 0);
    const srednia = sumaCen / gry.length;
    
    const najdrozsza = gry.reduce((a, b) => (b.cena > a.cena ? b : a));

    res.json({
        liczbaGier: gry.length,
        sredniaCena: Math.round(srednia * 100) / 100,
        najdrozsza: najdrozsza.nazwa
    });
});

app.listen(PORT, () => {
    console.log(`Serwer działa: http://localhost:${PORT}`);
});