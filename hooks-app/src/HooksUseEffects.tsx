
import { useEffect, useState } from "react";
import "./HooksUseEffect.css";

function HooksUseEffect() {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        // Cleanup timer
        return () => {
            clearInterval(timer);
        };

    }, []);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div className="effect-container">

            <div className="effect-card">

                <h1>useEffect Hook</h1>

                <p className="description">
                    Count automatically increases every second.
                </p>

                <div className="count-box">
                    <span>Count</span>
                    <h2>{count}</h2>
                </div>

                <div className="button-group">

                    <button
                        className="reset-btn"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>

                </div>

                <p className="status">
                    Current Count: <strong>{count}</strong>
                </p>

            </div>

        </div>
    );
}

export default HooksUseEffect;
