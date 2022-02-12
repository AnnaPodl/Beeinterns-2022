
//menuToggle

const  menuToggle = document.getElementById('menuToggle')
const leftbarItem = document.getElementById('leftbar__items')

    menuToggle.addEventListener('click', () =>{
        if (menuToggle.classList.contains('rotate')) {
            
            menuToggle.classList.remove('rotate')
leftbarItem.classList.remove('close')
        } else{
            leftbarItem.classList.add('close')
            menuToggle.classList.add('rotate')}
})

const  menuTogglePro = document.getElementById('menuToggleProgramm')
const leftbarItemPro = document.getElementById('leftbar__itemsProgramm')

menuTogglePro.addEventListener('click', () =>{
        if (menuTogglePro.classList.contains('rotate')) {
            
            leftbarItemPro.classList.remove('close')
            menuTogglePro.classList.remove('rotate')
        } else{
            
            menuTogglePro.classList.add('rotate')
            leftbarItemPro.classList.add('close')}
})

