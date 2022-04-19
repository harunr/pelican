
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
		
        var headerHeight = $('.main-header-section').height();
        
        console.log(headerHeight);
        
        
         if( $('div.scroll-bottom > a').length ){
            $('div.scroll-bottom > a').click(function(e){
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $("#started").offset().top - 108
                }, 1400 );

            })
        }
        
        if ($("section.white-inner").length ){
            $("body").addClass("banner-for")
        }
        
        if ($("section.black-inner").length ){
            $("body").addClass("banner-to")
        }
        
        
        $("div.phone-nav").click(function(){
            $("#menu-wrap").fadeIn()
        })
        $("#exit-icon").click(function(){
            $("#menu-wrap").fadeOut()
        })
       
        
        
        if( $('map').length){
            $('img[usemap]').rwdImageMaps();
        }
        
        
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 1){
                $("body").addClass("fixedTop")
            }
            else{
                $("body").removeClass("fixedTop")
            }
        });
        
            
        $('#gallery-tab > li').eq(0).addClass("active")
        $('div.gallery-item-wrap > div.gallery-content').hide()
        $('div.gallery-item-wrap > div.gallery-content').eq(0).show()
        $('#gallery-tab > li').each(function(i){
            $(this).click(function(){

                if( $(this).hasClass("active") ) return false

                else{
                    $("#gallery-tab > li.active").removeClass("active")
                    $(this).addClass('active')
                    $('div.gallery-item-wrap > div.gallery-content').hide()
                    $('div.gallery-item-wrap > div.gallery-content').eq(i).show()
                }
            })
        })
        
        $('#tabs > li').eq(0).addClass("active")
        $('div.tab-content-wrap > div.tab-content').removeClass('active')
        $('div.tab-content-wrap > div.tab-content').eq(0).addClass('active')
        $('#tabs > li').each(function(i){
            $(this).click(function(){

                if( $(this).hasClass("active") ) return false

                else{
                    $("#tabs > li.active").removeClass("active")
                    $(this).addClass('active')
                    $('div.tab-content-wrap > div.tab-content').removeClass('active')
                    $('div.tab-content-wrap > div.tab-content').eq(i).addClass('active')
                }
            })
        })
        
        if($(window).width() < 768){
            $("#mobi-tab").click(function(){
                $("#tabs").slideToggle();
            })

            $("#tabs li").each(function(){
                var selectedElement = $(this).text();
                $(this).click(function(){
                    $("#mobi-tab span").text(selectedElement)
                    $("#tabs").hide();
                })
            })
        }
        
        $('#m_map > area').eq(0).addClass("active")
        $('div.map-info-wrap > div.discover-content-info').hide()
        $('div.map-info-wrap > div.discover-content-info').eq(0).show()
        $('#m_map > area').each(function(i){
            
            $(this).click(function(e){
                e.preventDefault();

                if( $(this).hasClass("active") ) return false

                else{
                    $("#m_map > area.active").removeClass("active")
                    $(this).addClass('active')
                    $('div.map-info-wrap > div.discover-content-info').hide()
                    $('div.map-info-wrap > div.discover-content-info').eq(i).fadeIn()
                }
            })
        })

         if ($ ('.popup-gallery').length ){
           $('.popup-gallery').magnificPopup({
              
                delegate: 'a',
                type: 'image',
               

                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
               
              removalDelay: 500, //delay removal by X to allow out-animation
              callbacks: {
                beforeOpen: function() {
                  // just a hack that adds mfp-anim class to markup 
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                   this.st.mainClass = this.st.el.attr('data-effect');
                }
              },
              
               
               
               /*
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }*/
            });
       }
        
        

    
        
        
        
	})// End ready function.

    
    
    $(window).on('load', function () {
        // Begin common slider
        if ($('div.article-thumb-wrap').length == 0) return false

        $('div.article-thumb-wrap').flexslider({
            animation: "slide",
            slideshow: true,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })


    })
    
    $(window).on('load', function () {
        // Begin common slider
        if ($('div.right-slide-wrap').length == 0) return false

        $('div.right-slide-wrap').flexslider({
            animation: "slide",
            slideshow: true,
            directionNav: false,
            controlNav: true,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })


    })
    
   
    

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})