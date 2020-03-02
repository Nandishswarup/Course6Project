iseditable = false;
count = 0;

function onpageload() {
    console.log('onpageload');
    var title = document.getElementById('title');
    var detail = document.getElementById('detail');
     title.className = title.className + " inputboxnonedit";

    title.value = localStorage.getItem("title");
    title.readOnly = true;

    var button = document.getElementById('btnedit')
    button.innerHTML = 'Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>'


    document.getElementById('author').innerText = localStorage.getItem("author");


     detail.className = detail.className + " inputboxnonedit";

    detail.value = localStorage.getItem("detail");
     detail.readOnly = "false";

}

function editaction() {
    var title = document.getElementById('title');
    var detail = document.getElementById('detail');


    if (!iseditable) {


        title.readOnly = false;
        title.className = title.className + " input-box-edit";
        detail.readOnly = "";
        detail.className = detail.className + " input-box-edit";
        var button = document.getElementById('btnedit')
        button.innerText = 'save'
        iseditable = true
    } else {

        localStorage.setItem("title", title.value);
        localStorage.setItem("detail", detail.value);

        detail.readOnly = "false";
        title.readOnly = true;

         document.getElementById('title').style.borderColor = 'transparent'
        document.getElementById('detail').style.borderColor = 'transparent'
        var button = document.getElementById('btnedit')
        button.innerHTML = 'Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
        iseditable = false

    }


}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}


function addcomment() {
    var button = document.getElementById('addcomment')
    var textarea = document.getElementById('inputComment')
    var commentsection = document.getElementById('commentsection')
    if (textarea.value.length > 0) {

        commentsection.innerHTML += '<p class="comment-item">' + textarea.value + '</p>'

    }
    textarea.value = ''


}

function likeaction() {
    var like = document.getElementById('likenumber')


    count++;
    like.innerText = count + ' person likes this!'


}

