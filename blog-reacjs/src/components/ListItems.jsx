import React from "react";
import ItemCart from "./ItemCart";

export default function ListItems(props) {
    const { items, onClickRemove, onClickDecrease, onClickInCremate } = props;
    const ListCarts = items.map((item) => {
        return (
            <ItemCart
                item={item}
                onClickDecrease={onClickDecrease}
                onClickInCremate={onClickInCremate}
                onClickRemove={onClickRemove}
                key={item.id}
            />
        );
    });
    return <div>{ListCarts}</div>;
}
