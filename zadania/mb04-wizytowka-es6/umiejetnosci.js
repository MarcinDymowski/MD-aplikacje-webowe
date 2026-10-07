/**
 * Zwraca umiejętności należące do wskazanej kategorii.
 *
 * @param {Array<Object>} lista - pełna lista umiejętności
 * @param {string} kategoria - nazwa kategorii albo "wszystkie"
 * @returns {Array<Object>} nowa tablica; pusta, gdy nic nie pasuje
 */

export const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista]
        : lista.filter(u => u.kategoria === kategoria);

/**
 * Oblicza średni poziom umiejętności.
 *
 * @param {Array<Object>} lista - tablica obiektów z polem "poziom"
 * @returns {number} średnia zaokrąglona do jednego miejsca; 0 dla pustej listy
 */        

export const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom, 0);
    return Math.round((suma / lista.length) * 10) / 10;
};

/**
 * Buduje tekst podsumowania nad listą.
 *
 * @param {Array<Object>} lista - umiejętności aktualnie wyświetlane
 * @returns {string} np. "Umiejętności: 8 · średni poziom: 2.9"
 */

export const podsumowanie = (lista) =>
    lista.length === 0
        ? "Brak umiejętności w tej kategorii."
        : `Umiejętności: ${lista.length} · średni poziom: ${sredniPoziom(lista)}`;


/**
 * Buduje kod HTML listy umiejętności.
 *
 * Dane pochodzą z naszego pliku, nie od użytkownika — dlatego wolno
 * tu użyć innerHTML. Treść wpisana w formularzu nadal idzie przez textContent.
 *
 * @param {Array<Object>} lista - umiejętności do wyświetlenia
 * @returns {string} ciąg elementów <li>; pusty napis dla pustej listy
 */

export const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">${"●".repeat(poziom)}${"○".repeat(5 - poziom)}</span>
            </li>
        `)
        .join("");