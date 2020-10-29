'use strict'

const nameId = ['women', 'men', 'child', 'brend', 'company'];
const buttId = ["womenButt", "menButt", "chidButt", "brendButt", "companyButt"]; 



const change = (ids) =>{
	for(let i = 0; i < nameId.length; i++){
		if(ids == nameId[i]){
		 document.getElementById(nameId[i]).hidden = false;
		 document.getElementById(buttId[i]).style = "background-color: black; color: white;";

		}
		else{
		 document.getElementById(nameId[i]).hidden = true;
		 document.getElementById(buttId[i]).style = "background-color: white; color: black;";
		}
	}
}

let elem = document.getElementById("car");
let pos = 0;
let id = setInterval(frame, 10);
    function frame() {
        if (elem.style.left == '97%') {
            pos = 0;
            elem.style.left = '0%'
        } else {
            pos=pos+0.1;
            elem.style.left = pos + '%';
        }
    }
