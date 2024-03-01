var popupoverlay = document.querySelector(".popupoverlay");
var popupelement = document.querySelector(".popup-box");
var add = document.getElementById("button");

add.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupelement.style.display = "block";
});
var cancel = document.getElementById("cancelbook");
cancel.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupelement.style.display = "none";
});
var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var title = document.getElementById("title");
var author = document.getElementById("author");
var description = document.getElementById("textarea");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h1>${title.value}</h1>
   <i>${author.value}</i> 
   <i>${description.value}</i> 
   <button style="display: block;" onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupelement.style.display = "none";
});
function deletebook(event) {
  event.target.parentElement.remove();
}
