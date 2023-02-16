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
    formCont.classList.remove('active');
    overlay.classList.remove('active')
})


//get responses
let songs = [];
const titleInput = document.getElementById("title-val");
const  artistInput = document.getElementById("artist-val");
const rankInput = document.getElementById("rank-val");
const addSongs = document.getElementById("add-sng");

function addSong(ev) {
    ev.preventDefault();
    let song = {
        title: titleInput.value,
        artist: artistInput.value,
        rank: rankInput.value
    }
    songs.push(song);
    document.forms[0].reset();
    
}

addSongs.addEventListener("click", addSong)






