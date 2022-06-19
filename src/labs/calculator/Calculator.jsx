import React, { useState } from "react";
import { Calc } from "./Calc";

export function Calculator() {
    const [input, setInput] = useState("");

    const exp = (() => {
        try {
            return JSON.parse(input);
        } catch {
            return false;
        }
    })()

    const [result, setResult] = useState("");

    return (
        <div>
            <div>
                <textarea value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                {
                    exp === false
                    ? <div>invalid input</div>
                    : <div>
                        {result}
                        <Calc exp={exp} k={setResult} />
                      </div>
                }
            </div>
        </div>
    )
}
