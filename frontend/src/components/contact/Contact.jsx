import "./contact.css"
import React from "react"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "caad4672-701d-4d09-8578-132aa163f2c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id="contact">
      <center> <h1> Contact us </h1></center> 
    <div className='contactcontainer'>
        <div className='contactleft'>
        
            <div className="contact">
            <h1>Get in touch</h1>
            <h2>No;409 , Malar Nagar , Dharapuram , 638657</h2>
            <h3><img src="" alt="" /> 6536458888</h3>
            <h3><img src="" alt="" /> Mail:spicyworld@gmail.com</h3>
            
            </div>
           
        </div>
        <div className='contactright'>
          <form onSubmit={onSubmit}>
            <input type="text" name="Name" placeholder='Enter Full Name'/>
            <input type="text" name="Mobile Number"  placeholder='Enter Mobile Number'/>
            <input type="text" name="Email" id="" placeholder='Email Address' />
            <textarea name="Address" placeholder='Enter Your Address'></textarea>
            <button>Submit</button>
            </form>
            <span>{result}</span>
        </div>
       
    </div>
    </div>
  )
}

export default Contact