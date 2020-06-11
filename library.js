class Book{
 constructor(Name, Author, Type) {
    this.Name = Name;
    this.Author = Author;
    this.Type = Type
}
}

class Display {
    validate(book) {
    if (book.Name.length < 2 || book.Author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
    add(book) {
        let tableBody = document.getElementById('tableBody')
        let uiString = `<tr>
                            <td>${book.Name}</td>
                            <td>${book.Author}</td>
                            <td>${book.Type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;

       
}
  clear(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

show(type, displayMessage) {
    let message = document.getElementById('message');
    let boldText;
    if(type==='success'){
        boldText = 'Success';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);

}


}
// setting click Event listener
let btn = document.getElementById("AddBook");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let Name = document.getElementById('bookName').value;
    let Author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('Computer programming');
    let cooking = document.getElementById('cooking');
    let Type;
    if (fiction.checked) {
        Type = fiction.value;
    }
    else if (programming.checked) {
        Type = programming.value;
    }
    else if (cooking.checked) {
        Type = cooking.value;
    }
    let book = new Book(Name, Author, Type)
    console.log(book)



    // Name = document.getElementById('bookName').value = "";
    // Author = document.getElementById('author').value = "";

    let display = new Display();

    if (display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');

    }
    else{
        display.show('danger',`Add your book`);
    }


})







