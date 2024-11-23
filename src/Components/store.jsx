
 import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  genre: '',
   searchResults: [],
   currentSong: null,  
  showRegisterPopup: true,
  isPlaying: false,    
 };

 const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.showRegisterPopup = false;
    },
     setGenre: (state, action) => {
             state.genre = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
   },
   toggleRegisterPopUp: (state) => {
     state.showRegisterPopup = !state.showRegisterPopup;
    },
    
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    
   nextSong: (state, action) => {
      state.currentSong = action.payload;  
    },
    
    previousSong: (state, action) => {
      state.currentSong = action.payload;  
     },
  }, });


 export const { 
   setUser, 
  setGenre, 
   setSearchResults, 
  setCurrentSong, 
  toggleRegisterPopUp,
  togglePlayPause,
     nextSong,
  previousSong 
 } = appSlice.actions;


 export const store = configureStore({
   reducer: {
     app: appSlice.reducer,
  },
 });
