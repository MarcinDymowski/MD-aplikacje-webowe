/**
 * Lista umiejętności prezentowanych na stronie.
 *
 * @type {Array<{nazwa: string, poziom: number, kategoria: string}>}
 */

export const umiejetnosci = [
    { nazwa: "HTML", poziom: 4, kategoria: "frontend" },
    { nazwa: "CSS", poziom: 4, kategoria: "frontend" },
    { nazwa: "JavaScript", poziom: 3, kategoria: "frontend" },
    { nazwa: "SQL", poziom: 3, kategoria: "backend" },
    { nazwa: "C#", poziom: 4, kategoria: "programowanie" },
    { nazwa: "C++", poziom: 4, kategoria: "programowanie" },
    { nazwa: "Git", poziom: 3, kategoria: "narzedzia" },
    { nazwa: "Arduino", poziom: 4, kategoria: "elektronika" },
    { nazwa: "ESP32", poziom: 4, kategoria: "elektronika" },
    { nazwa: "Kotlin", poziom: 2, kategoria: "programowanie" },
    { nazwa: "Praca w zespole", poziom: 3, kategoria: "miekkie" }
];

export const ADRES_API = "https://jsonplaceholder.typicode.com/users";
