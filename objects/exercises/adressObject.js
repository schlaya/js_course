
// street
// city
// zipCode
// showAddress(address)

let address = {
    street: 'In der Gass 3',
    city: 'Wangen an der Aare',
    zipCode: 3380,
}

const showAddress = (address) => {
    for (let key in address)
        console.log(key, address[key])
}   

showAddress(address);