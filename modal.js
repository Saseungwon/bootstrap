// modal에 자동으로 focus 해주기 

const emailInputEl = document.querySelector('#exampleInputEmail1')
const modalEl = document.querySelector('#exampleModal')

modalEl.addEventListener('shown.bs.modal',function(){
  emailInputEl.focus();
})