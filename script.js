function switchScene() {
    const scene1 = document.getElementById("scene1")
    const scene2 = document.getElementById("scene2")

    if (scene1.style.display !== "none"){
        scene1.style.display = "none"
        scene2.style.display = ""
    }
    else if (scene2.style.display !== "none"){
        scene2.style.display = "none"
        scene1.style.display = ""
    }
}
