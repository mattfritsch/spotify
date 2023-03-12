import {createSlice} from "@reduxjs/toolkit";
import data from '../static/data.json'

export interface Playlist {
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
   title: string
}

export interface Spotify {
   customPlaylists: Playlist[],
   topPlaylists: Playlist[],
   playingSong: PlayingSong
}
const randomColor = () => {
   let letters: string = '0123456789ABCDEF';
   let color: string = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
const setTopPlaylist = () => {
   const songs = data;
   let topPlaylists = []
   for (let i = 2010; i < 2020; i++) {
      const playlist: Playlist = {
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
   console.log(topPlaylists)
   return topPlaylists;
}

export const playlistsSlice = createSlice({
   name: 'playlists',
   initialState: {
      customPlaylists: [],
      topPlaylists: setTopPlaylist(),
      songs: data,
      createModal: false,
   },
   reducers: {
      addPlaylist: (
          state: { customPlaylists: Playlist[] },
          action: { payload: string }
      ) => {
         const newPlaylist = {
            title: action.payload,
            songs: [],
            firstColor: randomColor(),
            secondColor: randomColor(),
            year: 2023
         };

         state.customPlaylists = [...state.customPlaylists, newPlaylist];
      },
   }
});

export const {
   addPlaylist,
} = playlistsSlice.actions

export default playlistsSlice.reducer;