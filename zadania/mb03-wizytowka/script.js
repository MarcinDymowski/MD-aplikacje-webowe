const umiejetnosci = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Git",
    "C++",
    "C#"
];


function pokazUmiejetnosci(lista) {
    const kontener = document.querySelector("#lista-umiejetnosci");

    for (const nazwa of lista) {
        const element = document.createElement("li");
        element.textContent = nazwa;
        kontener.appendChild(element);
    }
}

pokazUmiejetnosci(umiejetnosci);