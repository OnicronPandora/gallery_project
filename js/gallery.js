/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
    let getText = previewPic.alt;
    document.getElementById("image").innerHTML = getText;

    let displayImage = previewPic.src;
    document.getElementById("image").style.backgroundImage = `url("${displayImage}")`;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    let originText = "Hover over an image below to display here.";
    document.getElementById("image").innerHTML = originText;

    document.getElementById("image").style.backgroundImage = `url("")`;
}

function setImages() {
    options = [ 
        "dog1-valeriya-1805164.jpg", "pexels-bekka419-982314.jpg",
        "lama-3396657.jpg", "dog5-mithulvarshan-2318990.jpg"
    ]
    
    currentImage = document.querySelectorAll(".preview");
    for (let i = 0; i < currentImage.length; i++) {
        console.log("Image " + i);
        
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];

        currentImage[i].setAttribute("tabindex", "0"); 
    }
}