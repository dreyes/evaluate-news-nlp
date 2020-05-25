function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    console.log("::: Form Submitted :::");
    
    Client.requestAPI(formText)
    console.log("::: Form Sent :::")

}

export { handleSubmit }
