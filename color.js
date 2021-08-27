window.onload=do_this;
function do_this(){
    //Get the clicked Button
    var clicked_btn=document.getElementById("clicked_btn")
    //Get the current background color
    var current_color=document.getElementById('current_color')
    //If button exists add onclick event listener to the button
    if(clicked_btn){ 
        clicked_btn.addEventListener("click",function (){
            //call the colors function to get the hex code and change the page background color with it
            document.body.style.backgroundColor=get_color_hex_code();
            //Append the innerhtml of the second button with the current background color hex code
            current_color.innerHTML=get_color_hex_code();
        });
    }
}


// Array of all the symbols to make the hex code of a particular color
var hex_array=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//Function to get the hex_code
function get_color_hex_code(){
    //all hexcodes start with #
    hex_code="#"
    //to get six symbols for the hexcode
    for(var i=0;i<6;i++){

        //append each symbol to the hex string
        hex_code+=hex_array[getRandomNumber()];
    }
    return hex_code
}

//to generate a random no. to pick a random array index for the hex_array 
function getRandomNumber(){
    return Math.floor(Math.random()*hex_array.length)
}
