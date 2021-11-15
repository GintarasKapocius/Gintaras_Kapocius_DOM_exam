const baseUrl = 'http://localhost:3000'

class API {
  static fetchApartments = (success, failure) => {
    setTimeout(() => {
      fetch(`${baseUrl}/apartments`)
        .then((res) => res.json())
        .then(success)
        .catch(failure)
    }, 1000)
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${baseUrl}/apartments/${id}`, { method: 'DELETE' })
      .then((res) => (res.ok ? success() : failure(res.statusText)))
      .catch(failure)
  }
}

//Check Data

// API.fetchApartments(console.log, console.error)
// API.deleteApartment('2', () => console.log('Item deleted'), console.error)
