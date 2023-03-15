import PlaylistCard from "../Cards/PlaylistCard";
import './Home.css'
import TopCard from "../Cards/TopCard";
import {useSelector} from "react-redux";
import {State} from "../store";
import {Link} from "react-router-dom";


const Home = () => {
    const topPlaylists = useSelector((state: State) => state.spotify.topPlaylists);
    const customPlaylists = useSelector((state: State) => state.spotify.customPlaylists);
    return (
        <>
            <h1 className={"container-title"}>Your playlists</h1>
            <div className={"container"}>
                {customPlaylists.map(customPlaylist => {
                    if(customPlaylist.title === 'Liked Songs'){
                        return (
                            <Link to={"/playlist/Liked Songs"}>
                                <div className={"playlist-card"}>
                                    <img src={"img/left/like.png"} className={"playlist-card-cover"} alt={"playlist-card-cover"}/>
                                    <p className={"playlist-card-title"}>Liked Songs</p>
                                </div>
                            </Link>
                        );
                    }
                    else {
                        return <PlaylistCard
                            title={customPlaylist.title}
                            firstColor={customPlaylist.firstColor}
                            secondColor={customPlaylist.secondColor}/>;
                    }
                })}
            </div>
            <h1 className={"container-title"}>TOP 50</h1>
            <div className={"container"}>
                {topPlaylists.map(topPlaylist => {
                    return <TopCard
                        title={topPlaylist.title}
                        firstColor={topPlaylist.firstColor}
                        secondColor={topPlaylist.secondColor}
                        year={topPlaylist.year}/>;
                })}
            </div>
        </>
    );
}
export default Home;
