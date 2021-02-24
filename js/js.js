$(function () {

    'use strict';

    // start navbar

// start user




    $("#btn").on("click",function () {

        if($(".lg-mov").hasClass("act")){

            $(".lg-mov").removeClass("act").addClass("act2")

        }

        
      
      
        })
    

    
        $("#btn2").on("click",function () {

          
          

            if($(".lg-mov").hasClass("act2")){

                $(".lg-mov").removeClass("act2").addClass("act")
    
            }else{

                $(".lg-mov").addClass("act")
            }
          
    
        })

        $(".fa-user").on("click",function () {

            $(".wellcom").fadeIn();
            $(".over").fadeIn()
            $(".close").fadeIn()
        
        })


        $(".close").on("click",function () {

            $(".wellcom").fadeOut();
            $(".over").fadeOut()
            $(".close").fadeOut();
            
            console.log("sdsdsd")
        })
        $(".fa-search").on("click",function () {

            $(".see").fadeIn();
            $(".close2").fadeIn();
            
        });
        
        //start search
        $(".close2").on("click",function () {

            $(".see").fadeOut();
            $(".close2").fadeOut();
            
            console.log("sdsdsd")
        })



        //steart header

        $(".header").height($(window).height())

        // start owlCarousel header

        var owl = $('#one');
        owl.owlCarousel({
            items:3,
            autoHeight:true,
            loop:true,
            margin:10,
             autoWidth:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

        $(" body .header .right .owl-carousel .owl-next").append( "<span class='per pp'></span>","<span class='per2 pp'></span>","<span class='per3 pp'></span>" );
        $( "body .header .right .owl-carousel .owl-prev" ).append( "<p class='per pp'></p>",
        "<p class='per2 pp'></p>","<p class='per3 pp'></p>" );




        var owl2 = $('#tow');
        owl2.owlCarousel({
            items:1,
            autoHeight:true,
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        
        $('.play').on('click',function(){
            owl2.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl2.trigger('stop.owl.autoplay')
        })

        $(" .worck .owl-carousel .owl-next").append( "<span class='per pp'></span>","<span class='per2 pp'></span>","<span class='per3 pp'></span>" );
        $( ".worck .owl-carousel .owl-prev" ).append( "<p class='per pp'></p>",
        "<p class='per2 pp'></p>","<p class='per3 pp'></p>" );


        var owl3 = $('#three');
        owl3.owlCarousel({
            items:3,
            autoHeight:true,
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoWidth:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        
      

       

        var owl4 = $('#for');
        owl4.owlCarousel({
            items:1,
            autoHeight:true,
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        
        $('.play').on('click',function(){
            owl4.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl4.trigger('stop.owl.autoplay')
        })

        $(" .park .owl-carousel .owl-next").append( "<span class='per pp'></span>","<span class='per2 pp'></span>","<span class='per3 pp'></span>" );
        $( ".park .owl-carousel .owl-prev" ).append( "<p class='per pp'></p>",
        "<p class='per2 pp'></p>","<p class='per3 pp'></p>" );


        var owl3 = $('#six');
        owl3.owlCarousel({
            items:3,
            autoHeight:true,
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoWidth:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });



        $(window).scroll(function () {

            if($(window).scrollTop() >= $(".header").height()){

                $("body .navbar .pers li i").css({
                   color:"black"
                })


            }else{
                $("body .navbar .pers li i").css({
                    color:"#fff"
                 })

            }

        })








       


});