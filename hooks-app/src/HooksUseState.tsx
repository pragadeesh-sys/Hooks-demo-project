import { useState } from "react";
import "C://Users/Pragadeesh/Downloads/Hooks/hooks-app/src/HookUseState.css";

function HooksUseState() {

    const [day, setDay] = useState("None");

    return (
        <div className="day-container">

            <h1>
                Today {day}.
            </h1>

            <div className="day-buttons">

                <button onClick={() => setDay("Sunday")}>
                    Sunday
                </button>

                <button onClick={() => setDay("Monday")}>
                    Monday
                </button>

                <button onClick={() => setDay("Tuesday")}>
                    Tuesday
                </button>

                <button onClick={() => setDay("Wednesday")}>
                    Wednesday
                </button>

                <button onClick={() => setDay("Thursday")}>
                    Thursday
                </button>

                <button onClick={() => setDay("Friday")}>
                    Friday
                </button>

                <button onClick={() => setDay("Saturday")}>
                    Saturday
                </button>

            </div>

        </div>
    );
}

export default HooksUseState;