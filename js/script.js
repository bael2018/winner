// changeText 
const changeText = document.querySelector('.changeText')
changeText.innerHTML = 'Randomizer'
const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click' , e => {
    e.preventDefault()

    const askAmount = +prompt("How many people?" , 1)

    if(askAmount <= 1){
        alert("Участников должно быть больше 1")
    }else{

        const disappear = document.querySelector('.disappear')
        disappear.classList.add('active')
        changeText.innerHTML = 'Добавление участников'
        const add = document.querySelector('.disappear2')

        for(let i = 0; i < askAmount; i++){
            let arr =  `
            <div class="card mb-3 never">
                <div class="card-body">
                    <input class='Input${i + 1} mainInputs form-control' placeholder="Имя участника под #${i + 1}" type="text">
                </div>
            </div>
            `
            add.insertAdjacentHTML('afterbegin' , arr)
        }
        localStorage.setItem('askAmount' , JSON.stringify(askAmount))
        add.insertAdjacentHTML('beforeend' , `<button class='btn btn-primary showed' onclick="showPLayers()">Добавить всех участников</button>`)
    }
})  
// showpPLayers //
function showPLayers(){
    let mainInputs = document.querySelector('.mainInputs')

    const getAmount = JSON.parse(localStorage.getItem('askAmount'))

    if(mainInputs.value === ''){
        alert("Заполните поля ввода")
    }else if(mainInputs.value !== ''){
        changeText.innerHTML = 'Список участников'
        const getAmount = JSON.parse(localStorage.getItem('askAmount'))

        const add = document.querySelector('.add')

        for(let i = 0; i < getAmount; i++){
            const safe =  document.querySelector(`.Input${i + 1}`)
            let arr =  `
                <li id='${i + 1}' class='mb-4 list list${i + 1}'>
                    <p>${safe.value}</p>    
                </li>
            `
            add.insertAdjacentHTML('afterbegin' , arr)

            const added = document.querySelector('.disappear2')
            added.classList.add('none')
        }

        add.insertAdjacentHTML("beforeend" , `<button onclick='showWinner()' class='btn btn-success'>Показать победителя</button>`)
    }

    for(let i = 0; i < getAmount; i++){
        const safe =  document.querySelector(`.Input${i + 1}`)
        if(safe.value === ''){
            return
        }
    }
}
function showWinner(){
    const getAmount = JSON.parse(localStorage.getItem('askAmount'))
    const saver = document.querySelectorAll('.add li')
    const random = Math.floor(Math.random() * getAmount)
    saver.forEach(item => {
        if(item.id == random){
            item.classList.add('bg')
        }
    })
}
