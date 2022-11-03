import React from "react";

export default function ItemCart(props) {
    const { item, onClickRemove, onClickDecrease, onClickInCremate } = props;

    function handleRemoveItem(id) {
        onClickRemove(id);
    }
    function handleInCremate(id) {
        onClickInCremate(id);
    }
    function handleDecrease(id) {
        onClickDecrease(id);
    }
    return (
        <div>
            <article className="cart-item">
                <img src={item.img} alt="" />
                <div>
                    <h4>{item.title}</h4>
                    <h4 className="item-price">{item.price}</h4>
                    <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="remove-btn"
                    >
                        remove
                    </button>
                </div>
                <div>
                    <button
                        className="amount-btn"
                        onClick={() => handleInCremate(item.id)}
                    >
                        <svg
                            style={{ width: "20px", border: "2px solid black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                        </svg>
                    </button>

                    <p className="amount">{item.amount}</p>

                    <button
                        className="amount-btn"
                        onClick={() => handleDecrease(item.id)}
                    >
                        <svg
                            style={{ width: "20px", border: "2px solid black" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                </div>
            </article>
        </div>
    );
}
