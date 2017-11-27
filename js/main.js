$(document).ready(function(){
    // 左侧栏显隐
    var toggle = true;
    $('.menu').on('click',function(){
        // $('.nav-left').css("width","60px");
        if(toggle){
            $('.wrap').css("transform"," translateX(60%)");
            toggle=false;
        }else{
            $('.wrap').css("transform"," translateX(0%)");
            toggle=true;
        }
        });
     // 页面高度设置
     $('.nav-left').css('min-height',$(window).height());
     $('.wrap').css('min-height',$(window).height()); 
     $('.all').css('min-height',$(window).height());   
     // 导航点击设置
     $('.search-e').on("click",function(){
        $(this).addClass('triangle').siblings().removeClass('triangle');
        $('.send').css('display','none');
        $('.all').css('display','none');
        $('.search').css('display','block');
     })
     $('.send-e').on("click",function(){
        $(this).addClass('triangle').siblings().removeClass('triangle');
        $('.send').css('display','block');
        $('.all').css('display','none');
        $('.search').css('display','none');
        $('.hide-div').css('display','block');
        setTimeout(function(){
            $('.hide-div').css('display','none');
        },3000)
     });
     $('.all-e').on("click",function(){
        $(this).addClass('triangle').siblings().removeClass('triangle');
        $('.send').css('display','none');
        $('.all').css('display','block');
        $('.search').css('display','none');
     });
     //advert 隐藏
    $('.ad-btn').on("click",function(){
        $('.hide-wrap').css("display","block");
    })
    $('.hide-wrap dd').on("click",function(){
        $('.ad').css("display","none");
    })

    $('.camera-icon').on('click',function(){
        var p=prompt('输入密码打开摄像头',' 提示：6位数字');
        if(p == '098765'){
            alert('密码正确！请重新尝试！^_^')
        }else if(typeof p !== Number){
           alert('看不见提示啊？长眼干嘛使的？？？');
        }
    });

    // var search_value=;

                                                
    $('#search_text').on('focus',function(){
        var timer=setInterval(function(){
            var val=$('#search_text').val();
          
            if(val !== ''){
                $('.delete-icon').css('display','block');
                console.log(val);
            }else{
                $('.delete-icon').css('display','none'); 
            }
          },500);
          $('#search_text').blur(function(){
              clearInterval(timer);
          })
    });
    
    // if($('#search_text').val() !== ''){
    //     $('.delete-icon').css('display','block');
    // }
    $('.delete-icon').on("click",function(){
        $('#search_text').val('');
    })
})