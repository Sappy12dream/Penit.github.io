
//quote generator

//selectors

const quote = document.querySelector('.quote');
const author =  document.querySelector('.author');
const nextBtn =  document.querySelector('.next');

//create quotes

const quotes =[{
  quote: `"Sometimes things doesn't work as you plan get used to it."`,
  author: `-sappy12dream`
},
{
  quote: `"Feel it, your own vibe and that's it world is yours."`,
  author: `-sappy12dream`
},
{
  quote: `"They make you sparkling and glittery, that your soul glow and heart shine with them; your friends."`,
  author: `-sappy12dream`
},
{
  quote: `"you can have your seperate choices and nobody has to judge it, don't let them."`,
  author: `-sappy12dream`
},
{
  quote: `"You can always be better and love flower."`,
  author: `-sappy12dream`
},
{
  quote: `"They left it open always; their heart, who knows when we'll need them.`,
  author: `-sappy12dream`
},
{
  quote: `"I wonder if we dreamers stop dreaming, will the world be able to get a sound sleep."`,
  author: `-sappy12dream`
},
{
  quote: `"I wonder if we dreamers stop dreaming, will the world be able to get a sound sleep."`,
  author: `-sappy12dream`
}
];

//to change quotes

nextBtn.addEventListener('click', () => {    
  event.preventDefault();
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
});


//imgslider

var i = 0; // start point
var slides = [];
var time = 3000;

//images list
slides[0] = '1.jpg';
slides[1] = '2.jpg';
slides[2] = '3.jpg';
slides[3] = '4.jpg';
slides[4] = '5.jpg';
slides[5] = '6.jpg';
slides[6] = '7.jpg';
slides[7] = '8.jpg';
slides[8] = '9.jpg';
slides[9] = '10.jpg';

//change image

function slideImg() {
 document.slide.src = slides[i];
 if(i < slides.length - 1){
   i++;
 } else{
   i = 0;
 }
 setTimeout("slideImg()", time);
}

window.onload = slideImg;

//creating note 

//selectors 

const inputTitle = document.querySelector('.inputTitle');
const inputText = document.querySelector('.inputText');
const addBtn = document.querySelector('.addBtn');
const noteList = document.querySelector('.noteContainer');
const delBtn = document.querySelector('.delBtn');

displayList();

//function to  add

addBtn.addEventListener('click', add);

  function add(event) {
    event.preventDefault();

    const list = localStorage.getItem('list');

    if (list== null) {
      obj = [];
    } else {

      obj = JSON.parse(list);
    }

    if (inputTitle.value.length < 1 || inputText.value.length < 1 ) return;

    var d = new Date();
   let date = d.toDateString();

    let listObj = {
      title : inputTitle.value,
      text : inputText.value,
      date: date
    }

    obj.push(listObj);
    localStorage.setItem('list', JSON.stringify(obj));
    inputTitle.value = "";
    inputText.value = "";

    displayList();
  }

  //function to show 

  function displayList(){
    const list = localStorage.getItem('list');

    if (list== null) {
      obj = [];
    } else {
      obj = JSON.parse(list);
    }

    html = "";

    obj.forEach(function (element,index) {

      html += `<div class= "noteCard appear">
                  <h2 class= "noteTitle">${element.title}</h2>
                  <hr>
                  <p class= "noteText">${element.text}
                  </p>
                  <div class="btnss"> 
                      <span class="date">${element.date}</span>                   
                      <button id ="${index}" class="delBtn btn" onclick = "delList(this.id)">delete</button> 
                  </div>
              </div>              
                    `;
    })

    

    if(obj.length != 0){
      noteList.innerHTML = html;
    }

  }
//function to delete note

  function delList(index){
    const list = localStorage.getItem('list');
    if (list== null) {
      obj = [];
    } else {
      obj = JSON.parse(list);
    }
    obj.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(obj));
    displayList();
  }


  
//function to search note

const search = document.querySelector('.search');
search.addEventListener('input', function () {

  let searchValue = search.value;

  let noteCards = document.querySelectorAll('.noteCard');

  Array.from(noteCards).forEach(function (element) {

    let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
    if (cardTxt.includes(searchValue)) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  })
})

//designed and created by sapp12dream










