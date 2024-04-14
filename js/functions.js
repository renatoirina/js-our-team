/**
 * Description: stampa membri del team in pagina
 * @param {array<object>} teamToPrint -> array di oggetti
 */
function printTeam(teamToPrint) {
    for (let i = 0; i < teamToPrint.length; i++) {
        console.log("-------");
        const curMember = teamToPrint[i];   //object
        for(const key in curMember) {
            console.log(key, curMember[key]);
        }
    }
}