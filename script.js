//회원가입 페이지로 이동
function registerPage() {
    window.location.href = "platformRegister.php";
}

//회원가입 전 확인

window.onload = function () {
    if (document.querySelector(".registerNomalBtnNext")) {
        document.querySelector(".registerNomalBtnNext").addEventListener("click", () => {
            swal({
                title: "회원가입 하시겠습니까?",
                text: "OK 버튼을 누르시면 회원가입이 완료됩니다.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((val) => {
                    if (val) {
                        $(".registerNomalSubmitBtn").click();
                    }
                });
        });
    }

    if (document.querySelector(".registerNaverBtnNext")) {
        document.querySelector(".registerNaverBtnNext").addEventListener("click", () => {
            swal({
                title: "회원가입 하시겠습니까?",
                text: "OK 버튼을 누르시면 회원가입이 완료됩니다.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((val) => {
                    if (val) {
                        $(".registerNaverSubmitBtn").click();
                    }
                });
        });
    }
}