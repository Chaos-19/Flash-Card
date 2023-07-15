const cardBord = document.querySelector('.card-bord');
const btnAdd = document.querySelector('.add');

const btnDele = document.querySelector('.delet');

const cardAdder = document.querySelector('.flashAdder');

btnAdd.addEventListener('click', function() {
  cardAdder.classList.remove('hide')
})

document.querySelector('#cancel').addEventListener('click', () => { cardAdder.classList.add('hide') });

document.querySelector('#save').addEventListener('click', function() {
  let question = document.querySelector('#question').value;
  let answer = document.querySelector('#answer').value;

  cardBord.appendChild(createCard(question, answer));

})




function createCard(question, answer) {

  const innerCard = document.createElement('div');
  innerCard.classList.add('card');
  innerCard.classList.add('my-3');
  innerCard.classList.add('px-0');
  innerCard.classList.add('cards')

  innerCard.innerHTML = `
        <div class="card-header text-end  border-bottom border-danger">
         <a href="" class="btn">cancel</a></div>
          <div class="card-body">
            <h5 class="card-title text-start">${question}?</h5>
            <div class="card-text">
              <p class="text-center py-4 answer show">${answer}</p>
            </div>
          </div>
`

innerCard.addEventListener('click', function(){
      innerCard.querySelector('p').classList.remove('show');
       });




  return innerCard;
}