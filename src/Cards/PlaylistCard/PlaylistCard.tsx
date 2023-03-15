import './PlaylistCard.css';
import {Link} from "react-router-dom";

interface PlaylistCardInterface {
    title: string,
    firstColor: string,
    secondColor: string;
}

const linearGradient = (color1: string, color2: string) => {
    return {
        background: "linear-gradient(" + color1 + "," + color2 + ")"
    };
}

const PlaylistCard = ({title, firstColor, secondColor}: PlaylistCardInterface) => {
    return (
        <>
            <Link to={"/playlist/" + title}>
                <div className={"playlist-card"}>
                    <div className={"playlist-card-cover"} style={linearGradient(firstColor, secondColor)}/>
                    <p className={"playlist-card-title"}>{title}</p>
                </div>
            </Link>
        </>
    );
}

export default PlaylistCard;