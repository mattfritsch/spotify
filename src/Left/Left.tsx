import './Left.css';
import {Layout, Menu} from "antd";
import {useState} from "react";
import CreateModal from "../Modals/CreateModal";
import {useSelector} from "react-redux";
import {State} from "../store";

const { Sider } = Layout;
const Left = () => {
    const [newCreateModal, setNewCreateModal] = useState(false);
    const customPlaylists = useSelector((state: State) => state.spotify.customPlaylists);

    const customPlaylistItems = customPlaylists.map(({title}, index) => ({
        key: 4 + index,
        label: <p className={"label"}>{title}</p>,
        style: {height: '25px'}
    }));

    const showCreateModal = () => {
        setNewCreateModal(true);
    }

    return (
        <><Sider theme={"light"} width={300} className={"left-section"}>
            <img src={"img/left/spotify_logo.png"} alt={"spotify logo"} className={"spotify-logo"}/>
            <Menu
                id={"linkMenu"}
                theme={"light"}
                mode={"inline"}
                className="link-menu-section"
                items={[
                    {
                        key: '1',
                        icon: <img src={"img/left/home.png"} className={"left-logo"} alt={"home logo"}/>,
                        label: <p className={"label"}>Home</p>,
                        className: "home-button",
                    },
                    {
                        key: '2',
                        icon: <img src={"img/left/add.png"} className={"left-logo"} alt={"add logo"}/>,
                        label: <p className={"label"}>Create Playlists</p>,
                        className: "left-button",
                        onClick:  () => showCreateModal()
                    },
                    {
                        key: '3',
                        icon: <img src={"img/left/like.png"} className={"left-logo"} alt={"like logo"}/>,
                        label: <p className={"label"}>Liked Songs</p>,
                        className: "left-button",
                    }
                ]}
            />
            <Menu
                id={'playlistsMenu'}
                theme={"light"}
                mode={"inline"}
                className="playlists-menu-section"
                items={customPlaylistItems}
            />
        </Sider>
        <CreateModal newCreateModal={newCreateModal} setNewCreateModal={setNewCreateModal}/>
        </>
    );
}
export default Left;
