import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ListItems from "./components/ListItems";
import CartData from "./services/CartData";
import "./App.css";

function App() {
    const [dataCart, setDataCart] = useState(CartData);

    function handleClickInCremate(id) {
        const cartData = dataCart.map((item) => {
            if (item.id == id) {
                item.amount++;
            }
            return item;
        });
        setDataCart(cartData);
    }
    function handleClearDataCart() {
        setDataCart([]);
    }
    function handleClickDecrease(id) {
        const cartData = dataCart.map((item) => {
            if (item.id == id) {
                if (item.amount > 0) {
                    item.amount--;
                }
            }
            return item;
        });
        setDataCart(cartData);
    }

    function handleClickRemove(id) {
        const cartData = dataCart.filter((item) => {
            if (item.id != id) {
                return true;
            }
        });
        setDataCart(cartData);
    }

    function totalPrice(data) {
        return data.reduce((prev, currentPrice) => {
            return prev + currentPrice.price * currentPrice.amount;
        }, 0);
    }
    function countCart(data) {
        return data.reduce((prev, currentPrice) => {
            return prev + currentPrice.amount;
        }, 0);
    }

    return (
        <main>
            <NavBar countCart={countCart(dataCart)} />
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                </header>

                <ListItems
                    items={dataCart}
                    onClickInCremate={handleClickInCremate}
                    onClickDecrease={handleClickDecrease}
                    onClickRemove={handleClickRemove}
                />

                <Footer
                    onClickClearCart={handleClearDataCart}
                    total={totalPrice(dataCart)}
                />
            </section>
        </main>
    );
}

export default App;
