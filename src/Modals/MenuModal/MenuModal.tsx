import './MenuModal.css'
import {List, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../store";
import {addSongToPlaylist} from "../../Slices/playlistsSlice";

interface MenuModalInterface{
    newMenuModal : boolean;
    setNewMenuModal(bool: boolean) : void;

}

const MenuModal = ({newMenuModal, setNewMenuModal} : MenuModalInterface) => {
    const dispatch = useDispatch();
    const customPlaylists = useSelector((state: State) => state.spotify.customPlaylists.filter(({title}) => title !== 'Liked Songs'));
    const menuModal = useSelector((state: State) => state.spotify.menuModal)
    const handleOnCancel = () => {
        setNewMenuModal(false);
    }


    return (
        <Modal
            title={"Add to playlist"}
            open={newMenuModal}
            onCancel={handleOnCancel}
            footer={[]}
            className={"menuModal"}
        >
            <List
                bordered={false}
                className={"playlist-lists"}
                dataSource={customPlaylists}
                renderItem={(item) => (
                    <List.Item className={"playlist"} onClick={() => {
                        dispatch(addSongToPlaylist([item.title, menuModal.song]))
                        setNewMenuModal(false)
                    }}>
                        {item.title}
                    </List.Item>
                )}
            />
        </Modal>
    )
}

export default MenuModal;