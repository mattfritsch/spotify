import './Player.css'
import {Layout} from "antd";
import {HeartOutlined} from "@ant-design/icons";

const {Footer} = Layout;

const Player = () => {
    return (
        <>
            <Footer className={"player"} style={{background: '#181818'}}>
                <div className={"playing-song-section"}>
                    <div className={"song-playlist-cover"}>
                        <div className={"text-playlist-cover"}>
                            <p className={"text-playlist-cover-title"}>Name of playlist</p>
                            <p className={"text-playlist-cover-title"}>juste top50</p>
                        </div>
                    </div>
                    <div className={"song-information"}>
                        <p className={"song-title"}>Name of playlist</p>
                        <p className={"song-subtitle"}>juste top50</p>
                    </div>
                    <HeartOutlined className={"heart"}/>
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
                        <p className={"text-progress-bar"}>2:42</p>
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