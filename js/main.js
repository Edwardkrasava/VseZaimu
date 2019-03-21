$(document).ready(function () {
    $(".slider").slider({
        animate: true,
        range: "min",
        value: 5000,
        min: 100,
        max: 10000,
        step: 100,

        slide: function (event, ui) {
            $(".price_loan").html(ui.value);
            var money = parseInt($('.price_loan').html());
            window.a = money;
            window.a = parseInt(window.a);
            console.log(money);
        },

        change: function (event, ui) {
            $('#znch').attr('value', ui.value);
        }

    });

    var valPrice = $(".slider").slider("value");

    $(".slider_days").slider({
        animate: true,
        range: "min",
        value: 1,
        min: 1,
        max: 30,
        step: 1,

        slide: function (event, ui) {
            $(".deadline_number").html(ui.value);
            var days = parseInt($('.deadline_number').html());
            window.b = days;
            window.b = parseInt(window.b);
            console.log(days);
        },

        change: function (event, ui) {
            $('#znch_days').attr('value', ui.value);
        }
    });

    var valDays = $(".slider_days").slider("value");

    var commission;
    var price;
    var commissionState;
    $('.calculate_commission').click(function (evn) {
        commission = window.a * 0.016;
        commission = parseInt(commission);
        price = window.a + commission * window.b;
        price = parseInt(price);
        console.log(price);
        $('.payment_price').html(price);
        commissionState = price - window.a;
        commissionState = parseInt(commissionState);
        $('.commission_number').html(commissionState);
        console.log(commissionState);
    })

    $(document).ready(function (evn) {
        commission = valPrice * 0.016;
        commission = parseInt(commission);
        price = valPrice + commission * valDays;
        price = parseInt(price);
        console.log(price);
        $('.payment_price').html(price);
        commissionState = price - valPrice;
        commissionState = parseInt(commissionState);
        $('.commission_number').html(commissionState);
        console.log(commissionState);
    })

    $('.arrow_lang').click(function () {
        $('.language_show_list').toggle(300);
        $(this).toggleClass('active_arrow');
    })

    $('.other_languages').click(function () {
        var lang = $(this).html();
        $('.main_language').html(lang);
        $('.active_arrow').toggleClass();
    })
});