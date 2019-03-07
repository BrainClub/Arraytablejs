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

let rowArr = [];
let newArr = [];

function tableCreate() {
    let table = document.getElementById('table');
    let tbody = document.createElement('tbody');
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');

        newArr[i] = new Array();

        let rowMax = 0;

        for (let j = 0; j < arr[i].length; j++) {
                let td = document.createElement('td');
                let arrSumm = Math.round(Math.random() *20)
                td.innerHTML = arrSumm;
                tr.appendChild(td);


            newArr[i].push(arrSumm);


            if(rowMax < arrSumm){
                rowMax = arrSumm;
            }
            if(overnumber < arrSumm){
                overnumber = arrSumm;
            }
            if(lessnumber > arrSumm){
                lessnumber = arrSumm;
            }

        }




        rowArr.push(rowMax);
        tbody.appendChild(tr);

    }
    console.log(newArr);
    table.appendChild(tbody);


}



tableCreate();





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
    console.log(overnumber);
    console.log(lessnumber);

}