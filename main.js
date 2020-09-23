
const displayDiv = document.getElementById('customerDisplay')


for (let customer of customers) {
    let newDiv = document.createElement('div') 
    displayDiv.appendChild(newDiv)

    //let list = document.createElement('ul')
    //displayDiv.appendChild(list)
    
    let picture = document.createElement('img') 
    newDiv.appendChild(picture)
    picture.src = customer.picture.thumbnail

    let mail = customer.email
    let mailParagraph = document.createElement('p')
    newDiv.appendChild(mailParagraph)
    mailParagraph.innerText = mail
   
    let name = customer.name.first + ' ' + customer.name.last     
    let nameHeader = document.createElement("h2")
    newDiv.appendChild(nameHeader)
    nameHeader.innerText = name

    let address = customer.location.street + '\n' + customer.location.city + ', ' + 
    customer.location.state + ' ' + customer.location.postcode
    let addressParagraph = document.createElement('p')
    newDiv.appendChild(addressParagraph)
    addressParagraph.innerText = address

    //phone

    //birthdate
    let date = new Date(customer.dob)
    dateString = date.getMonth() + ' ' +date.getDay() + ', ' + date.getFullYear()
    let dateParagraph = document.createElement('p') 
    newDiv.appendChild(dateParagraph)
    dateParagraph.innerText = dateString
    

    //customer_date
    let joinDate = new Date(customer.registered)
    joinDateString = 'Customer since: ' + date.getMonth() + date.getDay() + date.getFullYear() 
    let joinDateParagraph = document.createElement('p')
    newDiv.appendChild(joinDateParagraph)
    joinDateParagraph.innerText = joinDateString

    
}
