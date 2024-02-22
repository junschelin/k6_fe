function handleClick(n){
    // 메세지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요";


    // 메세지 영역 가져오기 2
    // document.querySelector("#msgArea").innerHTML = "<h2>안녕하세요.</html>" // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!

    // 메세지 영역 버튼#으로 표현하기
    //document.querySelector("#msgArea").innerHTML = "<h2>버튼 " + n + "이 눌러졌습니다.</h2>" // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!

    // 메세지 영역 버튼#으로 표현하기 (백틱 문자열(`{}))
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`; // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!


}