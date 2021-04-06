//Another option is to use JQuery, but this is using pure JavaScript
// Made By Austin Gallagher

//Let the html load before doing anything
window.onload=function(){
    //Listen for button click
    document.getElementById("readTextBtn").addEventListener("click", readMyFile);
    

    function readMyFile(){
        //delete current text in paragraph with id "textFileP"
        var el = document.getElementById("textFileP")
        while (el.firstChild) el.removeChild(el.firstChild);

        //Insert directory here
        fetch('testFolder/textFile.txt')
            .then(response => response.text())
            .then(text => insertTextFile(text))

    }


    function insertTextFile(text){
        var paragraph = document.getElementById("textFileP");
        // Regular Expression yuck to split new line as html doesn't understand \n
        textLineByLine = text.split(/\r?\n/);

        //print each line (using a foreach loop)
        textLineByLine.forEach(function (val){
            //Print on each line, <br /> tells html to print each line on a new line
            //val is each line
            paragraph.innerHTML += val + "<br />" ;
        }) 

    }


}




