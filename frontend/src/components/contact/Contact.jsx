import "./contact.css"


const Contact = () => {
  return (
    <div >
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
            <input type="text" placeholder='Enter Full Name'/>
            <input type="text"  placeholder='Enter Mobile Number'/>
            <input type="text" name="" id="" placeholder='Email Address' />
            <textarea name="" id="" placeholder='Enter Your Address'></textarea>
            <button>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Contact