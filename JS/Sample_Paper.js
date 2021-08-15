console.log("this is working");
const APP_BASE_URL= "https://file-sharing-myfirst.herokuapp.com/";
const paperurl=`${APP_BASE_URL}sendall`;



fetch(paperurl).then(response => response.json())
.then((data )=> 
{
    console.log(data);
    for(key in data)
    {
         console.log(data[key]);
        // console.log('another one');
        let table=document.querySelector('#table');
        let link='${APP_BASE_URL}files/download/${data[key]}.uuid';
        // console.log(link);
        table.innerHTML+=`<tr>
        <td>${data[key].filename}</td>
        <td> <a href=${APP_BASE_URL}files/download/${data[key].uuid}>download</a></td>
    </tr>`
    }

});