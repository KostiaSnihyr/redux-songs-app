import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Despacito', author: 'Luis Fonsi' },
		{ title: 'Shape of You', author: 'Ed Sheeran' },
		{ title: 'See You Again', author: 'Wiz Khalifa ' },
		{ title: 'Uptown Funk', author: 'Mark Ronson' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
