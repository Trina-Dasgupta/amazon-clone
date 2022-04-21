import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="banner"
            />
            {/* Product Id, title, prince, rating, image */}
            <div className="home__row">
                <Product
                    id="3215"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="6987"
                    title="Book : Javascript: Javascript Programming For Absolute Be..."
                    price={1349}
                    rating={3}
                    image="https://http2.mlstatic.com/D_NQ_NP_794903-MLA26289240932_112017-O.webp"
                />
            </div>

            <div className="home__row">
            <Product
                    id="6457"
                    title="Book : Learning React Native: Building Native Mobile Apps..."
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
                <Product
                    id="6547"
                    title="Book : React For Real Front-end Code, Untangled - Fischer,.."
                    price={4720}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
                />
                <Product
                    id="3259"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="9865"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            {/* Product*/}

        </div>
    );
}

export default Home;