
let myLibrary = [];

window.onload = function() {


  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");
  const cards = document.getElementById("cards");
  

  closeButton.addEventListener("click", () => {
    let authorInput = document.getElementById("bookauthor").value;
    let titleInput = document.getElementById("booktitle").value;
    addBookToLibrary(titleInput, authorInput);
  })

  function Book() {
    const card = cards.appendChild(document.createElement("div"));
    card.classList.add("card");
    const cardTitle = card.appendChild(document.createElement("p"));
    const cardAuthor = card.appendChild(document.createElement("p"));      
    cardTitle.innerHTML = myLibrary[myLibrary.length - 1].title;
    cardAuthor.innerHTML = myLibrary[myLibrary.length - 1].author;

  }

  function addBookToLibrary(a, b) {
    const x = new Object();
    x.title = a;
    x.author = b;

    myLibrary.push(x);
    console.log(myLibrary)

    Book();
  }


  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

}
