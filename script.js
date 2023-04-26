let project1 = document.getElementById('project1');

let project2 = document.getElementById('project2');

let project3 = document.getElementById('project3');

let projDescription = document.getElementById('project-description');

const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

function project1Func(){
    projDescription.innerHTML = "This project uses <a>Javascript</a> and <a>Node.js</a> to generate a random Dungeons and Dragons character!";
}

function project2Func(){
    projDescription.innerHTML = "This project uses <a>HTML</a>, <a>CSS</a>, and <a>Javascript</a> to let the world know about me!";
}

function project3Func(){
    projDescription.innerHTML = "This project uses <a>Python</a>, <a>Django</a>, and <a>HTML/CSS/SQL</a> to track/add/remove ingredients, recipes, prices, and sales for a restaurant!";
}
project1.addEventListener('click', project1Func);
project2.addEventListener('click', project2Func);
project3.addEventListener('click', project3Func);