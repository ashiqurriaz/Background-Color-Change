window.onload = () => {
    main();
}

function main(){
        const root = document.getElementById("root")
        const btn = document.getElementById("changebtn")

        btn.addEventListener("click" , function(){
            const bgcolor = rgbColorGenerator();
            root.style.backgroundColor = bgcolor;
        })
}

function rgbColorGenerator(){
    const green = Math.floor(Math.random() * 255);
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${green} , ${red} , ${blue})`
}