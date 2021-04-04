import React from 'react'

function SongFilter(props) {
	return (
		<div className="SongFilter">
			<div className="genreFilter">
				<span>Filter by genre</span>
				<form
					className="filterGenre"
					name="filterGenre">
					<input
						type="checkbox"
						id="genre1"
						name="genre1"
						onChange={props.filterGenre}
						defaultChecked={true}
						value="Pop">
					</input>
					<label htmlFor="genre1">Pop</label>
					<input
						type="checkbox"
						id="genre2"
						name="genre2"
						onChange={props.filterGenre}
						defaultChecked={true}
						value="Rock"></input>
					<label htmlFor="genre2">Rock</label>
					<input
						type="checkbox"
						id="genre3"
						name="genre3"
						onChange={props.filterGenre}
						defaultChecked={true}
						value="Jazz"></input>
					<label htmlFor="genre3">Jazz</label>
					<input
						type="checkbox"
						id="genre4"
						name="genre4"
						onChange={props.filterGenre}
						defaultChecked={true}
						value="Classical"></input>
					<label htmlFor="genre4">Classical</label>
					<input
						type="checkbox"
						id="genre5"
						name="genre5"
						onChange={props.filterGenre}
						defaultChecked={true}
						value="Other"></input>
					<label htmlFor="genre5">Other</label>
				</form>
			</div>
			<div className="ratingFilter">
				<span>Filter by rating</span>
				<form
					className="filterRating"
					name="filterRating">
					<input
						type="checkbox"
						id="rating1"
						name="rating1"
						onChange={props.filterRating}
						defaultChecked={true}
						value="1">
					</input>
					<label htmlFor="rating1">1 star</label>
					<input
						type="checkbox"
						id="rating2"
						name="rating2"
						onChange={props.filterRating}
						defaultChecked={true}
						value="2"></input>
					<label htmlFor="rating2">2 stars</label>
					<input
						type="checkbox"
						id="rating3"
						name="rating3"
						onChange={props.filterRating}
						defaultChecked={true}
						value="3"></input>
					<label htmlFor="rating3">3 stars</label>
					<input
						type="checkbox"
						id="rating4"
						name="rating4"
						onChange={props.filterRating}
						defaultChecked={true}
						value="4"></input>
					<label htmlFor="rating4">4 stars</label>
					<input
						type="checkbox"
						id="rating5"
						name="rating5"
						onChange={props.filterRating}
						defaultChecked={true}
						value="5"></input>
					<label htmlFor="rating5">5 stars</label>
				</form>
			</div>
		</div>

	);
}

export default SongFilter;
