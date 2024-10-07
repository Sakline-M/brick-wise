import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const percentage = 50;

  return (
    <div className="size-16">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "green", // Circle color
          textColor: "black", // Text color
          textSize: "28px", // Text size
        })}
      />
    </div>
  );
};

export default ProgressBar;
