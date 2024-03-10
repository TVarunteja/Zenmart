import React from 'react';
import iphone from '../mswdimages/iphone15.jpg';
import tab from '../mswdimages/lenovotab.jpg';
import chicken from '../mswdimages/chicken-category.png';
import cake from '../mswdimages/cake.png';
import macbookpro from '../mswdimages/macbookpro.jpeg';
import rolex from '../mswdimages/rolex.jpeg';
import "./page.css";
import nike from '../mswdimages/nikeshoes.jpeg';
import watch from '../mswdimages/applewatch.jpeg';
import marshell from '../mswdimages/marshell.jpeg';
import jbl from '../mswdimages/jbl.jpeg';
import milton from '../mswdimages/milton.jpeg';
import giva from '../mswdimages/giva.jpg';
import mancompany from '../mswdimages/mancompany.jpeg';
import hnm from '../mswdimages/HnM.jpeg';
import titan from '../mswdimages/titan.jpeg';

import "./homebg.css"

const Home = () => {
    const handlebuy = () => {
        window.location.href = './About';
    };
    
    const handlecart = () => {
        window.location.href = './About';
    };

    return (
        <div>
            <table align='center' style={{ textAlign: 'center' }}>
                <tr>
                    <td className="card-container">
                        <div className="card">
                            <img src={tab} width="250px" height="250px" alt="Lenovo Tab" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Lenovo Tab 11 pro Gen-2</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card">
                            <img src={iphone} width="250px" height="250px" alt="Iphone" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Iphone 15 pro max</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card">
                            <img src={chicken} width="250px" height="250px" alt="Chicken Biryani" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Chicken biryani</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={cake} width="250px" height="300px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Cake</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={macbookpro} width="250px" height="300px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>MacBook Pro</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                </tr>
                <tr>
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={rolex} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Rolex Watch</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={nike} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Nike Shoes</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td> 
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={watch} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Apple Watch</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={marshell} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Marshell Speaker</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                    <td className="card-container">
                        <div className="card" height="300px">
                            <img src={jbl} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Nike Shoes</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                </tr>
                <tr>
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={milton} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Milton Bottle</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={giva} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Giva Necklace</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={mancompany} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>The Man Company Perfume</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={hnm} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>H&M Hoodie</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                <td className="card-container">
                        <div className="card" height="300px">
                            <img src={titan} width="250px" height="250px" alt="Cake" /> {/* Adjust width and height here */}
                            <br />
                            <h3>Titan Goggles</h3>
                            <button className='buy-button' onClick={handlebuy}>Buy</button>
                            <button className='add-to-cart-button' onClick={handlecart}>Add to Cart</button>
                        </div>
                    </td>  
                </tr>
            </table>
        </div>
    );
};

export default Home;
