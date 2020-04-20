function validate() {
    var spinner=document.getElementById('spinner');
    spinner.hidden=false;
    setTimeout(function(){
      spinner.hidden=true;
    }, 5000);
    return false;
  }

  validate();