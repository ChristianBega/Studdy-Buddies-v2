import NextButton from "../Buttons/NextButton"
import BackButton from "../Buttons/BackButton";

export default function Card () {
    return (
        <div className="topicContainer">
            <div className="outerContainer">
                <div className="innerContainer">
                    <a>JavaScript</a>
                </div>
                <NextButton />
                <BackButton />
            </div>
        </div>
    );
}