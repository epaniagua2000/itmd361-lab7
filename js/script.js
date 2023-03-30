function init(){
  
    var words = document.getElementById('entryinput').placeholder;

    function myEventFunction() {
      var temp = document.getElementsByTagName('h2').item(0);
      var name = temp.innerHTML;
      alert(name + ': ' + words);
    }
    
    var div = document.getElementById('entrybutton');
    var output = document.getElementById('textoutput');
    
    div.addEventListener('click', myEventFunction);
    div.addEventListener('click', function(){
      output.innerHTML = words;
    });
    
}
window.addEventListener('load', init);