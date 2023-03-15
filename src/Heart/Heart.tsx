import './Heart.css'
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {addSongToPlaylist, removeSongFromPlaylist, Song} from "../Slices/playlistsSlice";

interface HeartInterface{
    song: Song
}

const Heart = ({song} : HeartInterface) => {
    const dispatch = useDispatch();
    const likedSongs = useSelector((state: State) => state.spotify.customPlaylists[0]);

    const isLiked = (song: Song) => {
        return likedSongs.songs.includes(song);
    }


    return (
        <>
            {isLiked(song) ?
                <img src={"/img/liked.svg"} className={"heart liked"} onClick={() => dispatch(removeSongFromPlaylist(["Liked Songs", song]))} alt={"heart filled"}/> :
                <img src={"/img/like.svg"} className={"heart"} onClick={() => dispatch(addSongToPlaylist(["Liked Songs", song]))} alt={"heart outlined"}/>
            }
        </>
    )
}

export default Heart;