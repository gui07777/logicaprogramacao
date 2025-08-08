var letter = prompt("Digite uma letra qualquer:");

if (letter.length === 1) {

    if (!(letter.includes(/[^a-zA-Z0-9]/g, ''))) {

        if (letter.includes('A'.toLowerCase()) ||
            letter.includes('E'.toLowerCase()) ||
            letter.includes('I'.toLowerCase()) ||
            letter.includes('O'.toLowerCase()) ||
            letter.includes('U'.toLowerCase())) {
            alert("Isto é uma vogal!");
        } else {
            alert("Isto é consoante!");
        }
    } else {
        alert("Só pode letra mano!");
    }
} else {
    alert("Só consigo verificar uma letra, tente novamente!");
}