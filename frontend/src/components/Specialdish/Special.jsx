import "./special.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Special = () => {
    const [dishes, setDishes] = useState([]);

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${API_URL}/getImage`);
            setDishes(response.data); // Set all images from the response data
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
            <center>
                <h1 className="heading">Our Special Dishes</h1>
            </center>
            <div className="container">
                {dishes.map((dish, index) => (
                    <div className="cardcontainer" key={index}>
                        <img
                            className="bbqimg"
                            src={dish.image}
                            alt={dish.name}
                        />
                        <div className="details">
                            <h1>{dish.name}</h1>
                            <p>{dish.description}</p>
                            <h2>₹{dish.price}</h2>
                            <div className="ratings mt-auto">
                                <div className="rating-outer">
                                    <div
                                        className="rating-inner"
                                        style={{ width: `${(dish.ratings / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            <button>Buy now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Special;
