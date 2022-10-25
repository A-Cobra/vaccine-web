// alert("Hi there little friends");




const checkActive = ()=>{
    //Checks if there is an acive head-pop container
    if (popContainer.classList[2] != "null" && popContainer.classList.contains("active")){
        //It means there is a class active identifier
        // and the clas active
        console.log("One is active");
        return true;
    }
    else{
        console.log("There are no active ones")
        return false;
    }
}

const checkItself = ()=>{
    //Checks if the active pop-head 
    //is the one you clicked again
    if (clickedDiv.classList[2] + "a" === popContainer.classList[2]){
        return true;
    }
    return false;
     
}


const popContainer = document.querySelector("#pop-container");
// console.log(popContainer);
const deployArray = document.querySelectorAll(".pop-head");
// console.log(deployArray);
// console.log(deployArray[1]);
// console.log(deployArray[0].classList[2]);
// popContainer.classList.add(deployArray[0].classList[2]);
let previousSelected; //Will contain the div that was selected previously
// previousSelected = document.querySelector("._3");
console.log("previousSelected");
console.log(previousSelected);
// popContainer.classList.remove(previousSelected);

let clickedDiv;
// console.log("=====");
// console.log("=====");
// console.log("=====");
// console.log("=====");
console.log(popContainer);


if(deployArray){
    console.log("a");
    deployArray.forEach(content=>{
        content.addEventListener("click", (event)=>{
                // It all starts with a click

                //Gives You the path
                //And then the div itself

                //IF the click was detected correctly

                if(event.path[3].classList.contains("pop-head")){
                    clickedDiv = event.path[3];
                    console.log("CONTAINS");

                }

                //Else it will search for the event that triggered the click
                else{
                    console.log("DOESN'T CONTAIN");
                    event.path.every(div=>{
                        // console.log(1);
                        // console.log(div.classList);

                        if(div.classList.contains("pop-head")){
                            console.log("Found the one");
                            console.log(div);
                            console.log("===========");
                            clickedDiv = div;
                            return false;
                        }
                        else{
                            return true;
                        }
                    });
                    // console.log("NONE Found after loop");
                    

                    // let clickedDiv = event.path[3];
                }

                //If clickedDiv is not undefined,
                //We can proceed to change classes 
                //and "pop up" the content

                // console.log(checkItself());
                if (clickedDiv /*is defined*/){
                    //Check if there is another one active
                    //If so
                    let oneActive = checkActive();
                    if(oneActive){
                        //We check if it is the same container
                        //To "close it"
                        let itself = checkItself();
                        if(itself){
                            //WE CHANGE THE ACTIVE CLASS INTO NON-ACTIVE
                            clickedDiv.classList.replace(clickedDiv.classList[1], "non-active");
                            //WE REPLACE ALSO THE MIN CONTAINER INFORMATION 
                            popContainer.classList.replace(popContainer.classList[1], "non-active");
                            popContainer.classList.replace(popContainer.classList[2], "null");
                        }

                        //Else, we need to pop the new one
                        //and also we need to change the previous one
                        else{
                            //FIRST WE CLOSE THE ONE THAT WAS OPENED
                            //BEFORE
                            
                            previousSelected.classList.replace(previousSelected.classList[1], "non-active");
                            //THEN, WE "ACTIVATE" THE NEW CLASS
                            clickedDiv.classList.replace(clickedDiv.classList[1], "active");
                            //THEN, WE CHANGE THE POP CONTAINERS CLASS 
                            popContainer.classList.replace(popContainer.classList[2], clickedDiv.classList[2] + "a");
                            //FINALLY, WE CHANGE THE PREVIOUSSELECTED TO 
                            //THE CURRENT ONE
                            previousSelected = clickedDiv;
                        }
                    }

                    //Else, there are no active ones and we just
                    //"Open the pop-head" and add some classes
                    else{
                        //We set the previousSelected for future purposes
                        previousSelected = clickedDiv;
                        //We set the main container's Class
                        popContainer.classList.replace(popContainer.classList[2], clickedDiv.classList[2] + "a");
                        //we also set it to active
                        popContainer.classList.replace(popContainer.classList[1], "active");
                        //Now we set the clickedDiv's active class
                        clickedDiv.classList.replace(clickedDiv.classList[1], "active");
                    }
                    
                    //FOR ADDING THE NEW CLASS:
                    //popContainer.classList.replace(popContainer.classList[2], "new-class");

                }

                console.log(clickedDiv);
                console.log("--");
                console.log("--");
                console.log("--");
                checkActive();
                // console.log(event.path);
            
        });

    });
}
