// showNotes();
let Addbtn = document.getElementById("Addbtn")
Addbtn.addEventListener("click", function(){

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
    newtext.value = "";   //making it blank because to keep the note input as blank after add button is pressed
    console.log(newObj);
    showNotes();
});

// FUNCTION FOR GRABING THE LOCAL OBJECT AND ADDING IT TO NOTES

// function showNotes(){
//     let notesGrid = localStorage.getItem("notesGrid")

//     if ( notesGrid == null){

//         newObj = [];
//     }
//     else{

//         newObj = JSON.parse(notesGrid);
//     }

//     let html = "";
//     newObj.forEach(function(element,index){
//         html += `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Note ${index + 1}</h5>
//           <p class="card-text">${element}</p>
//           <a href="#" class="btn btn-primary">delete</a>
//         </div>
//       </div>`;

//     });

//     let notesElem = document.getElementById('notesGrid');
//       if (newObj.length != 0){
//           notesElem.innerHTML = html;

//       }
// }

function showNotes() {
    let notesGrid = localStorage.getItem("notes");
    if (notesGrid == null) {
      newObj = [];
    } else {
      newObj = JSON.parse(notesGrid);
    }
    let html = "";
    newObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (newObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }

