jQuery(document).ready(function(){
    /*Открытие подпункта*/
    jQuery('.menu_item').click(function(){
        open = jQuery(this).parent().hasClass('open');
        jQuery('.item_block').removeClass('open');
        if(open){
            jQuery(this).parent().removeClass('open');
        }else{
            jQuery(this).parent().addClass('open');
        }
        menuHeight();
    });
    jQuery(document).mouseup(function (e){ // событие клика по веб-документу
        var div = jQuery(".drop_bg"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 && !jQuery(e.target).hasClass('menu_item')) { // и не по его дочерним элементам
            jQuery('.item_block').removeClass('open');
        }
    });

    /*Показать поиск*/
    jQuery('.search_show').click(function(){
        jQuery('.block_search').toggleClass('search_mobile');
    });

    /*Ихменение высоты хидера*/
    function menuHeight(){
        width_w = jQuery(window).width();
        if(width_w < 1230){
            heightMenu = jQuery('.menu_pd').height();
            jQuery('.block_menu').css('max-height', heightMenu+'px');
        }else{
            jQuery('.block_menu').css('max-height', '100%');
        }

    }

    /*Resize*/
    jQuery(window).resize(function(){
        resize();
    });
    resize();
    function resize(){
        width = jQuery('.header').height();

        width_w = jQuery(window).width();
        height_w = parseInt(jQuery(window).height());
        height_menu = height_w-100;
        if(width_w < 1230){
            if(width_w < 768){
                height_menu = height_w-44;
            }
            jQuery('.block_menu').css('height', height_menu+'px');
            jQuery('.button_price, .button_size').click(function(){
                jQuery(this).parent().toggleClass('open');
            });
        }else{
            jQuery('.block_menu').css('height', '100%');
        }

        menuHeight();
    }

    /*Открытие дочернего подпункта*/
    jQuery('.child_btn').click(function(){
        open = jQuery(this).parent().hasClass('open');
        jQuery('.child_drop').removeClass('open');
        if(open){
            jQuery(this).parent().removeClass('open');
        }else{
            jQuery(this).parent().addClass('open');
        }
        menuHeight();
    });	

    /*Слайдер*/
    jQuery(".slider_block").owlCarousel({
        autoPlay : false,
        nav:true,
        loop:true,
        slideSpeed : 900,
        paginationSpeed : 400,
        singleItem:true,
        dots:true,
        items:1,
    });

    /*Слайдер товаров*/
    jQuery('.sl_p').owlCarousel({
        autoPlay:false,
        margin:0,
        loop:true,
        responsiveClass:true,
        items:4,
        mouseDrag: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2 /*520*/
            },
            992:{
                items:3 /*780*/
            },
            1230:{
                items:4 /*1040*/
            }
        }
    });

    /*Слайдер личный кабинет*/
    jQuery(".account_slider").owlCarousel({
        autoPlay : false,
        nav:true,
        loop:true,
        slideSpeed : 900,
        paginationSpeed : 400,
        singleItem:true,
        dots:true,
        items:1,
    });

    /*Слайдер фото в карточке*/
    jQuery(".color_mobile").owlCarousel({
        autoPlay : false,
        nav:true,
        slideSpeed : 900,
        paginationSpeed : 400,
        singleItem:true,
        dots:true,
        items:1,
    });

    /*Наверх*/
    jQuery('.backtotop').click(function(){
        jQuery("body,html").animate({
            scrollTop: 0
        }, 500);
    });

    /*Мини меню*/
    jQuery('#toggle').click(function(){
        toggleClass(this, 'on');
        jQuery('body').toggleClass('open_menu');
        menuHeight();
        return false;
    });
    var theToggle = document.getElementById('toggle');
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    /*Фильтр*/
    jQuery('.filter_button').click(function(){
        jQuery(this).parent().toggleClass('open');
    });
    jQuery('.expand a').click(function(){
        data = jQuery(this).attr('data');
        if(data == 0){
            jQuery('.filter_drop').removeClass('open');
            jQuery('.expand a').text('Развернуть');
            jQuery('.expand a').attr('data', 1);
        }else{
            jQuery('.filter_drop').addClass('open');
            jQuery('.expand a').text('Свернуть');
            jQuery('.expand a').attr('data', 0);
        }
    });

    /*Цена бегунок*/
    min = 100;
    max = 500;
    var slider = jQuery(".slider_price").slider({
        animate: true,
        range: true,
        min: 0,
        max: 1000,
        values: [100,500],
        step: 5,
        slide: function( event, ui ) {
            jQuery(".price_min").val(ui.values[0]);
            jQuery(".price_max").val(ui.values[1]);
        }
    });
    jQuery(".price_min").on( "change", function() {
        slider.slider('values', 0, jQuery(this).val());
    });
    jQuery(".price_max").on( "change", function() {
        slider.slider('values', 1, jQuery(this).val());
    });	

    /*Сбросить всё*/
    jQuery('.reset').click(function(){
        slider.slider('values', 0, min);
        slider.slider('values', 1, max);
    });

    jQuery('.filter_button_mobile').click(function(){
        jQuery(this).parent().toggleClass('open');
    });

    /*Закрытие popup*/
    jQuery('.poput_btn .continue').click(function(){
        jQuery('.popup_wrap').fadeOut(300);
    });

    /*Скрол к форме оформления заказа*/
    jQuery('.checkout').click(function(){
        jQuery('html, body').animate({scrollTop: jQuery(".cart_order").offset().top}, 500);
    });

    jQuery('.shipping').click(function(){
        jQuery(this).parent().toggleClass('open');
    });
    jQuery('.prod_size').click(function(){
        jQuery(this).parent().toggleClass('open');
    });


    /*Меняем галерею при переключении цвета*/
    jQuery('.color').click(function(){
        jQuery('.color').removeClass('color_active');
        jQuery(this).addClass('color_active');
        dataColor = jQuery(this).attr('data');
        jQuery('.color_images').css('display', 'none');
        jQuery('.color-'+dataColor).css('display', 'block');

        jQuery('.color_mobile').css('display', 'none');
        jQuery('.color_mobile-'+dataColor).css('display', 'block');

        jQuery("#zoom-"+dataColor).elevateZoom({gallery:'gallery-'+dataColor, cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, zoomType: 'none'}); 
        jQuery("#zoom-"+dataColor).bind("click", function(e) {  
            var ez = jQuery('#zoom-'+dataColor).data('elevateZoom');	
            jQuery.fancybox(ez.getGalleryList());
            return false;
        });	
    });

    
//  активация формы "Мои данные"
    $('.btn_edit').click(function (evt) {
        evt.preventDefault();

        $('.my_account_form input').removeAttr('disabled').removeAttr('placeholder');
        $('.my_account_form .focus').focus();
        $('.my_account_form .btn_edit,.my_account_form .btn_password').hide();
        $('.my_account_form .btn_save,.my_account_form .btn_changes').show();
    });



});