import chef from "../Assets/chef_PNG60.png"
import "./chef.css"

const Chef = () => {
  return (
    <div >
        <center><h1>Meet our Chefs</h1></center>
        <div className="chefcontainer">
                <div className='left'>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF0000" d="M35,-59.8C47.7,-53.2,62.1,-48.7,72.6,-39.1C83.2,-29.4,90,-14.7,88.6,-0.8C87.3,13.2,77.8,26.3,69.5,39.8C61.1,53.2,53.9,67,42.5,72.1C31.1,77.1,15.6,73.4,0.8,72C-14,70.6,-27.9,71.6,-38.8,66.2C-49.6,60.9,-57.4,49.2,-65.9,37.2C-74.4,25.1,-83.7,12.5,-84.3,-0.3C-84.8,-13.2,-76.7,-26.4,-66.6,-35.8C-56.6,-45.3,-44.7,-51,-33.2,-58.3C-21.8,-65.6,-10.9,-74.5,0.1,-74.7C11.1,-74.9,22.2,-66.3,35,-59.8Z" transform="translate(100 100)" />
                        </svg>
                        <img className="chef" src={chef} alt="" />
                </div>
                <div className='right'>
                    <h1>Mastermind Behind Your Favorite Dishes</h1>
                    <p> Marco Russo is the culinary force behind our restaurant, bringing a wealth of experience and passion to every plate. With over two decades in the industry, he has honed his craft in the vibrant culinary scenes of Milan and Rome.
                        Marco’s culinary philosophy revolves around simplicity and bold flavors. He believes in showcasing the purest taste of high-quality ingredients, transforming them into extraordinary dishes. His menus are a contemporary interpretation of classic Italian cuisine, infused with global influences and innovative techniques.
                        Beyond the kitchen, Marco is a dedicated foodie and wine enthusiast. His love for exploring new flavors and cultures is reflected in his ever-evolving menu.
                    </p>
                </div>
        </div>
        
    </div>
  )
}

export default Chef