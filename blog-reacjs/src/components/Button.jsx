import React from "react";

export default function Button() {
    const handleBtn = () => {
        console.log("click me");
    };
    return (
        <div>
            <button onClick={handleBtn}>Click Me</button>
        </div>
    );
}
