// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   songs: [],
//   currentSong: null,
//   searchResults: [],
//   isPlaying: false,
//   currentSongIndex: 0,
// };

// const MusicSlice = createSlice({
//   name: 'music',
//   initialState,
//   reducers: {
//     setSongs: (state, action) => {
//       state.songs = action.payload;
//     },
//     setCurrentSong: (state, action) => {
//       state.currentSong = action.payload;
//       state.isPlaying = true;
//     },
//     playPause: (state) => {
//       state.isPlaying = !state.isPlaying;
//     },
//     nextSong: (state) => {
//       const nextIndex = (state.currentSongIndex + 1) % state.songs.length;
//       state.currentSongIndex = nextIndex;
//       state.currentSong = state.songs[nextIndex];
//       state.isPlaying = true;
//     },
//     previousSong: (state) => {
//       const prevIndex =
//         (state.currentSongIndex - 1 + state.songs.length) % state.songs.length;
//       state.currentSongIndex = prevIndex;
//       state.currentSong = state.songs[prevIndex];
//       state.isPlaying = true;
//     },
//   },
// });

// export const { setSongs, setCurrentSong, playPause, nextSong, previousSong } = MusicSlice.actions;
// export default MusicSlice.reducer;

