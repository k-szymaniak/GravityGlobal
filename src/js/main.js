const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const restartModalButtons = document.querySelectorAll('[data-restart-button]')
const overlay = document.getElementById('overlay')
const con = document.getElementById("count")
const rest = document.getElementById('reset')
let count = localStorage.getItem("count") || 0

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

restartModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      restartModal(modal)
    })
  })

function openModal(modal) {
    if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        count++;
        con.innerHTML = count;
        localStorage.setItem('count', count)
}

function restartModal(model){
    if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  count = 0;
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

