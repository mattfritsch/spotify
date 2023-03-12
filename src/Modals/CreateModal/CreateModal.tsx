import './CreateModal.css';
import {Button, Input, Modal} from "antd";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addPlaylist} from "../../Slices/playlistsSlice";

interface CreateModalInterface {
    newCreateModal : boolean;
    setNewCreateModal(bool: boolean) : void;
}

const CreateModal = ({newCreateModal, setNewCreateModal}: CreateModalInterface) => {
    const dispatch = useDispatch();
    const [playlistName, setPlaylistName] = useState<string>('');

    const handleOnPlaylistNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPlaylistName(e.target.value);
    }


    const handleOnSave = () => {
        dispatch(addPlaylist(playlistName));
        setPlaylistName('');
        setNewCreateModal(false);
    }

    const handleOnCancel = () => {
        setNewCreateModal(false)
        setPlaylistName('');
    }

    return (
        <Modal
            title="Create playlist"
            okText="Create"
            open={newCreateModal}
            onCancel={handleOnCancel}
            footer={[
                <Button onClick={handleOnSave} disabled={!playlistName.length} className={"button"}>Create</Button>
            ]}
            className={"createModal"}
        >
            <Input value={playlistName} onChange={handleOnPlaylistNameChange} className={"input"}></Input>
        </Modal>
    )
}

export default CreateModal;