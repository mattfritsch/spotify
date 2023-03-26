import './Player.css'
import {Layout} from "antd";
import {useSelector} from "react-redux";
import {State} from "../store";
import Heart from "../Heart";

const {Footer} = Layout;

const Player = () => {
    const playingSong = useSelector((state: State) => state.spotify.playingSong);

    const linearGradient = (color1: string, color2: string) => {
        return {
            background: "linear-gradient(" + color1 + "," + color2 + ")"
        };
    }

    const secToMinSec = (sec:number) => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec - minutes * 60;
        return minutes + ':' + seconds;
    }

    return (
        <>
            <Footer className={"player"} style={{background: '#181818'}}>
                <div className={"playing-song-section"}>
                    <div className={"song-playlist-cover"} style={linearGradient(playingSong.playlist.firstColor, playingSong.playlist.secondColor)}>
                        <div className={"text-playlist-cover"}>
                            <p className={"text-playlist-cover-title"}>{playingSong.playlist.title}</p>
                        </div>
                    </div>
                    <div className={"song-information"}>
                        <p className={"song-title"}>{playingSong.song.title}</p>
                        <p className={"song-subtitle"}>{playingSong.song.artist}</p>
                    </div>
                    <Heart song={playingSong.song}/>
                </div>
                <div className={"player-section"}>
                    <div className={"buttons-section"}>
                        <img src={"img/player/center/random.svg"} className={"player-button"} alt={"random logo"}/>
                        <img src={"img/player/center/backward.svg"} className={"player-button"} alt={"backward logo"}/>
                        <img src={"img/player/center/start.svg"} className={"player-button"} alt={"start logo"}/>
                        <img src={"img/player/center/forward.svg"} className={"player-button"} alt={"forward logo"}/>
                        <img src={"img/player/center/replay.svg"} className={"player-button"} alt={"replay logo"}/>
                    </div>
                    <div className={"progress-bar-section"}>
                        <p className={"text-progress-bar"}>0:00</p>
                        <div className={"progress-bar"}></div>
                        <p className={"text-progress-bar"}>{secToMinSec(playingSong.song.duration)}</p>
                    </div>
                </div>
                <div className={"options-section"}>
                    <img src={"img/player/right/lyrics.svg"} className={"options-button"} alt={"lyrics logo"}/>
                    <img src={"img/player/right/queue.svg"} className={"options-button"} alt={"queue logo"}/>
                    <img src={"img/player/right/laptop.svg"} className={"options-button"} alt={"laptop logo"}/>
                    <img src={"img/player/right/speaker.svg"} className={"options-button"} alt={"speaker logo"}/>
                    <div className={"volume-bar"}></div>
                    <img src={"img/player/right/resize.svg"} className={"options-button"} alt={"resize logo"}/>
                </div>
            </Footer>
        </>
    )
}

export default Player;