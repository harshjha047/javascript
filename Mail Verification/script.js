const scriptURL = 'https://script.google.com/macros/s/AKfycbzv1UXUG4nkC94j1Pt7rRD0XRSlEZ8ug3VyHnRIoDzTNBDXXMv4cPCneBjjE0LPfemc/exec'
  const form = document.forms['submit-to-google-sheet']
  const Msg = document.querySelector("#msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        Msg.innerHTML = "submitted successfully!"
        setTimeout(()=>{
            Msg.innerHTML = ""
        },6000)
        form.reset()
      })
      .catch(error => {
        Msg.innerHTML = "Error submitting form!"
        setTimeout(()=>{
            Msg.innerHTML = ""
        },6000)
        console.error('Error submitting form:', error)
        form.reset()
      })
  })