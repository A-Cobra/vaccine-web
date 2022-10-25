// alert("Hi there little friends");

const popContainer = document.querySelector("#pop-container");
// console.log(popContainer);
const deployArray = document.querySelectorAll(".pop-head");
// console.log(deployArray);
// console.log(deployArray[1]);
// console.log(deployArray[0].classList[2]);
popContainer.classList.add(deployArray[0].classList[2]);
let previousSelected = "_1";
popContainer.classList.remove(previousSelected);
// console.log("=====");
// console.log("=====");
// console.log("=====");
// console.log("=====");
console.log(popContainer);


if(deployArray){
    console.log("a");
    deployArray.forEach(content=>{
        content.addEventListener("click", (event)=>{
                //Gives You the path
                //And then the div itself
                let clickedDiv;

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

                console.log(clickedDiv);
                // console.log(event.path);
            }
        );

    });
}
