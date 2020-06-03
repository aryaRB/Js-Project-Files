let Addbtn = document.getElementById("Addbtn")
Addbtn.addEventListener("click", function(e){

    let newtext = document.getElementById("newtext")
    let notesGrid = localStorage.getItem("notesGrid")

    if ( notesGrid == null){

        newObj = [];
    }
    else{

        newObj = JSON.parse(notesGrid);
    }

    newObj.push(newtext.value);
    localStorage.setItem("notesGrid", JSON.stringify(newObj));
    newtext.value = "";
    console.log(newObj);
});
// let Addbtn = document.getElementById("AddBtn");
// AddBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
// //   console.log(notesObj);
//   showNotes();
// });


