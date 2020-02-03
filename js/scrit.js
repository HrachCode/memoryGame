$(function(){
    Array.prototype.shuffle = function(){
        var j, x, i;
        for (i = this.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this[i];
            this[i] = this[j];
            this[j] = x;
        }
        return this;
    };
    var myArr = ['a1.png','a2.png','a3.png','a4.png','a5.png','a6.png','a7.png','a8.png'];
    myArr = $.merge(myArr,myArr);
    myArr = myArr.shuffle();
    var game = $('#game');
    var divId = [];
    var imgName = [];
    for(let i = 0;i< myArr.length;i++){
        var div = $('<div>');
        div.addClass('b');
        div.attr('id','block'+i);
        game.append(div);
        var temp = 0;
        div.on('click',function () {
            var index = $(this).index();
            $(this).css({
                backgroundImage:'url(img/'+myArr[index]+')'

            });
            divId.push($(this).attr('id'));
            imgName.push($(this).css('background-image'));
            if(temp%2 != 0){
                $('.block').css({pointerEvents:'none'});
                if (imgName[0] != imgName[1]){
                    setTimeout(function () {

                        $('#'+divId[divId.length -1]).css({
                            backgroundImage:'url(img/question-mark.png)',
                        });
                        $('#'+divId[divId.length -2]).css({
                            backgroundImage:'url(img/question-mark.png)'
                        });

                        imgName = [];
                        $('.b').css({pointerEvents:'auto'});
                        divId.splice(divId.length-2,2);
                    },500);
                }
                else {
                    $('.b').css({pointerEvents:'auto'});
                    $('#'+divId[divId.length -1]).css({
                        pointerEvents:'none',
                    });
                    $('#'+divId[divId.length -2]).css({
                        pointerEvents:'none',
                    });
                    $('#'+divId[divId.length -1]).attr('class','block');
                    $('#'+divId[divId.length -2]).attr('class','block');
                    console.log(divId.length,myArr.length)
                    if(divId.length == myArr.length){
                        setTimeout(function () {
                            alert('haxtanak');
                            setTimeout(function () {
                                location.reload();
                            },1000)
                        },500)

                    }
                    imgName = [];
                }
            }else{
                $(this).css({pointerEvents:'none'});
            }
            temp++;
        });
    }
});