const Timer = document.getElementById('Timer');
const start = document.getElementById("Start");
const Reset = document.getElementById("reset");
window.onload = function () {
    start.onclick = function () {
        var a = prompt('시간을 입력해 주세요.\n(Write to time)');
        let Time = a * 60 * 1000;
        let min = parseInt(a);
        let sec = 60;
        if (a == null) {
            alert("취소되었습니다.\n(Cancled)");
            location.reload();
        } else if (a <= 0 || a % 1 != 0) {
            alert('시간을 다시 입력해주세요.\n(Pleas do it again to write time)');
            location.reload();
        } else {
            var b = alert('세는 단위는 [분]입니다.\n(unit of time is [min])');
            Timer.value = min + ":" + '00';
            let PlayTime = setInterval(function () {
                Time = Time - 1000;
                min = Time / (60 * 1000);
                if (sec > 0) {
                    sec = sec - 1;
                    Timer.value = Math.floor(min) + ':' + sec;
                };
                if (sec === 0) {
                    sec = 60;
                    Timer.value = Math.floor(min) + ':' + '00'
                };
            }, 1000);
            Reset.onclick = function () {
                if (confirm("리셋하시겠습니까?\n(Would you like to reset?)")) {
                    alert("리셋되었습니다.\n(has been reset.)");
                    location.reload();
                } else {
                    alert("취소되었습니다.\n(Canceled)");
                };
            };
            setTimeout(function () {
                clearInterval(PlayTime);
            }, a * 60 * 1000);
        };
        if (min >= 0 || sec >= 0) {
            Start.onclick = function () {
                alert("Error! Error!");
            }
        };
    };
};