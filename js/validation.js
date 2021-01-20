function Validation() {
    this.kiemTraRong = function (input, mess) {
        /**
           * Check validation
           */
        if (input === "") {
            //Sai
            alert(mess);
            return false;
        }
        //Đúng
        return true;
    }
    this.kiemTraTrung = function (input, arr, mess) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name == input) {
                alert(mess);
                return false;
            }
        }
        return true;
    }
    this.kiemTraKyTu = function (input, spanId, mess, min, max) {
        if (!input.length >= min && input.length <= max) {
            document.getElementById(spanId).innerHTML = mess;
        }
    }
    this.kiemTraChuoi = function (input, spanId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (!input.match(letter)) {
            document.getElementById(spanId).innerHTML = mess;
        }
    }
    this.kiemTraEmail = function (input, spanId, mess) {
        var letter = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        if (!input.match(letter)) {
            document.getElementById(spanId).innerHTML = mess;
        }
    }
    this.kiemTraMatKhau = function (input, spanId, mess) {
        var letter = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/";
        if (!input.match(letter)) {
            document.getElementById(spanId).innerHTML = mess;
        }
    }
    this.kiemTraKhoaHoc = function (idSelect, spanId, mess) {
        if (document.getElementById(idSelect).selectedIndex !== 0) {
            //có chọn
            document.getElementById(spanId).innerHTML = "";
        }
        document.getElementById(spanId).innerHTML = mess;
    }
}