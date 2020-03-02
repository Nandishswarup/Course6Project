iseditable = false;
count=0;

function onpageload() {
    var title = document.getElementById('title');
    var detail = document.getElementById('detail');

    title.style.border='white'
    detail.style.border='white'

    title.value = localStorage.getItem("title");
    title.readOnly = true;
    //title.className = document.getElementById("title").className + " input-box-nonedit";  // this adds the error class
    var button = document.getElementById('btnedit')
    button.innerHTML = 'Edit    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>'


    document.getElementById('author').innerText = localStorage.getItem("author");


    //document.getElementById('detail').innerText=localStorage.getItem("detail");
    detail.value = localStorage.getItem("detail");
    // console.log(localStorage.getItem("detail")+"    new ")
    detail.readOnly = "false";
  //  detail.className = document.getElementById("detail").className + " input-box-nonedit";  // this adds the error class
}

function editaction() {
    var title = document.getElementById('title');
    var detail = document.getElementById('detail');


    if (!iseditable) {

        title.style.border='red'
        detail.style.border='red'
        title.readOnly = false;
        //title.className = title.className + " input-box-edit";  // this adds the error class
        detail.readOnly = "";
       // detail.className = detail.className + " input-box-edit";  // this adds the error class
        var button = document.getElementById('btnedit')
        button.innerText = 'save'
        iseditable = true
    } else {
        title.style.border='white'
        detail.style.border='white'
        title.style.borderWidth ="2px";
        detail.style.borderWidth ="2px";
        localStorage.setItem("title",title.value);
        localStorage.setItem("detail",detail.value);
        onpageload()

        iseditable = false

    }


}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}


function addcomment()
{
    var button=document.getElementById('addcomment')
    var textarea=document.getElementById('inputComment')
    var commentsection=document.getElementById('commentsection')
    if(textarea.value.length>0)
    {

        commentsection.innerHTML+='<p class="comment-item">'+textarea.value+'</p>'

    }
    textarea.value=''




}
function likeaction()
{
    var like=document.getElementById('likenumber')


    count++;
    like.innerText=count+' person likes this!'






}

