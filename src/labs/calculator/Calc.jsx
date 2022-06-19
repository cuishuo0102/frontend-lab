import React, { useState } from "react";
import { Plus } from "./operators/Plus";

export function Calc({ exp, k }) {
    const [r, setR] = useState(false);

    console.log(exp);

    if (r !== false) {
        k(r);
    }

    if (typeof exp === "number") {
        k(exp);
        return null;
    } else {
        switch(exp.type) {
            case "+":
                 return <Plus e1={exp.e1} e2={exp.e2} k={
                    (p) => {
                        setR(p);
                    }}/>
            default:
                return "unknown exp: " + JSON.stringify(exp);
        }
    }    
}
