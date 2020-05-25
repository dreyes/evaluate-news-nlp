const requestAPI = async (mysite = '') => {
  const response = await fetch('http://localhost:8080/analyze', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mysite: mysite }),
  })
  try {
      const newData = await response.json();
      console.log(newData);
      document.getElementById('polarity').innerHTML = "Polarity: " + newData.polarity;
      document.getElementById('subjectivity').innerHTML = "Subjectivity: " + newData.subjectivity;
      return newData;
  } catch(error) {
      console.log("error", error);
  }
}

export { requestAPI }
