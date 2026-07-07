const yes = document.getElementById("yes");
const no = document.getElementById("no");

let size = 1;

function moveButton(){

const maxX = window.innerWidth - no.offsetWidth;
const maxY = window.innerHeight - no.offsetHeight;

const x = Math.random()*maxX;
const y = Math.random()*maxY;

no.style.position="fixed";
no.style.left=x+"px";
no.style.top=y+"px";

size += 0.25;

yes.style.transform=`scale(${size})`;

}

no.addEventListener("mouseover",moveButton);
no.addEventListener("click",(e)=>{
e.preventDefault();
moveButton();
});

yes.addEventListener("click",()=>{

document.body.innerHTML=`
<div class="finish">
<h1>Рахмет жаным ❤️</h1>
<h2>Люблю тебя бесконечно 💖</h2>
</div>
`;

setInterval(createHeart,250);

});

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}