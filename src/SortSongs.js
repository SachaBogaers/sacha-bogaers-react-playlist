import React from 'react'

function SortSongs(props) {
	return (
		<div className="SortSongs">
			<label htmlFor="sort">Sort songs: </label>
			<select
				className="sort"
				name="sort"
				value={props.sort}
				onChange={props.sortArray}>
				<option value="oldest_first">First added first</option>
				<option value="newest_first">Latest added first</option>
				<option value="title_az">Title (a-z)</option>
				<option value="title_za">Title (z-a)</option>
				<option value="artist_az">Artist (a-z)</option>
				<option value="artist_za">Artist (z-a</option>
				<option value="rating_lowest">Rating (lowest first)</option>
				<option value="rating_highest">Rating highest first)</option>
			</select>
		</div>

	);
}

export default SortSongs;
