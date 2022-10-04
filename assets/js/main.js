window.onload = () => {
  selectElement('.spinner-wrapper').style.display = 'none'
}

// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if (element) return element
  throw new Error(
    `Algo deu certo, certifique-se de que ${selector} existe ou está digitado corretamente.`
  )
}
const buttons = document.querySelectorAll('.btn.btn-secondary')

// Styles Elements

/**
 *  Component Menu
 *
 */
selectElement('.btn-group-vertical').style.display = 'flex'
selectElement('.btn-group-vertical').style.flexDirection = 'row'
selectElement('.btn-group-vertical').style.gap = '2rem'

buttons.forEach(button => {
  button.style.borderRadius = '8px'
  button.style.fontWeight = 'bold'
})

/**
 *  Component Header
 *
 */
const myStyles = `
    text-align: -webkit-right;
    color: #fff;
    background-color: #6c757d;
`
selectElement(`.jumbotron`).style.cssText = myStyles

selectElement(
  `.jumbotron [class='btn btn-primary btn-lg']`
).style.backgroundColor = '#28a745'
selectElement(`.jumbotron [class='btn btn-primary btn-lg']`).style.border =
  '#28a745'

/**
 *  Component Cards
 *
 */

const cardButton = document
  .querySelector(`.card [src='https://placeimg.com/300/180/tech']`)
  .nextElementSibling.querySelector('.btn.btn-primary')

cardButton.setAttribute('class', 'btn btn-success')

/**
 *  Component List
 *
 */

const cloneListQuarto = document
  .querySelector(`.row [class='col-lg-4'] .list-group`)
  .appendChild(
    document.querySelector(`[class='list-group-item']`).cloneNode(true)
  )

cloneListQuarto.textContent = 'Quarto item'
cloneListQuarto.setAttribute('class', 'list-group-item active')

const cloneListQuinto = document
  .querySelector(`.row [class='col-lg-4']  .list-group`)
  .appendChild(
    document.querySelector(`[class='list-group-item']`).cloneNode(true)
  )

cloneListQuinto.textContent = 'Quinto item'
