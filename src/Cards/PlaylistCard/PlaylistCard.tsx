import './PlaylistCard.css';

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
            <div className={"playlist-card"}>
                <div className={"playlist-card-cover"} style={linearGradient(firstColor, secondColor)}/>
                <p className={"playlist-card-title"}>{title}</p>
            </div>
        </>
    );
}

export default PlaylistCard;