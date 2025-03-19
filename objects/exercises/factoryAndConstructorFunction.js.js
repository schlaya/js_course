let address = createAddress('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}