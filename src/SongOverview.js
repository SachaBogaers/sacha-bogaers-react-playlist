import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {

	constructor() {
		super()
		this.state =
		{
			songs: [{
				id: 1,
				title: "Rette Mich",
				artist: "Tokio Hotel",
				genre: "Rock",
				rating: 4
			},
			{
				id: 2,
				title: "Zeeee",
				artist: "Cinema Bizarre",
				genre: "Pop",
				rating: 3
			},
			{
				id: 3,
				title: "Dawn",
				artist: "Ry X",
				genre: "Other",
				rating: 5
			},
			{
				id: 4,
				title: "Lovesongs (They kill me)",
				artist: "Cinema Bizarre",
				genre: "Pop",
				rating: 5
			},
			{
				id: 5,
				title: "Hit me baby one more time",
				artist: "Britney Spears",
				genre: "Pop",
				rating: 2
			}
			],
			inputTitle: "",
			inputArtist: "",
			inputGenre: "",
			inputRating: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addSong = this.addSong.bind(this)
		this.clearPlaylist = this.clearPlaylist.bind(this)
		this.sortArray = this.sortArray.bind(this)

	}

	handleFormSubmit(event) {
		event.preventDefault();
		const song = {
			id: this.state.songs.length + 1,
			title: this.state.inputTitle,
			artist: this.state.inputArtist,
			genre: this.state.inputGenre,
			rating: this.state.inputRating
		}
		this.addSong(song)
		this.setState({
			inputTitle: "",
			inputArtist: "",
			inputGenre: "",
			inputRating: ""
		})
	}

	addSong = (song) => {
		this.setState(prevState => ({
			songs: [...prevState.songs, song]
		}))

	}

	handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({
			[name]: value
		})
	}

	clearPlaylist() {
		this.setState({
			songs: []
		})
	}

	sortArray(event) {
		const type = event.target.value
		const songs = [...this.state.songs]
		console.log("songs", songs)
		const types = {
			oldest_first: 'id',
			title_az: 'title',
			artist_az: 'artist',
			rating_lowest: 'rating',
			newest_first: 'id',
			title_za: 'title',
			artist_za: 'artist',
			rating_highest: 'rating'
		}
		console.log(types)
		const sortProperty = types[type];
		switch (type) {
			case "title_az":
			case "artist_az":
				songs.sort(function (a, b) {
					if (a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase()) { return -1; }
					if (a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase()) { return 1; }
					return 0;
				})
				break;
			case "oldest_first":
			case "rating_lowest":
				songs.sort(function (a, b) {
					if (a[sortProperty] < b[sortProperty]) { return -1; }
					if (a[sortProperty] > b[sortProperty]) { return 1; }
					return 0;
				})
				break;
			case "title_za":
			case "artist_za":
				songs.sort(function (a, b) {
					if (b[sortProperty].toLowerCase() < a[sortProperty].toLowerCase()) { return -1; }
					if (b[sortProperty].toLowerCase() > a[sortProperty].toLowerCase()) { return 1; }
					return 0;
				})
				break;
			case "newest_first":
			case "rating_highest":
				songs.sort(function (a, b) {
					if (b[sortProperty] < a[sortProperty]) { return -1; }
					if (b[sortProperty] > a[sortProperty]) { return 1; }
					return 0;
				})
				break;
			default: return;
		}
		console.log('property', sortProperty)
		this.setState({
			songs: songs
		})
	}

	render() {
		return (
			<div className="SongOverview">
				<SongForm
					inputTitle={this.state.inputTitle}
					inputArtist={this.state.inputArtist}
					inputGenre={this.state.inputGenre}
					inputRating={this.state.inputRating}
					addSong={this.addSong}
					handleFormSubmit={this.handleFormSubmit}
					handleChange={this.handleChange}
				/>
				<label htmlFor="sort">Sort songs:</label>
				<select
					className="sort"
					name="sort"
					value={this.state.sort}
					onChange={this.sortArray}>
					<option value="oldest_first">Oldest first</option>
					<option value="newest_first">Newest first</option>
					<option value="title_az">Title (a-z)</option>
					<option value="title_za">Title (z-a)</option>
					<option value="artist_az">Artist (a-z)</option>
					<option value="artist_za">Artist (z-a</option>
					<option value="rating_lowest">Rating (lowest first)</option>
					<option value="rating_highest">Rating highest first)</option>
				</select>
				<button
					onClick={this.clearPlaylist}
				>Clear playlist</button>
				<table style={{ width: "100%" }}>
					<thead>
						<tr className="song-header">
							<th className="song-row__item">Title</th>
							<th className="song-row__item">Artist</th>
							<th className="song-row__item">Genre</th>
							<th className="song-row__item">Rating</th>
						</tr>
					</thead>
					<SongList songs={this.state.songs} />
				</table>

			</div>
		);
	}
}

export default SongOverview;