const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {

    const maxX = window.innerWidth - 500;
    const maxY = window.innerHeight - 400;

    const randomX = 12 + Math.random() * maxX;
    const randomY = 12 + Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    
}

noBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("click", () => {

    
    document.body.innerHTML = `
    
    <div style="
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100%;
        width:100%;
        background:#ed32a6;
        font-family:Arial;
    ">
    <audio autoplay>
        <source src="wow.mp3" type="audio/mpeg">
    </audio>
    <audio autoplay loop>
        <source src="cartoon.mp3" type="audio/mpeg">
    </audio>

    <div style="text-align:center">

        <video src="Kucing 2.mp4" class="Kucing" autoplay muted loop></video>
        <video src="Kucing 3.mp4" class="Kucing" autoplay muted loop></video>
        <video src="Kucing 6.mp4" class="Kucing" autoplay muted loop></video>
        <video src="Kucing 4.mp4" class="Kucing" autoplay muted loop></video>


    </div>
        <div style="text-align:center">

        <h1> 🌹🌹🌹YAYYYY 🌹🌹🌹</h1>   
        <h1>😅 Nih buatmu yang lucuuu 😅</h1>


    </div>
    
    `;
});