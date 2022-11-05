let ran = Math.floor(Math.random() * 100 + 1);

function submit() {
    let num1 = document.getElementById('focus_num').value;
    if (num1 == "") {
        alert('숫자를 입력해 주세요');
    } else if (num1 == ran) {
        alert('정답입니다~!!');
        location.reload();
    } else if(num1 < ran){
        alert ("Up!");
    }else if(num1 > ran){
        alert ("Down!");
    }else if(num1 >= 100 || num1 < 0){
        alert("숫자는 1이상 100 미만으로 입력해주세요~");
    }
    console.log(num1);
}

function reset() {
    location.reload();
}