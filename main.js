const cardBord = document.querySelector('.card-bord');
const btnAdd = document.querySelector('.add');

const btnDele = document.querySelector('.delet');

const cardAdder = document.querySelector('.flashAdder');

btnAdd.addEventListener('click', function() {
  cardAdder.classList.remove('hide')
})

document.querySelector('#cancel').addEventListener('click', () => { cardAdder.classList.add('hide') });

document.querySelector('#save').addEventListener('click', function() {


})

function createCard(question, answer) {
  
  const innerCard = `    
          <div class="card my-3 px-0">
          <div class="card-header text-end  border-bottom border-danger"><a href="" class="btn">cancel</a></div>
          <div class="card-body">
            <h5 class="card-title text-start">${question} ?</h5>
            <div class="card-text">
              <p class="text-center py-4 answer hide">${answer}</p>
            </div>
          </div>
        </div>
`
return innerCard;
}

