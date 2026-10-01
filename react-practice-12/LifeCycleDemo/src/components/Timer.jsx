import { useEffect, useState } from "react";

function Timer({ log }) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Mounting Phase:
        console.log("Timer Mounting...");
        log("Mounting Phase: Timer screen per aagaya");
        const id = setInterval(() => setSeconds((s) => s + 1), 1000);

        // Unmounting Phase:
        return () => {
            console.log("Timer Unmounting...");
            clearInterval(id);
            log("Unmounting Phase: Timer hata, interval clear ho gaya");
        };
    }, []);

    // Updating Phase: 
    useEffect(() => {
        if(seconds > 0 && seconds % 10 === 0) {
            console.log("Updating Phase");
            log(`Update: seconds ab ${seconds} hai.`);
        }
        // return () => {
        //     console.log("Unmounting during Updating phase...");
        // };
    }, [seconds]);

    return (
        <>
            <h2>Timer Component</h2>
            <p className="text-3xl font-bold">{seconds}s</p>
        </>
    );
}
export default Timer;