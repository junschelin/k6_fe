    // JS 함수 작성 방법 1 : function handleClick(n){}


    // JS 변수 선언 : const(상수), let(변수)


    // JS 함수 작성 방법 2 : 화살표 함수
    const handleClick = (n) => {
        let msg ;
        if ( n==1) msg = "안녕하세요";
        else msg = "안녕히 가세요";

        document.querySelector("#msgArea").innerHTML = `<h2>${msg}.</h2>`; 

    }

    // 메세지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요";


    // 메세지 영역 가져오기 2
    // document.querySelector("#msgArea").innerHTML = "<h2>안녕하세요.</html>" // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!

    // 메세지 영역 버튼#으로 표현하기
    //document.querySelector("#msgArea").innerHTML = "<h2>버튼 " + n + "이 눌러졌습니다.</h2>" // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!

    // 메세지 영역 버튼#으로 표현하기 (백틱 문자열(`{}))
    //document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`; // innerHTML : HTML 코드가 들어가므로, 태그도 함께 사용 가능!

    


