class ApartmentGridComponent {
  constructor() {
    this.init()
  }
  init = () => {
    this.htmlElement = document.createElement('div')
    this.htmlElement.innerHTML = 'I am Apartment Grid Component'
  }
}
