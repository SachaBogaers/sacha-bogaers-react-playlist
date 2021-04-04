import React from 'react'
import Song from './Song'

function SongList(props) {
	return (
		<tbody>
			{props.songs.map(song => {
				return (<Song
					key={song.title}
					title={song.title}
					artist={song.artist}
					genre={song.genre}
					rating={song.rating}
				/>)
			})}
		</tbody>
	);
}

export default SongList;