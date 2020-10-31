$(()=>{
  $('#keisanBtn').on('click',()=>{
    let amount = Number($('#amount option:selected').val());
    let speed = Number($('#speed option:selected').val());
    let time = Number($('#time option:selected').val());

    let tekika = ((amount*speed)/time).toFixed(1);
    let tentekiSet;
    let hourTime = time/60;

    if(speed== 20){
      tentekiSet = '成人用';
    }else{
      tentekiSet = '小児用';
    };
    
    $('#output').html('輸液 <font size="+2">'+ amount +' </font>mlを、<font size="+2">'+ speed + '</font>滴輸液('+ tentekiSet +')セットで、<font size="+2">'+ hourTime +'</font>時間で落とすには<br><font size="+3" color="red">'+ tekika + '</font>滴/分でセットしてください。');

  });
});