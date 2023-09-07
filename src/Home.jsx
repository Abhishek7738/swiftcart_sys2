import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="container">
        <div className="category-container">
          <div className="user-dropdown">
            <div class="dropdown">
              <a
                class="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                🌟 Category
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">
                    📺 Electronics
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    👗 Fashion
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    🥤 Home Appliance
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    🪑 Furniture
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    📱 Mobile
                  </a>
                </li>
              </ul>
            </div>

            <div className="user-name">
              {isAuthenticated && (
                <label className="welcome-profile text-warning">
                  Welcome 🙌 <font color="skyblue"> {user.name}</font>
                </label>
              )}
            </div>
          </div>
        </div>

        {isAuthenticated ? (
          // onclick add to cart

          <section className="products">
            <div className="product-item">
              <img src="/electro_1.jpeg" alt="laptop" />
              <h3>Laptop</h3>
              <p>Price 56,500</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/electro_2.jpeg" alt="Camera" />
              <h3>DSLR Camera</h3>
              <p>Price 85,393</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/electro_3.jpeg" alt="soundbar" />
              <h3>Soundbar</h3>
              <p>Price 4599</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/electro_4.jpeg" alt="dronecam" />
              <h3>Drone Cam</h3>
              <p>Price 1,54999</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/electro_5.jpeg" alt="headphone" />
              <h3>Headphone</h3>
              <p>Price 2999</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/fashion_1.jpeg" alt="shoes" />
              <h3>Shoes</h3>
              <p>Price 5365</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/fashion_2.jpeg" alt="jeans" />
              <h3>Jeans</h3>
              <p>Price 2163</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/fashion_3.jpeg" alt="watch" />
              <h3>Watch</h3>
              <p>Price 2199</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/fashion_4.jpeg" alt="tshirt" />
              <h3>Tshirt</h3>
              <p>Price 1500</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/fashion_5.jpeg" alt="goggle" />
              <h3>Goggle</h3>
              <p>Price 999</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_1.jpeg" alt="bed" />
              <h3>Bed</h3>
              <p>Price 25,600</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_2.jpeg" alt="table" />
              <h3>Table</h3>
              <p>Price 4500</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_3.jpeg" alt="chair" />
              <h3>Chair</h3>
              <p>Price 11,475</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_4.jpeg" alt="almira" />
              <h3>Almira</h3>
              <p>Price 15,400</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_5.jpeg" alt="mirror" />
              <h3>Mirror</h3>
              <p>Price 5000</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/home_1.jpeg" alt="oven" />
              <h3>Oven</h3>
              <p>Price 6500</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/home_2.jpeg" alt="juicer" />
              <h3>Juicer</h3>
              <p>Price 3500</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/home_3.jpeg" alt="headphone" width={50} />
              <h3>Washing Machine</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/home_4.jpeg" alt="headphone" />
              <h3>Tv</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/home_5.jpeg" alt="headphone" width={50} />
              <h3>Refrigerator</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/mobile_1.jpeg" alt="facemsk" />
              <h3>Mobile</h3>
              <p>Description of Product 4</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/mobile_2.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/mobile_3.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/mobile_4.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>

            <div className="product-item">
              <img src="/mobile_5.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </section>
        ) : (
          <section className="products">
            <div className="product-item">
              <img src="/electro_1.jpeg" alt="shose" />
              <h3>Laptop</h3>
              <p>Description of Product 1</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/electro_2.jpeg" alt="sunglasses" />
              <h3>DSLR Camera</h3>
              <p>Description of Product 2</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/electro_3.jpeg" alt="headphone" />
              <h3>Soundbar</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/electro_4.jpeg" alt="headphone" />
              <h3>Drone Cam</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/electro_5.jpeg" alt="headphone" />
              <h3>Headphone</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/fashion_1.jpeg" alt="facemsk" />
              <h3>Shoes</h3>
              <p>Description of Product 4</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/fashion_2.jpeg" alt="headphone" />
              <h3>Jeans</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/fashion_3.jpeg" alt="headphone" />
              <h3>Watch</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/fashion_4.jpeg" alt="headphone" />
              <h3>Tshirt</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/fashion_5.jpeg" alt="headphone" />
              <h3>Goggle</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_1.jpeg" alt="headphone" />
              <h3>Bed</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_2.jpeg" alt="headphone" />
              <h3>Table</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_3.jpeg" alt="headphone" />
              <h3>Chair</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_4.jpeg" alt="headphone" />
              <h3>Almira</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/furnaniture_5.jpeg" alt="headphone" />
              <h3>Mirror</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/home_1.jpeg" alt="shose" />
              <h3>Oven</h3>
              <p>Description of Product 1</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/home_2.jpeg" alt="sunglasses" />
              <h3>Juicer</h3>
              <p>Description of Product 2</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/home_3.jpeg" alt="headphone" width={50} />
              <h3>Washing Machine</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/home_4.jpeg" alt="headphone" />
              <h3>Tv</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/home_5.jpeg" alt="headphone" width={50} />
              <h3>Refrigerator</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/mobile_1.jpeg" alt="facemsk" />
              <h3>Mobile</h3>
              <p>Description of Product 4</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/mobile_2.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/mobile_3.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/mobile_4.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>

            <div className="product-item">
              <img src="/mobile_5.jpeg" alt="headphone" />
              <h3>Mobile</h3>
              <p>Description of Product 3</p>
              <button
                className="add-to-cart"
                onClick={() => loginWithRedirect()}>
                Add to Cart
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
