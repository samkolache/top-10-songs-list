//show which section is selected
const buttonGroup = document.querySelector(".options").querySelectorAll('.select-btn');

buttonGroup.forEach(element => {
    element.addEventListener("click", function() {
        buttonGroup.forEach(buttonGroup=>buttonGroup.classList.remove("active"))

        this.classList.add("active"); 
    })
})

//open and close song form
const addSongBtn = document.getElementById("add-song");
const formCont = document.querySelector(".form-cont");
const overlay = document.getElementById("overlay");
const extBtn = document.getElementById("ext")

addSongBtn.addEventListener("click", e => {
    formCont.classList.add('active');
    overlay.classList.add('active')
})

extBtn.addEventListener("click", e => {
    e.preventDefault();
    formCont.classList.remove('active');
    overlay.classList.remove('active')
})


//get responses and create objects
let songs = [];
const titleInput = document.getElementById("title-val");
const  artistInput = document.getElementById("artist-val");
const rankInput = document.getElementById("rank-val");
const addSongs = document.getElementById("add-sng");
let count = 0;

function addSong(ev) {
    ev.preventDefault();
    let song = {
        title: titleInput.value,
        artist: artistInput.value,
        rank: rankInput.value
    }
    songs.push(song);
    createCard(songs[count])
    document.forms[0].reset();
    
}
addSongs.addEventListener("click", addSong)

//create DOM elements for each object
function createCard(theSong) {
    let rankNumber = parseInt(theSong.rank,10);
    rankInput[rankNumber].disabled = true;
    switch(rankNumber) {
        case 0:
            return
                break;
        case 1:
            let card1 = document.querySelector("[data-rank='1']")
            displayCard(card1, theSong)
                break;
        case 2:
            let card2 = document.querySelector("[data-rank='2']")
            displayCard(card2, theSong)
                break;
        case 3:
            let card3 = document.querySelector("[data-rank='3']")
            displayCard(card3, theSong)
                break;
        case 4:
            let card4 = document.querySelector("[data-rank='4']")
            displayCard(card4, theSong)
                break;
        case 5:
            let card5 = document.querySelector("[data-rank='5']")
            displayCard(card5, theSong)
                break;
        case 6:
            let card6 = document.querySelector("[data-rank='6']")
            displayCard(card6, theSong)
                break;
        case 7:
            let card7 = document.querySelector("[data-rank='7']")
            displayCard(card7, theSong)
                break;
        case 8:
            let card8 = document.querySelector("[data-rank='8']")
            displayCard(card8, theSong)
                break;
        case 9:
            let card9 = document.querySelector("[data-rank='9']")
            displayCard(card9, theSong)
                break;
        case 10:
            let card10 = document.querySelector("[data-rank='10']")
            displayCard(card10, theSong)
                break;
    }
    count++
}

function displayCard(element, es) {
    element.classList.add('active')
    let p1;
    p1 = document.createElement('p')
    p1.innerText = es.title;
    let p2;
    p2 = document.createElement('p')
    p2.innerText = es.artist;
    let p3;
    p3 = document.createElement('p')
    p3.innerText = es.rank;
    element.appendChild(p1)
    element.appendChild(p2)
    element.appendChild(p3)
}






