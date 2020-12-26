document.addEventListener('DOMContentLoaded',()=> {

    //card options
    const cardArray =[
        {
            name: 'fb',
            img: 'images/fb.png'
        },
        {
            name: 'fb',
            img: 'images/fb.png'
        },
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'github',
            img: './images/github.png'
        },
        {
            name: 'github',
            img: 'images/github.png'
        },
        {
            name: 'home',
            img: 'images/home.png'
        },
        {
            name: 'home',
            img: 'images/home.png'
        },
        {
            name: 'linkedin',
            img: 'images/linkedin.png'
        },
        {
            name: 'linkedin',
            img: 'images/linkedin.png'
        },
        {
            name: 'twitter',
            img: 'images/twitter.png'
        },
        {
            name: 'twitter',
            img: 'images/twitter.png'
        },
        
    ]


    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen =[]
    var cardsChosenId =[]
    var cardsWon = []
    //create the board
    function createBoard(){
        for (let i = 0; i< cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/white.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    

    //check for matches
    function checkForMatch(){
        var cards =document.querySelectorAll('img')
        const optionOneId =cardsChosenId[0]
        const optionTwoId =cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
          cards[optionOneId].setAttribute('src', 'images/black.png')
          cards[optionTwoId].setAttribute('src', 'images/black.png')
          cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
        }
        cardsChosen =[]
        cardsChosenId =[]
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length=== cardArray.length/2){
            setTimeout(resultDisplay.textContent='Congratulations! You found them all!',300)
        }
    }

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }
    }


    createBoard()
})