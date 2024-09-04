import { useEffect, useState } from "react";
import "./dishes.css"
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;


const Dishes = () => {
    const [dishes, setDishes] = useState([]);

    const { category } = useParams(); 


    useEffect(() => {
        
    const fetchImages = async () => {
        if (category) {
            try {
                const response = await axios.get(`${API_URL}/getImage/${category}`);
                setDishes(response.data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        }
    };
        fetchImages();
    }, [category]);

  return (
    
    <div className="dishes">
                <center>
                    <h1 className="heading">Our Special {category} Dishes</h1>
                </center>

                <div className="container">

                    {dishes.map((dish, index) => (
                        <div className="cardcontainer" key={index}>
                            <img className="bbqimg" src={dish.image} alt={dish.name} />
                            <div className="details">
                                <h1>{dish.name}</h1>
                                <p>{dish.description}</p>
                                <h2>₹{dish.price}</h2>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner" style={{ width: `${(dish.ratings / 5) * 100}%` }}></div>
                                    </div>
                                </div>
                                <button>Buy now</button>
                            </div>
                        </div>
                    ))}
                  
                </div>

               <center> <Link to="/hero"><button >Back</button></Link> </center> 
    </div>
  )
}

export default Dishes