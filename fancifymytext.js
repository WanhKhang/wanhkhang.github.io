
function MakeBigger(){
    document.getElementById("thetextarea").style.fontSize = "24pt"
}

function FancyText(){
    alert("Text Has been Fancyfied")
    document.getElementById("thetextarea").style.fontWeight = "bold"
    document.getElementById("thetextarea").style.color = "blue"
    document.getElementById("thetextarea").style.textDecoration = "underline"
}
function BoringText(){
    alert("Text is now boring")
    document.getElementById("thetextarea").style.fontWeight = "normal"
    document.getElementById("thetextarea").style.color = "black"
    document.getElementById("thetextarea").style.textDecoration = "none"
}
function Moo(){
    alert("Moooooo!")
    const upper = document.getElementById("thetextarea")
    let uppertext = upper.value.toUpperCase()

    let parts = uppertext.split(" ")
    for(let i = 0; i < parts.length; i++){
        if(parts[i].includes("."))
            parts[i] += "-Moo"
    }
    
     uppertext = parts.join(" ")
    
     upper.value = uppertext

}

