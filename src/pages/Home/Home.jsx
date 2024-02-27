import React from "react";
import { Link } from "react-router-dom";
const Home =()=>{
    return(
        <div className="home">
            <div className="home__container">
                <div className="home__item">
                    <div>
                        home
                    </div>
                    <Link to='Login'>Login</Link>  
                    <div>
                        <Link to='Mypage'>Mypage</Link>       
                    
                    </div>     
 
                </div>
            </div>
        </div>
    );
};
export default Home;