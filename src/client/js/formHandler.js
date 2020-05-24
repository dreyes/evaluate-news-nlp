function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
    postData('https://twitter.com/nathanbarry/status/1264195055968940033')
    console.log("::: Form Sent :::")

}

const postData = async (mysite = '') => {
    const response = await fetch('http://localhost:8080/analyze', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mysite: mysite }),
    })
    try {
        document.getElementById('results').innerHTML = mysite;
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

export { handleSubmit }
