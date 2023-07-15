const cardBord = document.querySelector('.card-bord');
const btnAdd = document.querySelector('.add');

const btnDele = document.querySelector('.delet');

const cardAdder = document.querySelector('.flashAdder');

const alertMessage = document.querySelector('.alert');

btnAdd.addEventListener('click', function() {
  cardAdder.classList.remove('hide')
})


document.querySelector('#cancel').addEventListener('click', () => { cardAdder.classList.add('hide') });

document.querySelector('#save').addEventListener('click', function() {
  let question = document.querySelector('#question').value;
  let answer = document.querySelector('#answer').value;

  if (question && answer) {
    
    if (!alertMessage.classList.contains('hide')) {
      alertMessage.classList.add('hide');
    }
    
    cardBord.appendChild(createCard(question, answer));
  }else{
    alertMessage.classList.remove('hide');
  }

})




function createCard(question, answer) {

  const innerCard = document.createElement('div');
  innerCard.classList.add('card');
  innerCard.classList.add('my-3');
  innerCard.classList.add('px-0');
  innerCard.classList.add('cards')

  innerCard.innerHTML = `
        <div class="card-header text-end  border-bottom border-danger">
       <button type="button" class="btn cancel">
       X
        </button>
         </div>
          <div class="card-body">
            <h5 class="card-title text-start">${question}?</h5>
            <div class="card-text">
              <p class="text-center py-4 answer hide">${answer}</p>
            </div>
          </div>
`

  innerCard.querySelector('.card-body').addEventListener('click', function() {
    const answer = innerCard.querySelector('p');
    if (answer.classList.contains('hide')) {
      answer.classList.remove('hide');
    } else {
      answer.classList.add('hide');
    }
  });

innerCard.querySelector('.cancel').addEventListener('click',function(e){
  const parent = e.target.parentElement;
  cardBord.removeChild(parent.parentElement);
})


  return innerCard;
}