document.addEventListener('DOMContentLoaded', () =>{
    let counter = document.getElementById('counter')
    let likes = document.querySelector('.likes')
    let pauseButton = document.getElementById('pause')
    let plus = document.getElementById('plus')
    let minus = document.getElementById('minus')
    let form = document.getElementById('comment-form')
    let paused = 0
    let heart = document.getElementById('heart')
    let submit = document.getElementById('submit')
    let likesObj = {
    }
   let secondCounter = setInterval(()=> {
        counter.textContent = (parseInt(counter.textContent) + 1)
    },1000)
    pauseButton.addEventListener('click', function(){
        if (paused === 0){
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
            paused = 1
            pauseButton.textContent = 'resume'
            clearInterval(secondCounter)
        }
        else{
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
            paused = 0
            pauseButton.textContent = 'pause'
            secondCounter = setInterval(()=> {
                counter.textContent = (parseInt(counter.textContent) + 1)
            },1000)
        }
    })
    minus.addEventListener('click', ()=> {
        counter.textContent = (parseInt(counter.textContent) - 1)
    })
    plus.addEventListener('click', ()=>{
        counter.textContent = (parseInt(counter.textContent) + 1)
    } )
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let comment = document.getElementById('comment-input');
        let list = document.getElementById('list');
        let p = document.createElement('p');
        p.textContent = comment.value;
        list.appendChild(p)
        comment.value = ''
})
    heart.addEventListener('click', ()=> {
        if(likesObj[counter.textContent]){
            likesObj[counter.textContent] += 1
        }
        else{
            likesObj[counter.textContent] = 1
        }
        likes.replaceChildren()
        for (const [k, v] of Object.entries(likesObj)){
            let li = document.createElement('li')
            let optionalS = ''
            if (v>1){
                optionalS = 's'
            }
            li.textContent = `${k} has ${v} like${optionalS}`
            likes.appendChild(li)
        }
    })

})