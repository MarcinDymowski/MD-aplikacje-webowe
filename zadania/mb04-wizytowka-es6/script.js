const umiejetnosci = [
    { nazwa: "HTML",         poziom: 4, kategoria: "frontend" },
    { nazwa: "CSS",          poziom: 4, kategoria: "frontend" },
    { nazwa: "JavaScript",   poziom: 3, kategoria: "frontend" },
    { nazwa: "SQL",          poziom: 3, kategoria: "backend" },
    { nazwa: "C#",           poziom: 4, kategoria: "programowanie" },
    { nazwa: "C++",          poziom: 4, kategoria: "programowanie" },
    { nazwa: "Git",          poziom: 3, kategoria: "narzędzia" },
    { nazwa: "Arduino",      poziom: 4, kategoria: "elektronika" },
    { nazwa: "ESP32",        poziom: 4, kategoria: "elektronika" },
    { nazwa: "Kotlin",       poziom: 2, kategoria: "programowanie" },
    { nazwa: "Praca w zespole", poziom: 3, kategoria: "umiejętności miękkie" }
];

const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">${"●".repeat(poziom)}${"○".repeat(5 - poziom)}</span>
            </li>
        `)
        .join("");

const listaEl = document.querySelector("#lista-umiejetnosci");
listaEl.innerHTML = budujListe(umiejetnosci);


const pokazUmiejetnosci = (lista) => {
    const kontener = document.querySelector("#lista-umiejetnosci");

    for (const nazwa of lista) {
        const element = document.createElement("li");
        element.textContent = nazwa;
        kontener.appendChild(element);
    }
};

// pokazUmiejetnosci(umiejetnosci);


const formularz = document.querySelector("#formularz-kontakt");
const komunikat = document.querySelector("#komunikat");


const pokazKomunikat = (tresc, rodzaj) => {
    komunikat.textContent = tresc;
    komunikat.classList.remove("blad", "sukces");
    komunikat.classList.add(rodzaj);
};


formularz.addEventListener("submit", (event) => {
    event.preventDefault();

    const dane = Object.fromEntries(new FormData(formularz));
    const { imie, email, temat } = dane;

    if (imie.trim() === "") {
        pokazKomunikat("Podaj imię.", "blad");
        return;
    }

    if (email.trim() === "") {
        pokazKomunikat("Podaj adres e-mail.", "blad");
        return;
    }

    if (temat === "") {
        pokazKomunikat("Wybierz temat wiadomości.", "blad");
        return;
    }

    pokazKomunikat(
        `Dziękuję, ${imie}. Wiadomość na temat „${temat}” została przyjęta.`,
        "sukces"
    );

    console.log("Dane z formularza:", dane);

    formularz.reset();
});


const przycisk = document.querySelector("#przelacznik-motywu");

przycisk.addEventListener("click", () => {
    const jestCiemny = document.body.classList.toggle("ciemny");

    przycisk.textContent = jestCiemny ? "Jasny motyw" : "Ciemny motyw";
});