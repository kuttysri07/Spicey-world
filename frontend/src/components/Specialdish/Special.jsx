import "./special.css";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import hotdog from "../Assets/hotdog.png"
import chicken from "../Assets/chicken.png"
import barbeque from "../Assets/barbeque.png"
import burger from "../Assets/burger.png"



const Special = () => {
    // const [dishes, setDishes] = useState([]);
    // const { category } = useParams();

    // const fetchImages = async () => {
    //     try {
    //         const response = await axios.get(`${API_URL}/getImage`);
    //         setDishes(response.data); // Set all images from the response data
    //     } catch (error) {
    //         console.error("Error fetching images:", error);
    //     }
    // };

    // const fetchCategoryImages = async () => {
    //     if (category) {
    //         try {
    //             const response = await axios.get(`${API_URL}/getImage/${category}`);
    //             setDishes(response.data); // Set images filtered by category
    //             console.log(category)
    //         } catch (error) {
    //             console.error("Error fetching category:", error);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     if (category) {
    //         fetchCategoryImages();
    //     } else {
    //         fetchImages();
    //     }
    // }, [category]);

    return (
        <div id="special">
            <center>
                <h1 className="heading">Our Special Dishes</h1>
            </center>
            <div className="democontainer">
                <Link to={"/dishes/chicken"}>
                    <div className="democardcontainer">
                        <img className="demobbqimg" src={chicken} alt="" />
                        <h1>chicken</h1>
                    </div>
                </Link>
                
                <Link to={"/dishes/hotdog"}>
                    <div className="democardcontainer">
                        <img  className="demobbqimg" src={hotdog} alt="" />
                        <h1>hotdog</h1>
                    </div>
                </Link>
                
                <Link to={"/dishes/burger"}>
                    <div className="democardcontainer">
                        <img  className="demobbqimg" src={burger} alt="" />
                        <h1>Burger</h1>
                    </div>
                </Link>
               
                <Link to={"/dishes/barbeque"}>
                    <div className="democardcontainer">
                        <img className="demobbqimg" src={barbeque} alt="" />
                        <h1>barbeque</h1>
                    </div>
                </Link>
                
            </div>
        </div>
    );
};

export default Special;
