function deletepost(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);

}

function openConfirmDialog(postid) {

    document.getElementById('confirm_modal').style.display = 'block'
    var modal = document.getElementById("confirm_modal");
    var btn_yes = document.getElementById('btn_yes')
    var btn_no = document.getElementById('btn_no')


    btn_yes.onclick = function () {
        deletepost(postid)
        modal.style.display = "none";

    }
    btn_no.onclick = function () {
        modal.style.display = "none";
    }


}

function openDetailPage(postid) {
    var author = document.getElementById(postid).getElementsByTagName('p')[0].innerText
    var title = document.getElementById(postid).getElementsByTagName('p')[1].innerText
    var detail = document.getElementById(postid).getElementsByTagName('p')[2].innerText
    console.log(author)
    console.log(title)
    console.log(detail)

    localStorage.setItem("author",author);
    localStorage.setItem("title",title);
    localStorage.setItem("detail",detail);
    window.open ('../html/post.html','_self',false)




}