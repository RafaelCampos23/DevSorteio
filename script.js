
function generateNumber(){
    
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert (result)
}


/*const number = Math.floor(Math.random()*30 + 1)
const winnerNumber = Math.floor(Math.random()*30 + 1)

if(winnerNumber === number){
    console.log('Parabéns, você é o ganhador do sorteio')
} else{
    console.log('Mais sorte na próxima!')
}*/
