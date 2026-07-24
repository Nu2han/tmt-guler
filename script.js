const API_KEY="AIzaSyDNMy_0Uc1XXtD-59ks4xkMFhKIxj2xCcw";
const menuBtn=document.getElementById("menuBtn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("open");

    });
});

const snow = document.getElementById("snow");
for(let i=0; i<35;i++){
    const flake=document.createElement("span");
    flake.innerHTML="•";
    flake.style.left=Math.random()*100+"vw";
    flake.style.animationDuration = 5 + Math.random() * 8 + "s";
    flake.style.animationDelay = Math.random() * 5 + "s";
    flake.style.opacity = 0.25 + Math.random() * 0.6;
    flake.style.fontSize = 8 + Math.random() * 10 + "px";
    snow.appendChild(flake);

}

const CHANNEL_ID = "UCS0qxqTsYHZjuqKs-NxK9Yg";
const MAX_RESULTS = 4;

async function loadYouTubeVideos() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );

        const data = await response.json();

        const container = document.getElementById("youtubeVideos");
        container.innerHTML = "";

        data.items.forEach(video => {
            if (video.id.kind !== "youtube#video") return;

            container.innerHTML += `
<a class="video-card"
   href="https://www.youtube.com/watch?v=${video.id.videoId}"
   target="_blank">

 <div class="video-thumb">
    <img src="${video.snippet.thumbnails.high.url}"
         alt="${video.snippet.title}">
    <div class="play-button">
        <i class="fa-solid fa-play"></i>
    </div>
</div>

    <div class="video-content">
        <h3>${video.snippet.title}</h3>
        <span>▶ YouTube'da İzle</span>
    </div>

</a>
`;
        });

    } catch (error) {
        console.error(error);
    }
}

loadYouTubeVideos();