import './Playlist.css';
import {useParams} from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";
import {Input, Select, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {changePlayingSong, showMenuModal, Song} from "../Slices/playlistsSlice";
import React, {useState} from "react";
import MenuModal from "../Modals/MenuModal";
import Heart from "../Heart";
const Paylist = () => {
    const dispatch = useDispatch();
    const [newSort, setNewSort] = useState<string>()
    const [newSearch, setNewSearch] = useState<string>()
    const [newMenuModal, setNewMenuModal] = useState(false)

    let {playlistTitle} = useParams();

    const playlist = useSelector((state: State) => {
        if(playlistTitle!.slice(0, 6) === 'TOP 50'){
            return state.spotify.topPlaylists.filter(({year}) => year === parseInt(playlistTitle!.slice(6,10)))
        }
        else {
            return state.spotify.customPlaylists.filter(({title}) => title === playlistTitle)
        }
    })

    const playlistSelected = playlist[0];
    const songsPlaylistSelected = playlistSelected.songs

    const linearGradient = (deg: number, color1: string, color2: string) => {
        return {
            background: "linear-gradient(" + deg + "deg," + color1 + "," + color2 + ")"
        };
    }

    const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSearch(e.target.value);
    }

    const searchSongs = () => {
        let result;
        if(newSearch !== undefined){
             result = songsPlaylistSelected.filter((obj) => JSON.stringify(obj)
                .toLowerCase()
                .indexOf(newSearch.toLowerCase()) !== -1
            );
        }
        else {
            result = songsPlaylistSelected
        }
        console.log(result)
        return result
    }

    const handleOnSortChange = (newSort: string) => {
        setNewSort(newSort);
    }

    const sortSongs = (sort: string) => {
        let sortedSongs = [...songsPlaylistSelected]
        switch (sort) {
            case 'title':
                sortedSongs.sort(function compare(a, b) {
                    if (a.title < b.title)
                        return -1;
                    if (a.title > b.title)
                        return 1;
                    return 0;
                });
                break;
            case 'year':
                sortedSongs.sort(function compare(a, b) {
                    if (a.year < b.year)
                        return -1;
                    if (a.year > b.year)
                        return 1;
                    return 0;
                });
                break;
            case 'genre':
                sortedSongs.sort(function compare(a, b) {
                    if (a.genre < b.genre)
                        return -1;
                    if (a.genre > b.genre)
                        return 1;
                    return 0;
                });
                break;
            case 'popularity':
                sortedSongs.sort(function compare(a, b) {
                    if (a.popularity < b.popularity)
                        return -1;
                    if (a.popularity > b.popularity)
                        return 1;
                    return 0;
                });
                break;
            case 'duration':
                sortedSongs.sort(function compare(a, b) {
                    if (a.duration < b.duration)
                        return -1;
                    if (a.duration > b.duration)
                        return 1;
                    return 0;
                });
                break;
        }
        return sortedSongs;
    }

    const songs = (newSort: string | undefined) => {
        let result = searchSongs();
        if(newSort !== undefined){
            result = sortSongs(newSort)
        }
        return result
    }

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            render: (item: any, record: Song, id: number) => <div>{id + 1}</div>,
            className: 'table-text index'
        },
        {
            title: '',
            dataIndex: 'like',
            key: 'like',
            render: (item: any, record: Song) => <Heart song={record}/>,
            className: 'table-text like'
        },
        {
            title: 'TITLE',
            dataIndex: ['title', 'artist'],
            key: 'title',
            render: (text: string, row: any) => <p>{row['title']} - {row['artist']}</p>,
            className: 'table-text title'
        },
        {
            title: 'YEAR',
            dataIndex: 'year',
            key: 'year',
            className: 'table-text year'
        },
        {
            title: 'GENRE',
            dataIndex: 'genre',
            key: 'genre',
            className: 'table-text genre'
        },
        {
            title: 'POPULARITY',
            dataIndex: 'popularity',
            key: 'popularity',
            className: 'table-text popularity'
        },
        {
            title: 'DURATION',
            dataIndex: 'duration',
            key: 'duration',
            className: 'table-text duration'
        },
    ]

    return(
        <>
            <div>
                <div className={"header-section"}
                     style={linearGradient(135, playlistSelected.firstColor, playlistSelected.secondColor)}>
                    {
                        (playlistTitle === "Liked Songs") ?
                        <img src={"/img/playlist/liked_songs.svg"} className={"playlist-cover"} alt={"playlist cover"}/> :
                            <div className={"playlist-cover"}
                                 style={linearGradient(180, playlistSelected.firstColor, playlistSelected.secondColor)}>
                            </div>
                    }
                    <h1 className={"playlist-title"}>{playlistSelected.title}</h1>
                </div>
                <div className={"search-sorts-section"}>
                    <Input
                        placeholder={"Artists, songs or podcasts"}
                        prefix={<SearchOutlined/>}
                        className={"input-search"}
                        value={newSearch}
                        onChange={handleOnSearchChange}/>
                    <Select
                        className={"select-sorts"}
                        value={newSort}
                        onChange={handleOnSortChange}
                        placeholder={"Custom order"}
                        options={[
                            {value: 'title', label: 'Title order'},
                            {value: 'year', label: 'Year order'},
                            {value: 'genre', label: 'Genre order'},
                            {value: 'popularity', label: 'Popularity order'},
                            {value: 'duration', label: 'Duration order'},
                        ]}/>
                </div>
                <div className={"songs-table"}>
                    <Table
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    dispatch(changePlayingSong([playlistSelected, record]))
                                },
                                onContextMenu: (e) => {
                                    e.preventDefault();
                                    setNewMenuModal(true)
                                    dispatch(showMenuModal(record))
                                }
                            };
                        }}
                        dataSource={songs(newSort)}
                        columns={columns}
                        pagination={false}
                        bordered={false}/>
                </div>
            </div>
            <MenuModal newMenuModal={newMenuModal} setNewMenuModal={setNewMenuModal}/>
        </>
    );
}
export default Paylist;
