class ApartmentGridComponent {
  constructor() {
    this.state = { loading: false, apartments: [] }
    this.init()
  }
  fetchApartments = () => API.fetchApartments(this.saveApartments, alert)

  saveApartments = (apartments) => {
    this.state.apartments = apartments
    this.state.loading = false
    this.render()
  }

  showError = alert

  init = () => {
    this.state.loading = true
    this.fetchApartments()
    this.htmlElement = document.createElement('div')
    this.htmlElement.className = 'row g-3'
    this.render()
  }

  cardWrapper = (element) => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3'
    col.appendChild(element)
    return col
  }

  render = () => {
    const { loading, apartments } = this.state
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="./assets/Loading.gif"/></div>`
    } else if (apartments.length > 0) {
      this.htmlElement.innerHTML = ''
      const ApartmentElements = apartments
        .map((x) => new ApartmentCardComponent(x))
        .map((x) => x.htmlElement)
        .map(this.cardWrapper)
      this.htmlElement.append(...ApartmentElements)
    } else {
      this.htmlElement.innerHTML = `<h2 class="text-center>Apartment elementų nėra</h2>`
    }
  }
}
