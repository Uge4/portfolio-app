import React, { useState } from "react"

function Contact(){
const [visitorName, setVisitorName] = useState("")
const [visitorEmail, setVisitorEmail] = useState("")
const [visitorMessage, setVisitorMessage] = useState("")

function updateContactDB(event){
    
    event.preventDefault()
    const newContact = {
      "name": visitorName,
      "email": visitorEmail,
      "message": visitorMessage,
    }

    fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "content-Type" : "application/json"},
        body: 
          JSON.stringify(newContact),
      })
      .then((res) => res.json())
      .then((addedContact) => console.log(addedContact))

    // Form.reset()
}

return (

    <div className="contactPage">
        
        <div className="formTitle" >
            <h1>Contact.</h1>
            <p>Connect with me online or email <a href="mailto: eugeneholenstein@gmail.com" ><strong>eugeneholenstein@gmail.com</strong></a> </p>
        </div>
        
        <form 
        className="form" 
        onSubmit={(event)=>updateContactDB(event)}
        >
        
            <input 
                id="name"
                type="text" 
                name="name"
                placeholder="Name"
                value={visitorName}
                onChange={(event)=>setVisitorName(event.target.value)}
                />

            <input 
                id="id"
                type="text" 
                name="email" 
                placeholder="Email"
                value={visitorEmail}
                onChange={(event)=>setVisitorEmail(event.target.value)}
                />

            <textarea
                for="freeform" 
                id="message" 
                name="message"
                placeholder="Hi Eugene, please call me to discuss ..." 
                rows="10" 
                cols="50"
                value={visitorMessage}
                onChange={(event)=>setVisitorMessage(event.target.value)}
                />

            <button id="submitBtn" type="submit">Send</button>
    
        </form>
    </div>
    

)


}

export default Contact;