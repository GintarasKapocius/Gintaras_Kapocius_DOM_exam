class ApartmentCardComponent {
  constructor(props) {
    this.props = props
    this.init()
  }

  init = () => {
    this.htmlElement = document.createElement('article')
    this.htmlElement.className = 'card p-3 shadow-sm'
    this.htmlElement.innerHTML = `
      <h2 class="h5">Apartment Card Component</h2>`
  }
}
