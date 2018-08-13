var active = ['worst_active.png','bad_active.png','average_active.png','Good_active.png','Excellent_active.png'];
var Deactive = ['worst_deactive.png','bad_deactive.png','average_deactive.png','Good_deactive.png','Excellent_deactive.png'];
var selected;
var selected_id;

$(document).ready(function(){
    $('#worst img').attr("src",'Assets/img/Deactive/'+Deactive[0]);
    $('#bad img').attr("src",'Assets/img/Deactive/'+Deactive[1]);
    $('#average img').attr("src",'Assets/img/Deactive/'+Deactive[2]);
    $('#good img').attr("src",'Assets/img/Deactive/'+Deactive[3]);
    $('#excellent img').attr("src",'Assets/img/Deactive/'+Deactive[4]);


    $('#Submit_rate').click(function(){
      if(selected==undefined || selected==null)
      {
        window.alert('pls click an emoji')
      }
      else {
          console.log('selected '+selected+' '+selected_id);
          window.alert('Thank you for your Feedback '+ selected_id);
      }
    })

  $('.emoji').click(function(){

    var emoji_id = $(this).attr('id');
    console.log("emoji clicked"+emoji_id);
    var res = emoji_id.split("emoji_");
    var arr_index =  parseInt(res[1])-1;
    console.log(arr_index);

    var state = $(this).attr('src').includes('Deactive')
    console.log(state);
    if(state)
    {
      $('#worst img').attr("src",'Assets/img/Deactive/'+Deactive[0]);
      $('#bad img').attr("src",'Assets/img/Deactive/'+Deactive[1]);
      $('#average img').attr("src",'Assets/img/Deactive/'+Deactive[2]);
      $('#good img').attr("src",'Assets/img/Deactive/'+Deactive[3]);
      $('#excellent img').attr("src",'Assets/img/Deactive/'+Deactive[4]);
      $('img').removeClass('animated bounceIn');
      $(this).attr('src','Assets/img/active/'+active[arr_index]);
      $(this).addClass('animated bounceIn');
      selected = arr_index;
      selected_id = $(this).parent().attr('id');
      console.log(selected+' '+selected_id);
    }
    else
    {
      $(this).attr('src','Assets/img/Deactive/'+Deactive[arr_index]);
      selected=null;
      selected_id='';
      $(this).removeClass('animated bounceIn');

    }
  });
});
