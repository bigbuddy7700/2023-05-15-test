$(function(){
    // 메뉴
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().fadeIn('fast')
        },
        function(){
            $('.gnb ul').stop().fadeOut()
        }
    )

    // 슬라이드
    var index = 0
    $('.slide div').eq(index).show()

    setInterval(function(){
        var nextIndex = (index+1) % 3
        $('.slide div').eq(index).fadeOut()
        $('.slide div').eq(nextIndex).fadeIn()
        index = nextIndex
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