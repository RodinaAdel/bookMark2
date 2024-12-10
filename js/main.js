var bookMarkNameInput= document.getElementById("bookMarkName");
var bookMarkUrlInput= document.getElementById("bookMarkUrl");
var index =[]
var bookMarkList =[]

function addBookMark(){
    var bookMark ={
    name: bookMarkNameInput.value,
    url: bookMarkUrlInput.value,
} 
bookMarkList.push(bookMark)
display()
 console.log(bookMarkList);
 
}

function display(){
    var carton = ``
    for (var i=0 ; i<bookMarkList.length ;i++){
      
        carton += `<div class="container"> <div class="row text-center fw-bold fs-6 bg-white py-2" id="rowData"><div class="col-md-3"> ${bookMarkList[i].index}</div> <div class="col-md-3">${bookMarkList[i].name}</div><div class="rodina col-md-3 mt-3"><a href="urlList[i].url" class="p-3"> <i class="fa-regular fa-eye d-inline-block"></i> <p class="d-inline-block">Visit</p></a></div><div class="col-md-3"> <button onclick="deleteProduct(${i})" class="button2 my-2"><i class="fa-solid fa-trash d-inline-block"></i><p class="d-inline-block">Delete</p></button></div></div></div>`
    }
    document.getElementById("rowData").innerHTML = carton
}


var bookmarks = [];

var newBookmark = `
              

  <div class="container">
    <div class="row text-center fw-bold fs-6 bg-white py-2" id="rowData">
        <div class="col-md-3 col-lg-3">
        ${index + 1}
        </div>
        <div class="col-md-3 col-lg-3">
        ${bookMarkName}
        </div>
        <div class="rodina col-md-3 col-lg-3">
          <a class="button1 my-2 p-3" data-index="${index}">
                <i class="fa-regular fa-eye d-inline-block"></i>
                <p class="d-inline-block">Visit</p>
            </a> 
        </div>
        <div class="col-md-3 col-lg-3">
            <button class="button2 my-2" data-index="${index}">
                <i class="fa-solid fa-trash d-inline-block"></i>
                <p class="d-inline-block">Delete</p>
            </button> 
        </div>
    </div>

    </div>
            `;
  tableContent.innerHTML += newBookmark;


function deleteProduct(index){
    bookMarkList.splice(index,1)
    localStorage.setItem("bookMark",JSON.stringify(bookMarkList))
    console.log(bookMarkList);
   display()

}





function validation(id){
    var myElement= document.getElementById(id)
    var regexes ={

        bookMarkName:/^[A-Z][a-z]{2,10}$/,
        bookMarkUrl: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/

    }
    var testString =myElement.value

    if (regexes[id].test(testString)){
            myElement.classList.add("is-valid")
            myElement.classList.remove("is-invalid")
        return true
         }else{
            myElement.classList.add("is-invalid")
            myElement.classList.remove("is-valid")
            return false
        }
    }

 