import React, { useState } from "react";

export function Counter() {
    const [n, setN] = useState(0);

    return (
        <div>
            <div>{n}</div>
            <button onClick={() => setN((n) => n - 1)}>-</button>
            <button onClick={() => setN((n) => n + 1)}>+</button>
        </div>
    );
}
