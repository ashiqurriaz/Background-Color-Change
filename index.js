window.onload = () => {
    main();
}

function main(){
        const root = document.getElementById("root")
        const btn = document.getElementById("changebtn")

        btn.addEventListener("click" , function(){
            const bgColor = colorRGBgenerator();
            root.style.backgroundColor = bgColor;
        })
}



function colorRGBgenerator(){
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${blue}, ${green})`
}