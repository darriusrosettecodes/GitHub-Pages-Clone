'use strict'

//HEADER IMAGE
const imgElement = document.querySelector('.img-element')
const images = ['images/img1.png', 'images/img2.png']

let index = 0;
imgElement.src = images[index]

function switchIndex() {
    if (index === 0) {
        index = 1;
    } else {
        index = 0;
    } 
    imgElement.src = images[index]
}

setInterval(switchIndex, 4000);

//Default Display
const userBtn = document.getElementById('user')
const projectBtn = document.getElementById('project')
const firstCard1 = document.querySelector('.first-card1')
const firstCard2 = document.querySelector('.first-card2')
const terminalCards = document.getElementById('terminal-cards')
const desktopCards = document.getElementById('desktop-cards')
const idkCards = document.getElementById('idk-cards')

const userTabSecondCard = document.getElementById('user-tab-second-card')
const restOfUserCards = document.getElementById('rest-of-user-cards')
const restOfProjectCards = document.getElementById('rest-of-project-cards')
const userTabSecondCardBtns = document.querySelector('.second-card-buttons')
const terminalBtn = document.getElementById('terminal')
const desktopBtn = document.getElementById('desktop')
const idkBtn = document.getElementById('idk')

const projectTabSecondCardBtns = document.querySelector('.first-card2-buttons')
const themeBtn = document.getElementById('theme')
const themeCards = document.getElementById('theme-cards')
const scratchBtn = document.getElementById('scratch')
const scratchCards = document.getElementById('scratch-cards')


userBtn.style.backgroundColor = 'blue'
userBtn.style.color = 'white'
firstCard2.style.display = 'none'

terminalBtn.style.backgroundColor = 'blue'
terminalBtn.style.color = 'white'
// terminalCards.style.display = 'block'
desktopCards.style.display = 'none'
idkCards.style.display = 'none'

restOfProjectCards.style.display = 'none'




//Changing First Card
const getStartedBtns = document.querySelector('.get-started-buttons')
getStartedBtns.addEventListener('click', function(e){
    if(e.target === userBtn){
        userBtn.style.backgroundColor = 'blue'
        userBtn.style.color = 'white'
        projectBtn.style.backgroundColor = 'white'
        projectBtn.style.color = 'black'

        firstCard1.style.display = 'block'
        firstCard2.style.display = 'none'
        userTabSecondCard.style.display = 'block'

        terminalBtn.style.backgroundColor = 'blue'
        terminalBtn.style.color = 'white'
        desktopBtn.style.backgroundColor = 'white'
        desktopBtn.style.color = 'black'
        idkBtn.style.backgroundColor = 'white'
        idkBtn.style.color = 'black'

        restOfProjectCards.style.display = 'none'  
        restOfUserCards.style.display = 'block'  
        desktopCards.style.display = 'none'
        idkCards.style.display = 'none'
        terminalCards.style.display = 'block'
         
    }
    else if(e.target === projectBtn){
        userBtn.style.backgroundColor = 'white'
        userBtn.style.color = 'black'
        projectBtn.style.backgroundColor = 'blue'
        projectBtn.style.color = 'white'

        themeBtn.style.backgroundColor = 'blue'
        themeBtn.style.color = 'white'

        firstCard1.style.display = 'none'
        firstCard2.style.display = 'block'
        userTabSecondCard.style.display = 'none'
        restOfUserCards.style.display = 'none'

        restOfProjectCards.style.display = 'block'

        themeBtn.style.backgroundColor = 'blue'
        themeCards.style.display = 'block'

        scratchBtn.style.backgroundColor = 'white'
        scratchBtn.style.color = 'black'
        scratchCards.style.display = 'none'
    }
})

//Changing Second User Tab Card
userTabSecondCardBtns.addEventListener('click', function(e){
    if(e.target === terminalBtn){
        changeSecondUserTabCard(terminalBtn, terminalCards, desktopBtn, desktopCards, idkBtn, idkCards)
    }
    else if(e.target === desktopBtn){
        changeSecondUserTabCard(desktopBtn, desktopCards, idkBtn, idkCards, terminalBtn, terminalCards)

    }
    else if(e.target === idkBtn){
        changeSecondUserTabCard(idkBtn, idkCards, terminalBtn, terminalCards, desktopBtn, desktopCards)
    }
})

const changeSecondUserTabCard = function(btn1, cards1, btn2, cards2, btn3, cards3){
    btn1.style.backgroundColor = 'blue'
    btn1.style.color = 'white'

    btn2.style.backgroundColor = 'white'
    btn2.style.color = 'black'

    btn3.style.backgroundColor = 'white'
    btn3.style.color = 'black'

    cards1.style.display = 'block'
    cards2.style.display = 'none'
    cards3.style.display = 'none'
}

//Changing Second Project Tab card
projectTabSecondCardBtns.addEventListener('click', function(e){
    if(e.target === themeBtn){
        changeSecondProjectTabCard(themeBtn, themeCards, scratchBtn, scratchCards)
    }
    else if(e.target === scratchBtn){
        changeSecondProjectTabCard(scratchBtn, scratchCards, themeBtn, themeCards)
    }
})

const changeSecondProjectTabCard = function(btn1, cards1, btn2, cards2){
    btn1.style.backgroundColor = 'blue'
    btn1.style.color = 'white'

    btn2.style.backgroundColor = 'white'
    btn2.style.color = 'black'

    cards1.style.display = 'block'
    cards2.style.display = 'none'
}

//Lazy loading
const elementsToObserve = document.querySelectorAll('.card')

const observerCallBack = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in')
            observer.unobserve(entry.target)
        }
    })
}

const observerOptions = {
    root: null,
    threshold: 0.2
}

elementsToObserve.forEach(function(element){
    const observer = new IntersectionObserver(observerCallBack, observerOptions)
    observer.observe(element)
})






 