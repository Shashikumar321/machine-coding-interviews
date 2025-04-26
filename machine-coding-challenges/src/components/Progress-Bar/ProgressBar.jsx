import ProgressBarContainer from "./ProgressBarContainer";

const ProgressBar = () => {

    const bars = [ 10, 30, 50, 70, 90, 100];

    return (
        <div className="progress-bar-parent-container">
            {
                bars.map((item) => <ProgressBarContainer key={item} progress={item}/>)
            }
            
        </div>
    )
}

export default ProgressBar;