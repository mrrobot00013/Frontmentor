

$(document).ready(function(){
      $('.item1').click(function(){
            $('.more1').toggle(300);
            $('.btn1').toggleClass('active',300)
            $('.btn2, .btn3, .btn4, .btn5').removeClass('active',300)
            $('.item1').toggleClass('active');
            $('.more2, .more3, .more4, .more5').css('display', 'none');
            $('.item2, .item3, .item4, .item5').removeClass('active');
            // return false;
            
      });

      $('.item2').click(function(){
            $('.more2').toggle(300);
            $('.btn1, .btn3, .btn4, .btn5').removeClass('active',300)
            $('.btn2').toggleClass('active',300)
            $('.item2').toggleClass('active');
            $('.more1, .more3, .more4, .more5').css('display', 'none');
            $('.item1, .item3, .item4, .item5').removeClass('active');
      });

      $('.item3').click(function(){
            $('.more3').toggle(300);
            $('.btn1, .btn2, .btn4, .btn5').removeClass('active',300)
            $('.btn3').toggleClass('active',300)
            $('.item3').toggleClass('active');
            $('.more2, .more1, .more4, .more5').css('display', 'none');
            $('.item2, .item1, .item4, .item5').removeClass('active');
      });

      $('.item4').click(function(){
            $('.more4').toggle(300);
            $('.btn2, .btn3, .btn1, .btn5').removeClass('active',300)
            $('.btn4').toggleClass('active',300)
            $('.item4').toggleClass('active');
            $('.more2, .more3, .more1, .more5').css('display', 'none');
            $('.item2, .item3, .item1, .item5').removeClass('active');
      });

      $('.item5').click(function(){
            $('.more5').toggle(300);
            $('.btn2, .btn3, .btn4, .btn1').removeClass('active',300)
            $('.btn5').toggleClass('active',300)
            $('.item5').toggleClass('active');
            $('.more2, .more3, .more4, .more1').css('display', 'none');
            $('.item2, .item3, .item4, .item1').removeClass('active');
      });

});