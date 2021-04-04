import React from 'react'

function DeleteButton(props) {
	return (
		<button
			className="delete-button"
			onClick={props.clearPlaylist}
		>Clear playlist</button>
	);
}

export default DeleteButton;
