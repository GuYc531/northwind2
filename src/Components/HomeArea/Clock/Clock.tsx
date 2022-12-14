import { useEffect, useState } from "react";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import "./Clock.css";

function Clock(): JSX.Element {
    
    const [time, setTime] = useState<string>("time..");

    useEffect(() => {
        const timerId = setInterval(() =>{
            const now = new Date();
            const time = now.toLocaleTimeString();
            setTime(time);
            console.log("t")
        }, 1000);

        return () => clearInterval(timerId);

    }, []);

    return (
        <div className="Clock">
			<span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}

export default Clock;
