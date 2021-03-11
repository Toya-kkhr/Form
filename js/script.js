//独自の検証ルールを設定
var methods = {

    //郵便番号
    addrNum: function (value, element) {
        return this.optional(element) || /^\d{3}-?\d{4}$/.test(value);
    },

    //電話番号
    tel: function (value, element) {
        return this.optional(element) || /^0\d{1,4}-?\d{1,4}-?\d{4}$/.test(value);
    },

};

//各入力項目の検証ルールを設定する
var rules = {
   
    name: {
        required: true
    },

    zip11: {
        required: true,
        addrNum: true
    },

    addr11: {
        required: true
    },

    tel: {
        tel: true
    },

    lesson: {
        required: true
    },

    email: {
        required: true,
        email: true
    }

};

//各検証ルールのエラーメッセージ
var messages = {

    name: {
        required: "必須項目です。"
    },

    zip11: {
        required: "必須項目です。",
        addrNum: "郵便番号を正確にご入力ください。"
    },

    addr11: {
        required: "必須項目です。"
    },

    tel: {
        tel: '電話番号を正確にご入力ください。'
    },

    lesson: {
        required: "必須項目です。"
    },

    email: {
        required: "必須項目です。",
        email: "メールアドレスを正確にご入力ください。"
    }
};

//独自の検証ルールを追加（基本的に変更しなくてOKです）
$.each(methods, function (key) {
    $.validator.addMethod(key, this);
});



//指定したフォームにバリデーションを設定
$(function () {
    $('#form').validate({
        rules: rules,
        messages: messages,

        onfocusout: function (element) {
            $(element).valid();
        },

        //エラーメッセージ出力箇所設定
        errorPlacement: function (error, element) {
            if (element.attr("name") === "tel") {
                error.insertAfter("#telErr");

            } else if (element.attr("name") === "name") {
                error.insertAfter("#nameErr");

            } else if (element.attr("name") === "zip11") {
                error.insertAfter("#addrNumErr");

            } else if (element.attr("name") === "addr11") {
                error.insertAfter("#addrErr");

            } else if (element.attr("name") === "lesson") {
                error.insertAfter("#lessonErr");

            } else if (element.attr("name") === "email") {
                error.insertAfter("#emailErr");

            } else {
                error.insertAfter(element);
            }
        }

        

    });
});