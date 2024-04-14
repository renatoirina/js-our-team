/**
 * Description: stampa membri del team in pagina
 * @param {array<object>} teamToPrint -> array di oggetti
 */
function printTeam(teamToPrint) {
    const rowElem = document.querySelector(".row");
    for (let i = 0; i < teamToPrint.length; i++) {
        console.log("-------");
        const curMember = teamToPrint[i];   //object
        for (const key in curMember) {
            console.log(key, curMember[key]);
        }

        // CREO IL DIV IN COLONNA
        const colElem = document.createElement("div");

        // ASSEGNO COL AL DIV
        colElem.classList.add("col");

        // INSERISCO LA CARD TRAMITE innerHTML
        colElem.innerHTML = `
            <div class="card">
                <img src="./img/" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${curMember.nome}</h5>
                    <p class="card-text">${curMember.ruolo}</p>
                    <p class="card-text">${curMember.foto}</p>
                </div>
            </div>
        `;
        console.log(colElem);

        // APPENDO IL DIV IN COLONNA ALLA RIGA
        rowElem.append(colElem);
    }
}