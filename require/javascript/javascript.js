$(document).ready(function(){
    $(window).scroll(function(){
         if($(this).scrollTop() > 600){
            $('.totopbtn').fadeIn(500);
        }else{
            $('.totopbtn').fadeOut(500);
        }
    });
    $('.totopbtn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },2000);
    });
    

});


/*******Mixit UP****************/
var mixer = mixitup('.grid-portfolio-container');
/*******Hemberger Menu**********/
function openmenubtn(){
    document.getElementById('menupage').style.width = '100%';
}
function closemenubtn(){
    document.getElementById('menupage').style.width = '0%';
}

$(document).ready(function(){
   $('.closemenu a').on('click', function(){
       $('html, body').animate({
           scrollTop : $($.attr(this, 'href')).offset().top,
       },2000);
       return false
   }); 
});