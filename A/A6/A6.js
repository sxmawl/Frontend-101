

let letters= ['D','V','M'];
let letter = 'D';


let keyPressHandler = event => {

// HANDLING RIGHT AND UP ARROW KEY

if(event.key == 'ArrowRight' || event.key == 'ArrowUp'){

  for(let i=0;i<3;i++){
    if(letter == letters[i]){
        if(i==2){
            letter = letters[i-2];  
            break;          
        }
        else{
           letter = letters[i+1];
           break;
        }
    }

  }
}

// HANDLING LEFT AND DOWN ARROW KEY

    else if(event.key == 'ArrowLeft' || event.key == 'ArrowDown'){
        for(let i=0;i<3;i++){
            if(letter == letters[i]){
                if(i==0){
                    letter = letters[i+2];    
                    break;        
                }else{
                letter = letters[i-1];
                break;
                }
                
            }
        }
    }

// DIFFERENT BEHAVIOUR FOR LETTERS 'D', 'V' AND 'M'

switch (letter) {
    case 'D':

        console.log('D is pressed');    
        break;
    case 'V':
            
        console.log('V is pressed');
        break;
    case 'M':
            
        console.log('M is pressed');
            break;            
        default:
            break;
    }
}







document.onkeydown = keyPressHandler; //EVENT LISTENER
