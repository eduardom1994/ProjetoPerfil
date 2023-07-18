function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Edudddddardo Machado sorrindo, camisa branca"
    )
  } else {
    //set tiver sem light mode
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Eduardo Machado sorrindo, camisa branca")
  }

  //or

  //pegar a tag img
}
