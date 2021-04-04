import React from 'react'


function Song(props) {
	return (
		<tr className="song">
			<td className="song-row__item">{props.title} ({props.id})</td>
			<td className="song-row__item">{props.artist}</td>
			<td className="song-row__item">{props.genre}</td>
			<td className="song-row__item">{props.rating}</td>
		</tr>
	);
}

export default Song;
