// const APIDownload = `https://speed.cloudflare.com/__down?bytes=10000000`;
const box = document.querySelector(".box");
const displayJoke = document.querySelector(".Screen");


const API  = `https://icanhazdadjoke.com/slack`;
const IMAGEAPI = `https://icanhazdadjoke.com/j/R7UfaahVfFd`;

const typesOfJokes = ["Nerd", "Geek", "Trendsetter", "Mainstream", "Minimalist", "Hippie"];


const FetchJoke = async () => {
    const response = await fetch(API);
    console.log(response);
    const data  = await response.json();
    // console.log(data.attachments[0].text);
    displayJoke.innerText = "";
    displayJoke.innerText = data.attachments[0].text;
} 


document.querySelector(".btn").addEventListener("click", () => {
    try{
        FetchJoke();
    } catch (e) {
        displayJoke.innerText = "Error Occur! Try Again.";
    }
});
