import {createSlice} from "@reduxjs/toolkit";
import data from '../static/data.json'

export interface Playlist {
   id: string,
   title: string,
   songs: Song[],
   firstColor: string,
   secondColor: string,
   year: number
}

export interface Song {
   title: string,
   artist: string,
   genre: string,
   year: number,
   duration: number,
   popularity: number
}

export interface PlayingSong {
   playlist: Playlist,
   song: Song
}

export interface MenuModal{
   song: Song
}

export interface Spotify {
   customPlaylists: Playlist[],
   topPlaylists: Playlist[],
   playingSong: PlayingSong,
   menuModal: MenuModal
}
const randomColor = () => {
   let letters: string = '0123456789ABCDEF';
   let color: string = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const randomId = () => (Math.random() + 1).toString(36).substring(7);
const setTopPlaylist = () => {
   const songs = data;
   let topPlaylists = []
   for (let i = 2010; i < 2020; i++) {
      const playlist: Playlist = {
         id: randomId(),
         title: 'TOP 50',
         songs: [],
         firstColor: randomColor(),
         secondColor: randomColor(),
         year: i
      };

      let result = songs.filter(songs => songs.year === i);
      result.sort((a, b) => b.popularity - a.popularity);
      playlist.songs = result.slice(0, 50);

      topPlaylists.push(playlist)
   }
   return topPlaylists.reverse();
}

export const playlistsSlice = createSlice({
   name: 'playlists',
   initialState: {
      customPlaylists: [
          {
             id: randomId(),
             title: "Liked Songs",
             songs: [],
             firstColor: "#4000F4",
             secondColor: "#C0ECD7",
             year: 2023
          },
      ],
      topPlaylists: setTopPlaylist(),
      songs: data,
      menuModal: {
        song: {
            title: 'no song',
            artist: 'no artist',
            genre: '',
            year: 0,
            duration: 0,
            popularity: 0
        }
      },
      playingSong: {
         playlist: {
            id: randomId(),
            title: '',
            songs: [],
            firstColor: randomColor(),
            secondColor: randomColor(),
            year: 2023
         },
         song: {
            title: 'no song',
            artist: 'no artist',
            genre: '',
            year: 0,
            duration: 0,
            popularity: 0
         }
      }
   },
   reducers: {
      addPlaylist: (
          state: { customPlaylists: Playlist[] },
          action: { payload: string }
      ) => {
         const newPlaylist = {
            id: randomId(),
            title: action.payload,
            songs: [],
            firstColor: randomColor(),
            secondColor: randomColor(),
            year: 2023
         };

         state.customPlaylists = [...state.customPlaylists, newPlaylist];
      },
      showMenuModal: (
          state: { menuModal: MenuModal },
          action: { payload: Song }
      ) => {
         state.menuModal.song = action.payload;
      },
      changePlayingSong: (
          state: { playingSong: PlayingSong },
          action: { payload: [Playlist, Song] }
      ) => {
         state.playingSong.playlist = action.payload[0];
         state.playingSong.song = action.payload[1];
      },
      addSongToPlaylist: (
          state: { customPlaylists: Playlist[] },
          action: { payload: [string, Song] }
      ) => {
         const customPlaylist = state.customPlaylists.find(customPlaylist => customPlaylist.title === action.payload[0]);
         if(customPlaylist){
            customPlaylist.songs.push(action.payload[1])
         }
      },
      removeSongFromPlaylist: (
          state: { customPlaylists: Playlist[] },
          action: { payload: [string, Song] }
      ) => {
         const customPlaylist = state.customPlaylists.find(customPlaylist => customPlaylist.title === action.payload[0]);
         if(customPlaylist){
            customPlaylist.songs = customPlaylist.songs.filter(song => song.title !== action.payload[1].title)
         }
      }
   }
});

export const {
   addPlaylist,
   showMenuModal,
   changePlayingSong,
   addSongToPlaylist,
   removeSongFromPlaylist
} = playlistsSlice.actions

export default playlistsSlice.reducer;