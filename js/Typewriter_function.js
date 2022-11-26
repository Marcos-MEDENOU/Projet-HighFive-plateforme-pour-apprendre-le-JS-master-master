let i = 0;
let txt = "Apprendre le JavaScript facilement pour comprendre l'univers du code.";
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text_capture").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

console.log(typeWriter());

// class Typewriter{
//     constructor(text, speed, divID){
//         this.text=text;
//         this.speed=speed;
//         this.div=divID;
//     } 
//     typeWriter(){
//         let i=0; 
//         if(i < (this.text).length){
//             document.getElementById(this.div).innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(this.typeWriter,this.speed)
//         }
//         console.log("medenou");
//     }
// }

// console.log("marcos");
// let textCapture=document.getElementById("text_capture");
// let instanceTypewriter=new Typewriter("Apprendre le JavaScript facilement pour comprendre l'univers du code", 40,textCapture);
// console.log(instanceTypewriter.typeWriter());

