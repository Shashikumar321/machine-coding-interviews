import { useEffect, useState } from "react";

const ProgressBarContainer = ({progress}) => {

    const [animProgress, setAnimProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setAnimProgress(progress), 100);

        return () => { clearTimeout(timer)}
    }, [progress])

    return (
        <div className="progress-bar-outer">
            <div className="progress-bar-inner" style={{transform : `translateX(${animProgress - 100}%)`}}>{animProgress}%</div>
        </div>
    )
}

export default ProgressBarContainer;