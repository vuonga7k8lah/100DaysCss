import React from "react";

export default function Footer(props) {
    const { total, onClickClearCart } = props;
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>{total}</span>
                </h4>
            </div>
            <button
                onClick={() => onClickClearCart()}
                className="btn clear-btn"
            >
                clear cart
            </button>
        </footer>
    );
}
