const basicBtn = document.getElementById('basic-btn')
const internBtn = document.getElementById('intern-btn')
const advBtn = document.getElementById('adv-btn')
const basicSkills = document.getElementById('basicSkills')
const internSkills = document.getElementById('interSkills')
const advanceSkills = document.getElementById('advancedSkills')

const showBasics = ()=>{
if (basicSkills.style.display === 'none') {
    basicSkills.style.display = 'block'
    advanceSkills.style.display = 'none'
    internSkills.style.display = 'none'
} else {
    basicSkills.style.display = 'block'
}
}

const showInter = () =>{
 if (internSkills.style.display === 'none') {
     internSkills.style.display = 'block'
     basicSkills.style.display = 'none'
     advanceSkills.style.display ='none'
 } else {
    internSkills.style.display = 'none'
 }
}

const showAdv = () =>{
    if (advanceSkills.style.display === 'none') {
        advanceSkills.style.display = 'block'
        basicSkills.style.display = 'none'
        internSkills.style.display ='none'
    } else {
       advanceSkills.style.display = 'none'
    }
}





basicBtn.addEventListener('click', showBasics)
internBtn.addEventListener('click', showInter)
advBtn.addEventListener('click', showAdv)