/*
=== 아래 css 효과 이용해서, 부드럽게 내려오는걸로 구현 ===
.profile_wrapper > .profile_right > .profile_show > p {
text-align: left;
display: none;
margin: 5px;

transition: height 0.5s ease-in-out;
height: 0;
overflow: hidden;
}


*/

// 프로필란에 p 태그 display 방식 변경 (mouseOver 혹은 mouseLeave)
function profileDescriptionBlock(element) { 
    var description = element.nextElementSibling;
    description.style.display = "block";
    description.style.height = description.scrollHeight + "px";
}
function profileDescriptionNone(element) {
    var description = element.nextElementSibling;
    description.style.height = "0";
}


// 작품란에 마우스 올리면 설명 나오게 (위에랑은 좀 다른 방식으로 해봄)
function skilsDescriptionBlock(getItem) { 
    
    var wrapper = document.getElementById("skillsDescript");
    var title = document.getElementById("skilsDescriptTitle");
    var content = document.getElementById("skilsDescriptContent");

    if (getItem == "HTML") {
        title.innerHTML = "HTML5";
        content.innerHTML = 
        "설명"
        + "<br>" + "2번째줄" 
    ;}

    if (getItem == "CSS") {
        title.textContent = "CSS3";
        content.innerHTML = 
        "설명"
        + "<br>" + "2번째줄" 
    ;}
    
    if (getItem == "JS") {
        title.textContent = "JS";
        content.innerHTML = 
        "설명"
        + "<br>" + "2번째줄" 
    ;}

    if (getItem == "JAVA") {
        title.textContent = "JAVA";
        content.innerHTML = 
        "설명"
        + "<br>" + "2번째줄" 
    ;}

    if (getItem == "SPRING") {
        title.textContent = "SPRING";
        content.innerHTML = 
        "설명"
        + "<br>" + "2번째줄" 
    ;}

    wrapper.style.display = "block";
    wrapper.style.height = wrapper.scrollHeight + "px";
}

function skillsDescriptionNone() {
    var wrapper = document.getElementById("skillsDescript");
    wrapper.style.height = "0";
}    


// 화면에 이벤트반응을 추가함
// 특정구간 아래로 가면, 상단으로 올라가는 버튼을 표시해줌
window.addEventListener('scroll', function() {
    var upArrow = document.querySelector('.up_arrow');
    var target = document.querySelector('.img-banner');

    if (window.scrollY > 0) {
        upArrow.style.opacity = '1';
        upArrow.style.pointerEvents = 'auto';
    } else {
        upArrow.style.opacity = '0';

    }

    if (window.scrollY <= target.offsetHeight - 500) {
        upArrow.style.opacity = '0';
        upArrow.style.pointerEvents = 'none';
        
    }
    });
