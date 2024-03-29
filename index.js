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


// 모달관련 
var locateSet;
function locateModal() {
    window.open(locateSet);
    document.querySelector(".modal-background").style.display = "none";
}

function showModal(selector) {
    var title = document.querySelector(".modal-title");
    var text = document.querySelector(".modal-text");

    switch (selector) {

        case "skill-item-01":
            title.innerHTML = "작품 보러가기";
            text.innerHTML = "선택하신 작품을 보러 가볼까요?";
            locateSet = "https://blog.naver.com/taehwa10404/223093875506";
            break;

        /*
        // HTML 문서에서 CTRL + F 아래 내용들 검색
        // skill-item-02 , skill-item-03
        // 검색후 onclick 속성값 주석처리된거 풀어줘야함 (중요)

        case "skill-item-02":
            title.innerHTML = " 준비중.. ";
            text.innerHTML = " 설명란.. ";
            locateSet = " 링크란.. ";
            break;

        case "skill-item-03":
            title.innerHTML = " 준비중.. ";
            text.innerHTML = " 설명란.. ";
            locateSet = " 링크란.. ";
            break;
        */

        case "blog":
            title.innerHTML = "블로그";
            text.innerHTML = "개발자 블로그 구경할 수 있어요 !";
            locateSet = "https://blog.naver.com/taehwa10404";
            break;
    
        case "github":
            title.innerHTML = "깃허브";
            text.innerHTML = "보고계신 웹 페이지의 깃허브로 이동할 수 있습니다 !";
            locateSet = "https://github.com/ko0or/minwoo.github.io";
            break;
    
        case "webfont":
            title.innerHTML = "웹폰트";
            text.innerHTML = "눈누 사이트의 OFL(Open Font License)를 사용했습니다.";
            locateSet = "https://noonnu.cc/";
            break;
    
        case "fontawesome":
            title.innerHTML = "폰트어썸";
            text.innerHTML = "아이콘들은 폰트어썸에서 가져왔습니다.";
            locateSet = "https://fontawesome.com/";
            break;
    
        case "bootstrap":
            title.innerHTML = "부트스트랩";
            text.innerHTML = "부트스트랩의 CSS, JS를 기반으로 만들었습니다.";
            locateSet = "https://getbootstrap.kr/";
            break;
    

    }

    document.querySelector(".modal-background").style.display = "block";
}


function hideModal() {
    document.querySelector(".modal-background").style.display = "none";
}









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
        title.innerHTML = "HyperTextMarkupLanguage";
        content.innerHTML = 
        "HTML의 다양한 태그및 기본개념을 이해하고 있습니다";
    }

    if (getItem == "CSS") {
        title.innerHTML = "CastingStyleSheet";
        content.innerHTML = 
        "기본적인 CSS 요소를 응용할 수 있습니다";
    }
    
    if (getItem == "JS") {
        title.innerHTML = "JavaScript";
        content.innerHTML = 
        "자바스크립트및 제이쿼리 활용가능";
    }

    if (getItem == "JAVA") {
        title.innerHTML = "Java";
        content.innerHTML = 
        "자바기반의 스프링 레거시, 스프링 부트 사용가능";
    }

    if (getItem == "SPRING") {
        title.innerHTML = "SpringBoot";
        content.innerHTML = 
        "다양한 디펜던시 활용경험이 있습니다. Seucrity, JPA, Thymeleaf, Lombok";
    }
    
    if (getItem == "PYTHON") {
        title.innerHTML = "Python";
        content.innerHTML = 
        "PyQt5 라이브러리를통한 GUI 구현및 쓰레드를 활용한 병렬작업을 할 수 있습니다.";
    }

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
