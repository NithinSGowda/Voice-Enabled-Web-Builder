const elements=document.querySelectorAll('.et');

for(element of elements){
element.addEventListener("dblclick",function(){
    const editedText=prompt("Enter the Heading");
    this.innerHTML=editedText;
});}
const chngbtn = document.querySelector('.change');
const blueArea = document.querySelector('.blue');
function changeColor(){
    var clr1=document.querySelector('.picker1').value;
    var clr2=document.querySelector('.picker2').value;
    blueArea.style.backgroundImage = 'linear-gradient(50deg,' + clr1 + ', ' + clr2 + ' 100%)';
}

function dl(x){
    x = typeof x !== 'undefined' ? x : 'black' ; 
    document.body.style.backgroundColor = x;
    document.body.style.color = "white";
    document.querySelectorAll('.c1')[0].style.backgroundColor=x;
    document.querySelectorAll('.c1')[0].style.border='1px solid white';

    document.querySelectorAll('.c1')[1].style.backgroundColor=x;
    document.querySelectorAll('.c1')[1].style.border='1px solid white';

    document.querySelectorAll('.c1')[2].style.backgroundColor=x;
    document.querySelectorAll('.c1')[2].style.border='1px solid white';

    
}

function hl(x){
  document.querySelector('.blue').style.backgroundImage='linear-gradient(' + x + ',' + x + ')';
}

function download(e){
    document.querySelector('.downloader').style.display = 'flex';
}

function remover(e){
  document.querySelector('.downloader').style.display = 'none';
  document.querySelector('.jss').innerHTML=' ';
}

for(element of elements)
{dragElement(element);}







function dragElement(elmnt) {
  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.position="absolute";
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function nxt1(){
  butn=document.querySelector('.tt1')
  butn.style.display='none';
  butn=document.querySelector('.tt2')
  butn.style.display='block';
  console.log("Done")
}
function nxt2(){
  butn=document.querySelector('.tt2')
  butn.style.display='none';
  butn=document.querySelector('.tt3')
  butn.style.display='block';
  console.log("Done")
}
function nxt3(){
  butn=document.querySelector('.tt3')
  butn.style.display='none';
  butn=document.querySelector('.tutorial')
  butn.style.display='none';
  console.log("Done")
}





function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
  
  // Step 3. Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop*/
  }
  
  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}


function removeActive()
{
  var activeThings = document.querySelector('.active');
  activeThings.classList.remove("active");
}




const smallBox = document.getElementsByClassName('c');
		const header = document.querySelector('.blue');
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.interimResults = true;
		
		let p= document.createElement('p');
		const words = document.querySelector('.words');
		words.appendChild(p);
	
		recognition.addEventListener('result', e => {
			var transcript=Array.from(e.results)
			.map(result=>result[0])
			.map(result=>result.transcript)
			.join('')
			p.textContent = transcript;
			if(e.results[0].isFinal){
				p = document.createElement('p');
				words.appendChild(p);
				transcript = transcript.toUpperCase()
				if(transcript.includes('CHANGE BACKGROUND COLOUR TO')){
				var x=(transcript.split(' '))[4];
				dl(x);
	
				transcript=' ';
				}
				if(transcript.includes('CHANGE HEADER COLOUR TO')){
				var x=(transcript.split(' '))[4];
				hl(x);
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT LEFT')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.left = (selectedText.offsetLeft - 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT RIGHT')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.left = (selectedText.offsetLeft + 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT UP')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.top = (selectedText.offsetTop - 100) + "px";
	
				transcript=' ';
				}

				if(transcript.includes('MOVE IT DOWN')){
				var selectedText = document.querySelector('.active');
				selectedText.style.position = "absolute";
				selectedText.style.top = (selectedText.offsetTop + 100) + "px";
	
				transcript=' ';
        }

        

        if(transcript.includes('CHANGE IT INTO')){
          if(document.querySelector('.active')==null){
            alert("Please select something first");
          }
          var selectedText = document.querySelector('.active');    
          selectedText.innerHTML = titleCase(transcript.substring(14));

    
          transcript=' ';
          }



          if(transcript.includes('DESELECT')){
            if(document.querySelector('.active')!=null){
              var selectedText = document.querySelector('.active');
              selectedText.classList.remove("active");

            }    
            transcript=' ';
            }


            if(transcript.includes('RELOAD')){
              document.location.reload()
              transcript=' ';
              }


            if(transcript.includes('CHANGE COLOUR TO')){
              if(document.querySelector('.active')==null){
                alert("Please select something first");
              }
              var selectedText = document.querySelector('.active');    
              selectedText.style.color = titleCase(transcript.substring(17));
    
        
              transcript=' ';
              }

        
        if(transcript.includes('SELECT')){
          if(document.querySelector('.active')!=null){
            removeActive();
          }
          transcript = transcript.substring(7);
          console.log(transcript);
          

          
          for(element of elements){
            if(element.textContent.includes(titleCase(transcript))){
              element.className += " active";
            }
          }
          var selectedText = document.querySelector('.active');    
          transcript=' ';
          }

			}
			
			console.log(transcript);
		});
	
		recognition.addEventListener('end',recognition.start);
	
		recognition.start();
		

// Get all buttons with class="btn" inside the container
const btns = document.querySelectorAll(".et");

// Loop through the buttons and add the active class to the current/clicked button
for (texts of btns) {
  texts.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


