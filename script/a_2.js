$(function(){
    // 메뉴
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().slideDown()
        },
        function(){
            $('.gnb ul').stop().slideUp()
        }
    )

    // 슬라이드
    setInterval(function(){
        $('.slide').animate({top: -300}, function(){
            $('.slide div:first').appendTo('.slide')
            $('.slide').css('top', 0)
        })
    }, 4000)
    
    // 탭
    $('.tab_title h2').click(function(){
        $('.tab_title h2').removeClass('on')
        $(this).addClass('on')

        $('.tab_contents ul').css('display', 'none')
        $('.tab_contents ul').eq($(this).index()).css('display', 'block')
    })

    // 모달
    $('.notice li:first').click(function(){
        $('#modal').addClass('off')
    })

    $('.close').click(function(){
        $('#modal').removeClass('off')
    })
})