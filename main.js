let arr = new Array(5);
for (let i = 0; i <arr.length; i++){
    arr[i] = new Array(5);
}

function print() {
    for (let i = 0; i < arr.length; i++){
        document.write(arr[i]);
        document.write('<br/>');
    }
}


let overnumber = 0;
let lessnumber = 20;

function fill() {





    for (let i = 0; i < arr.length; i++){
        let trArray = document.getElementById('MyArray').
        appendChild(document.createElement('tr'));
        trArray.innerHTML = ' ';

        for (let j = 0; j < arr[i].length; j++){


            var tdArray = document.getElementById('MyArray').
            appendChild(document.createElement('td'));
            let arrSumm = Math.round(Math.random() *20)
            tdArray.innerHTML = arrSumm;
            tdArray.id = "elment";

            // arr[i][j] = Math.round(Math.random() *20);

            if(overnumber < arrSumm){
                overnumber = arrSumm;


            }
            if(lessnumber > arrSumm){
                lessnumber = arrSumm;
            }
        }
    }
}


fill();



function summ(){
    document.getElementById("elment").style.color = "blue";
    console.log(overnumber);
    console.log(lessnumber);

}