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
                    <Link to='login'>Login</Link>  
                    <div>
                        <Link to='mypage'>Mypage</Link>       
                    </div>     
                    <div>
                        <Link to='findlocation'>findLocation</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;