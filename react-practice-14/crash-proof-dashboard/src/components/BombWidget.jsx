import {useState} from "react";
import useThrowError from "../hooks/useThrowError";

function BombWidget() {
    const [explode, setExplode] = useState(false);
    const throwError = useThrowError();

    // Thrown during render - Caught by the Boundary
    if (explode) throw new Error("Boom! thrown during render.");

    return (
        <div>
            <button onClick={() => setExplode(true)}>
                Crash in render (Caught)
            </button>

            <button 
            onClick={() => {
                throw new Error("Thrown in onClick (not caught by the boundary");
            }}
            >
                Throw on onClick (Not caught)
            </button>

            <button 
            onClick={() => {
                try {
                    throw new Error("Throw in onClick, forward to boundary");
                } catch (err) {
                    throwError(err);
                }
            }}
            >
                Throw in onClick (forwarded, caught)
            </button>
        </div>
    )
}
export default BombWidget;