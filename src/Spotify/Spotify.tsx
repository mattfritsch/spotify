import './Spotify.css';
import {Layout} from "antd";
import Left from "../Left";
import Playlist from "../Playlist";
import Player from "../Player";
import Home from "../Home";
import {useParams} from "react-router-dom";

const {Content} = Layout;

const Spotify = () => {

    const {playlistTitle} = useParams();


    return (
        <Layout className={"homescreen"}>
            <Layout className={"homescreen"}>
                <Left/>
                { playlistTitle ? (
                    <Content className={"playlists-container"}>
                        <Playlist/>
                    </Content>
                ) : (
                    <Content className={"playlists-container"}>
                        <Home />
                    </Content>
                ) }
            </Layout>
            <Player/>
        </Layout>
    );
}

export default Spotify;