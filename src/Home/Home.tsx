import Left from "../Left";
import PlaylistCard from "../Cards/PlaylistCard";
import './Home.css'
import {Layout} from "antd";
import TopCard from "../Cards/TopCard";
import Player from "../Player";
import {useSelector} from "react-redux";
import {State} from "../store";

const {Content} = Layout;


const Home = () => {
    const topPlaylists = useSelector((state: State) => state.spotify.topPlaylists);
    const customPlaylists = useSelector((state: State) => state.spotify.customPlaylists);
    return (
        <Layout className={"homescreen"}>
            <Layout className={"homescreen"}>
                <Left/>
                <Content className={"playlists-container"}>
                    <h1 className={"container-title"}>Your playlists</h1>
                    <div className={"container"}>
                        <div className={"playlist-card"}>
                            <img src={"img/left/like.png"} className={"playlist-card-cover"} alt={"playlist-card-cover"}/>
                            <p className={"playlist-card-title"}>Liked Songs</p>
                        </div>
                        {
                            customPlaylists.map(customPlaylist  => {
                                return <PlaylistCard
                                    title={customPlaylist.title}
                                    firstColor={customPlaylist.firstColor}
                                    secondColor={customPlaylist.secondColor}
                                />
                            })
                        }
                    </div>

                    <h1 className={"container-title"}>TOP 50</h1>
                    <div className={"container"}>
                        {
                            topPlaylists.map(topPlaylist => {
                                return <TopCard
                                    title={topPlaylist.title}
                                    firstColor={topPlaylist.firstColor}
                                    secondColor={topPlaylist.secondColor}
                                    year={topPlaylist.year}
                                />
                            })
                        }
                    </div>
                </Content>
            </Layout>
            <Player/>
        </Layout>
    );
}
export default Home;
