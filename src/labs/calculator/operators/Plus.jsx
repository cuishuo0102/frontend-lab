import React, { useState } from "react";
import { Calc } from "../Calc";

export function Plus({ e1, e2, k }) {
    const [r1, setR1] = useState(false);
    const [r2, setR2] = useState(false);

    const onChange = () => {
        if (r1 !== false && r2 !== false) {
            k(r1 + r2);
        }
    }

    console.log(e1, e2);

    return <>
        <Calc exp={e1} k={(c) => {
            setR1(c);
            onChange();
        }} />

        <Calc exp={e2} k={(c) => {
            setR2(c);
            onChange();
        }} />
    </>
}
