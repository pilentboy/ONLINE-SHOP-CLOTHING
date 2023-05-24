//access to elements
const USER_COMMENT_CONTAINER=document.querySelector("#user-comments");

let commentCounter=0;
// creaete users API
while (commentCounter <10) {
    fetch('https://randomuser.me/api/').then (
    response => response.json().then(
        data => {
            let myData=data['results']
            let userName=myData[0]['name'].first
            // document.querySelector("#lastname").innerHTML=myData[0]['name'].last
            let userPic=myData[0]['picture'].large
            let userComment="قیمتش خیلی مناسب بود"
            createCommentElements(userComment,userName,userPic)
        }
    )
    )
        commentCounter +=1;

}

//create comment elemetns
function createCommentElements(comment,username,userpic){
    const COMMENT_DIV=document.createElement("div");
    COMMENT_DIV.classList.add("comment", "col-12", "shadow-sm", "my-2");
    const USER_COMMENT_INFO=document.createElement("div");
    USER_COMMENT_INFO.classList.add("d-flex", "align-items-center");
    //user image
    const USER_COMMENT_IMG=document.createElement("img");
    USER_COMMENT_IMG.src=userpic
    USER_COMMENT_IMG.classList.add("user-img-comment", "img-fluid" ,"ms-1");
    USER_COMMENT_IMG.alt="USER IMAGE"
    //user name
    const USER_COMMENT_NAME=document.createElement("h4");
    USER_COMMENT_NAME.innerHTML=username
    USER_COMMENT_NAME.classList.add("user-name-comment");
    //user comment p element
    const USER_COMMENT_P=document.createElement("p");
    USER_COMMENT_P.innerHTML=comment
    USER_COMMENT_P.classList.add("user-text-comment", "col-12");


    //add elements to buy.html
    USER_COMMENT_INFO.append(USER_COMMENT_IMG);
    USER_COMMENT_INFO.append(USER_COMMENT_NAME);
    COMMENT_DIV.append(USER_COMMENT_INFO);
    COMMENT_DIV.append(USER_COMMENT_P);
    USER_COMMENT_CONTAINER.append(COMMENT_DIV);
}


