class ApartmentCardComponent {
  static USD_EUR = 0.88
  constructor(props) {
    this.props = props
    this.init()
  }

  init = () => {
    const {
      type,
      owner,
      roomCount,
      squares,
      address,
      price,
      imgSrc,
    } = this.props

    const { amount, currency } = price
    const priceToEuro =
      currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount
    const formatedPrice = Math.round(100 * priceToEuro) / 100 + ' €'

    const { city, country, street, number } = address
    const fullAddress = `${street}-${number}, ${city}, ${country}`
    const specifications = `${roomCount} kambariai / ${squares} kv.m`

    const { fullname, email, phone } = owner

    this.htmlElement = document.createElement('article')
    this.htmlElement.className = 'card shadow-sm'
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top" height="200px"
    style="object-fit: cover">
    <div class="card-body">
      <h5 class="card-title m-0">${type}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item px-0 pt-1">
          <p class="text-muted font-weight-light mb-0">
            <small>Kaina:</small>
          </p>
          <p class="mb-0">${formatedPrice}</p>
        </li>
        <li class="list-group-item px-0">
          <p class="text-muted font-weight-light mb-0">
            <small>Tipas:</small>
          </p>
          <p class="mb-0">${specifications}</p>
        </li>
        <li class="list-group-item px-0">
          <p class="text-muted font-weight-light mb-0">
            <small>Adresas:</small>
          </p>
          <p class="mb-0">${fullAddress}</p>
        </li>
        <li class="list-group-item px-0">
          <p class="text-muted font-weight-light mb-0">
            <small>Kontaktai:</small>
          </p>
          <p class="mb-0">${fullname}</p>
          <a href="#" class="card-link d-block mx-0">
            <small>${email}</small>
          </a>
          <a href="#" class="card-link d-block mx-0">
            <small>${phone}</small>
          </a>
        </li>
      </ul>
    </div>
  </div>`
  }
}

//     "owner": {
//       "fullname": "Han Solo",
//       "email": "solo@gmail.com",
//       "phone": "+37061171078"
//     },
