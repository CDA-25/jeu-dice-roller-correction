window.addEventListener("load", () => {
  const dP = document.querySelector("#player")
  const dD = document.querySelector("#dealer")
  const btnPlay = document.querySelector(".btn-play")
  const nbrDiceDefault = 1
  let rP = []
  let rD = []
  
  const game = (nbrDicePlay) => {
    rP = []
    rD = []
    
    while (dP.firstChild) {
      dP.removeChild(dP.firstChild);
    }
    while (dD.firstChild) {
      dD.removeChild(dD.firstChild);
    }
    
    generateDice(Number(nbrDicePlay))
    
    const tP = rP.reduce((acc, curr) => acc + curr, 0);
    const tD = rD.reduce((acc, curr) => acc + curr, 0);
    
    if (tP === tD) {
      dP.append(createMessage("Equality"))
      dD.append(createMessage("Equality"))
    }else{
      tP > tD ? dP.append(createMessage("Player Win")) : dP.append(createMessage("Player Lose"))
      tP < tD ? dD.append(createMessage("Dealer Win")) : dD.append(createMessage("Dealer Lose"))
    }
    
    console.log(rP, rD)
  }
  
  
  btnPlay.addEventListener("click", () => {
    const i = document.querySelector("#diceInput")
    const nbrDicePlay = i.value
    
    game(nbrDicePlay)
  })
  
  const createMessage = (m) => {
    const d = document.createElement("div")
    d.textContent = m
    d.style.fontSize = "40px"
    d.style.fontWeight = "bold"
    
    return d
  }
  
  const generateNbr0to6 = () => Math.floor(Math.random() * 6)
  
  const createDice = (isPlayer = false) => {
    const d = document.createElement("div")
    d.classList.add("dice")
    const nbrAl = generateNbr0to6()
    d.style.backgroundPosition = `-${nbrAl * 100}px 0`
    
    isPlayer ? rP.push(nbrAl + 1) : rD.push(nbrAl + 1)
    
    return d
  }
  
  const generateDice = (nbr) => {
    for (let i = 0; i < nbr; i++) {
      d = createDice(true)
      dP.append(d)
      
      dd = createDice()
      dD.append(dd)
    }
  }
  
  game(nbrDiceDefault)
})
