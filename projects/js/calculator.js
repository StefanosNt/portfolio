$(document).ready(function(){

  var regex = /[-+x÷]/g;
  var lastHit='';
  var tmp='';
  $('button').click(function(){
    var btn = $(this);
    var res = $('#results');
    var log = $('#log');
    if(lastHit.match(regex) !==null && btn.text().match(regex)!==null){
      res.text(res.text().substring(0,res.text().length-1)+btn.text());
      log.text(log.text().substring(0,log.text().length-1)+btn.text());
    }
    else if(lastHit==='=' && btn.text().match(regex)===null){
      res.empty();
      log.empty();
      if(btn.text()!=='CE' && btn.text()!=='AC'){
        res.append(btn.text());
        log.append(btn.text());
      }
    }
    else{
      switch(btn.attr('id')){
        case 'ac':
          log.empty();
          res.empty();
        case  'ce':
          log.text(log.text().substring(0,log.text().length-res.text().length));
          res.empty();
          break;
        case 'minus':
        case 'plus':
        case 'div':
        case 'mul':
          res.empty();
          res.append(btn.text());
          log.append(btn.text());
          break;
        case 'equal':
          log.text(log.text().replace('÷','/'));
          log.text(log.text().replace('x','*'));

          if(res.text().indexOf('.')>-1 || log.text().indexOf('.')>-1){
            tmp =  parseFloat(eval(log.text()).toPrecision(12));
          }else{
            tmp = eval(log.text());
          }

          log.empty();
          res.text(tmp);
          log.text(tmp);
          if(log.text()==='Infinity'){
            log.empty();
          }
          break;
        default:
          if(lastHit.match(regex)!==null){
            res.empty();
          }
          res.append(btn.text());
          log.append(btn.text());
          break;
      }
    }

    lastHit = btn.text();

  });
});
