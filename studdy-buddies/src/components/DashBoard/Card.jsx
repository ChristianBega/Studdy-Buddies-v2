import NextButton from "../Buttons/NextButton";
import BackButton from "../Buttons/BackButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Card () {
    return (
        <div className="topicContainer">
            <div className="innerContainer">
                <a>JavaScript</a>
            </div>
            <div className="outerContainer">
                <NextButton />
                <BackButton />
                <FavoriteBorderIcon className="favoriteIcon"/>
            </div>
            <div className="arrowContainer">
                <ArrowBackIcon className="arrow"/>
                <ArrowForwardIcon className="arrow"/>
            </div>
        </div>
    );
}