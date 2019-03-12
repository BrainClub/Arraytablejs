let overnumber = [];
let lessnumber = 20;
let numberRow = [];
let overNumberRow = [];
let column = [];
let columnNumber = 0;


let rowArr = [];
let newArr = [];

let n = 0;
let m = 0;
let r = 0;
let с = 0;


function tableCreate() {
    let table = document.getElementById('table');
    let tbody = document.createElement('tbody');
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        newArr[i] = new Array();
        let rowMax = 0;
        tr.id = "elment" + i;
        overNumberRow = 0;
        r = 0;
        for (let j = 0; j < 5; j++) {
                let td = document.createElement('td');
                let arrSumm = Math.round(Math.random() *100);
                
                newArr[i].push(arrSumm);
                td.id = "tdelement" + i + j;
                td.innerHTML = newArr[i][j];
                tr.appendChild(td);

            if(overNumberRow < newArr[i][j]){
                overNumberRow = newArr[i][j];
                r = j;
            }
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



        numberRow.push(r);

        rowArr.push(rowMax);
        tbody.appendChild(tr);
    }

    for(let i=0; i < newArr.length; i++){
        columnNumber =0;
        с = 0;
        for (let j = 0; j < newArr[i].length; j++) {
            if(columnNumber < newArr[j][i]){
                columnNumber = newArr[j][i];
                с = j;
            }
        }
        column.push(с);
    }

    console.log(column);


    // console.log(newArr);
    table.appendChild(tbody);
    console.log(numberRow.length);
}



tableCreate();

//
// console.log(newArr[n][m]);

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

let p = 0;
function myFunction() {
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            document.getElementById("tdelement"+ i + j).style.color = 'white';
            document.getElementById("tdelement"+ i + j).style.background = 'black';
        }
    }


    // p = document.querySelector(`input[name="filter"]:checked`).value;
    //
    // console.log(p);
}




function summrow(){
   for(let i = 0; i < newArr.length; i++){
       for(let j = 0; j < newArr[i].length; j++){
           document.getElementById("tdelement"+ i + j).style.color = 'white';
           document.getElementById("tdelement"+ i + j).style.background = 'black';
       }
   }
   for(let i = 0; i < numberRow.length; i++){
       document.getElementById("tdelement"+ i + numberRow[i]).style.color = 'black';
       document.getElementById("tdelement"+ i + numberRow[i]).style.background = 'white';
   }
}
function summ(){
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            document.getElementById("tdelement"+ i + j).style.color = 'white';
            document.getElementById("tdelement"+ i + j).style.background = 'black';
        }
    }
    document.getElementById("tdelement"+ n + m).style.color = 'black';
    document.getElementById("tdelement"+ n + m).style.background = 'white';
}
function summcolumn(){
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            document.getElementById("tdelement"+ i + j).style.color = 'white';
            document.getElementById("tdelement"+ i + j).style.background = 'black';
        }
    }
    for(let i = 0; i < column.length; i++){
        document.getElementById("tdelement"+column[i]+i  ).style.color = 'black';
        document.getElementById("tdelement"+column[i]+ i  ).style.background = 'white';
    }
}

