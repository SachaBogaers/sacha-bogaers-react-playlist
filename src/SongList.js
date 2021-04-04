import React from 'react'
import Song from './Song'

function SongList(props) {
	return (
		<table style={{ width: "100%" }}>
			<thead>
				<tr className="song-header">
					<th className="song-row__item">Title</th>
					<th className="song-row__item">Artist</th>
					<th className="song-row__item">Genre</th>
					<th className="song-row__item">Rating</th>
				</tr>
			</thead>
			<tbody>
				{props.songs.map(song => {
					if (props.genreFilter.includes(song.genre) && props.ratingFilter.includes(song.rating)) {
						return (<Song
							key={song.id}
							id={song.id}
							title={song.title}
							artist={song.artist}
							genre={song.genre}
							rating={song.rating}
						/>)
					}
					return;
				})}
			</tbody>
		</table>
	);
}

export default SongList;