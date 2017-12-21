document.addEventListener('DOMContentLoaded',function(){

  var button = document.querySelector('button');
  var status = document.querySelector('.status')
  var shout = document.querySelector('h1')


  button.addEventListener('click',function(){
  if (button.classList.contains("on")){
    shout.innerText = 'Hey, who turned off the lights?'
    document.body.classList.add("dark")
    button.classList.remove("on")
    button.classList.add("off")
  } else {
    shout.innerText = 'It s so bright in here!'
    document.body.classList.remove("dark")
    button.classList.remove("off")
    button.classList.add("on")
  }


  });
})
