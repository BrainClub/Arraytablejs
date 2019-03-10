let overnumber = [];
let lessnumber = 20;

let rowArr = [];
let newArr = [];

let n = 0;
let m = 0;



function tableCreate() {
    let table = document.getElementById('table');
    let tbody = document.createElement('tbody');
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        newArr[i] = new Array();
        let rowMax = 0;
        tr.id = "elment" + i;


        for (let j = 0; j < 5; j++) {
                let td = document.createElement('td');
                let arrSumm = Math.round(Math.random() *30);
                newArr[i].push(arrSumm);

                td.id = "tdelement" + i + j;


                td.innerHTML = newArr[i][j];
                tr.appendChild(td);

            if(overnumber < newArr[i][j]){
                overnumber = newArr[i][j];
                n = i;
                m = j;
            }

            if(lessnumber > arrSumm){
                lessnumber = arrSumm;
            }
            if(rowMax < arrSumm){
                rowMax = arrSumm;
            }
        }

        rowArr.push(rowMax);
        tbody.appendChild(tr);
    }
    console.log(newArr);
    table.appendChild(tbody);
}



tableCreate();


console.log(newArr[n][m]);

//
// let max = 0;
//
// for(let i = 0;i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         if(max<arr[i][j])
//             max=arr[i][j];
//     }
// }
// alert(max);


// function fill() {
//     for (let i = 0; i < arr.length; i++){
//         let trArray = document.getElementById('MyArray');
//         trArray.innerHTML = '<tr>';
//         for (let j = 0; j < arr[i].length; j++){
//             var tdArray = document.getElementById('MyArray').
//             appendChild(document.createElement('td'));
//             let arrSumm = Math.round(Math.random() *20)
//             tdArray.innerHTML = arrSumm;
//
//             tdArray.id = "elment";
//             // arr[i][j] = Math.round(Math.random() *20);
//             if(overnumber < arrSumm){
//                 overnumber = arrSumm;
//             }
//             if(lessnumber > arrSumm){
//                 lessnumber = arrSumm;
//             }
//         }
//     }
// }
// fill();


function summrow(){
    console.log(rowArr);
}
function summ(){
    document.getElementById("tdelement"+ n + m).style.color = 'black';
    document.getElementById("tdelement"+ n + m).style.background = 'white';

}