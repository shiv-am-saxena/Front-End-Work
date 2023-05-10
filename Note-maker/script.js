let text = document.getElementById('exampleFormControlTextarea1');
let i = 0;
function submitForm()
{
    if(document.cookie != ""){
        i = document.cookie.split("=")[1];
        i = parseInt(i);
        i++;
    }
    else{
        i = 1;
    }
    if(text.value=="")
    {
        alert("Please fill the form");
    }
    const note = text.value;
    if(note != ""){
        localStorage.setItem(i,note);
        document.cookie = `i = ${i}`;
    }
}

function showNotes()
{
    let len = localStorage.length;
    ihtml = "";
    let j = 0;
    for(let i in localStorage)
    {
        // console.log(localStorage.getItem(i));
        if(localStorage.getItem(i) != null)
        {
            j++;
            ihtml +=`
            <tr>
                <td>${j}</td>
                <td>${localStorage.getItem(i)}</td>
                <td class="d-flex justify-content-center">
                    <button class="btn btn-primary" onclick="del(${i})">Delete</button>
                </td>
            </tr>
            `
            document.getElementsByTagName('tbody')[0].innerHTML = ihtml;
        }
        
    }
}
showNotes();
function del(key)
{
    localStorage.removeItem(key);
    location.reload();
    // showNotes();
}