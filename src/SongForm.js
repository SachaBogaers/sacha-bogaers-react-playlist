import React from 'react'

function SongForm(props) {
	return (
		<form
			onSubmit={props.handleFormSubmit}
		>
			<input
				type="text"
				placeholder="Song title"
				name="inputTitle"
				value={props.inputTitle}
				onChange={props.handleChange}
			/>
			<input
				type="text"
				placeholder="Artist"
				name="inputArtist"
				value={props.inputArtist}
				onChange={props.handleChange}
			/>
			<select
				className="formSelect"
				id="inputGenre"
				name="inputGenre"
				value={props.inputGenre}
				onChange={props.handleChange}>
				<option disabled value="">Select a genre</option>
				<option value="Pop">Pop</option>
				<option value="Rock">Rock</option>
				<option value="Jazz">Jazz</option>
				<option value="Classical">Classical</option>
				<option value="Other">Other</option>
			</select>
			<select
				className="formSelect"
				id="inputRating"
				name="inputRating"
				value={props.inputRating}
				onChange={props.handleChange}>
				<option disabled value="">Select a rating</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<button>Add song</button>
		</form>
	);
}

export default SongForm;
