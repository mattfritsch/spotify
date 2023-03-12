import './TopCard.css'

interface TopPlaylist {
    title: string,
    firstColor: string,
    secondColor: string,
    year: number
}

const linearGradient = (color1: string, color2: string) => {
    return {
        background: "linear-gradient(" + color1 + "," + color2 + ")"
    };
}

const TopCard = ({title, firstColor, secondColor, year}: TopPlaylist) => {
    return (
        <>
            <div className={"top-card"}>
                <div className={"top-card-cover"} style={linearGradient(firstColor, secondColor)}>
                    <div className={"top-card-cover-text"}>
                        <p className={"top-card-cover-title"}>{title}</p>
                        <p className={"top-card-cover-title"}>{year}</p>
                    </div>
                </div>
                <p className={"top-card-title"}>{title}</p>
                <p className={"top-card-subtitle"}>{year}</p>
            </div>
        </>
    )
}

export default TopCard;