import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'
import SortSongs from './SortSongs'
import DeleteButton from './DeleteButton'
import SongFilter from './SongFilter'

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
				rating: "4"
			},
			{
				id: 2,
				title: "My Obsession",
				artist: "Cinema Bizarre",
				genre: "Pop",
				rating: "5"
			},
			{
				id: 3,
				title: "Salt",
				artist: "Ry X",
				genre: "Other",
				rating: "5"
			},
			{
				id: 4,
				title: "Georgia on my Mind",
				artist: "Billie Holiday",
				genre: "Jazz",
				rating: "4"
			},
			{
				id: 5,
				title: "Hit me baby one more time",
				artist: "Britney Spears",
				genre: "Pop",
				rating: "1"
			},
			{
				id: 6,
				title: "Ghost love score",
				artist: "Nightwish",
				genre: "Rock",
				rating: "5"
			},
			{
				id: 7,
				title: "Symphony no. 6",
				artist: "Beethoven",
				genre: "Classical",
				rating: "3"
			}],
			inputTitle: "",
			inputArtist: "",
			inputGenre: "",
			inputRating: "",
			ratingFilter: ["1", "2", "3", "4", "5"],
			genreFilter: ["Pop", "Rock", "Jazz", "Classical", "Other"]
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addSong = this.addSong.bind(this)
		this.clearPlaylist = this.clearPlaylist.bind(this)
		this.sortArray = this.sortArray.bind(this)
		this.clearInput = this.clearInput.bind(this)
		this.filterGenre = this.filterGenre.bind(this)
		this.filterRating = this.filterRating.bind(this)
	}

	// Adding a new song to the playlist
	addSong = (song) => {
		this.setState(prevState => ({
			songs: [...prevState.songs, song]
		}))

	}

	// Clearing the input fields in the form
	clearInput() {
		this.setState({
			inputTitle: "",
			inputArtist: "",
			inputGenre: "",
			inputRating: ""
		})
	}

	// Clearing the entire playlist
	clearPlaylist() {
		this.setState({
			songs: []
		})
	}

	// Handling change in the form
	handleChange(event) {
		const name = event.target.name
		const value = event.target.value
		this.setState({
			[name]: value
		})
	}

	// Handle the form being submitted and adding a new song to the playlist
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
		this.clearInput()
	}


	// Sorting the list of songs based on a given value
	sortArray(event) {
		const type = event.target.value
		const songs = [...this.state.songs]
		// What characteristic is this sorting based on?
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
		const sortProperty = types[type];
		// Check what to do with the given type
		switch (type) {
			// Sorting from 'low to high', words
			case "title_az":
			case "artist_az":
				songs.sort(function (a, b) {
					if (a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase()) { return -1; }
					if (a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase()) { return 1; }
					return 0;
				})
				break;
			// Sorting from low to high, numbers
			case "oldest_first":
			case "rating_lowest":
				songs.sort(function (a, b) {
					if (a[sortProperty] < b[sortProperty]) { return -1; }
					if (a[sortProperty] > b[sortProperty]) { return 1; }
					return 0;
				})
				break;
			// Sorting from 'high to low', words
			case "title_za":
			case "artist_za":
				songs.sort(function (a, b) {
					if (b[sortProperty].toLowerCase() < a[sortProperty].toLowerCase()) { return -1; }
					if (b[sortProperty].toLowerCase() > a[sortProperty].toLowerCase()) { return 1; }
					return 0;
				})
				break;
			// Sorting from high to low, numbers
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
		this.setState({
			songs: songs
		})
	}

	// Filtering the songs in state based on genre
	filterGenre(event) {
		const genre = event.target.value
		const checked = event.target.checked
		if (checked) {
			this.setState(prevState => {
				const prevGenreFilter = [...prevState.genreFilter]
				const newGenreFilter = prevGenreFilter.concat(genre)
				return {
					genreFilter: newGenreFilter
				}
			}
			)
		} else {
			this.setState(prevState => {
				const prevGenreFilter = [...prevState.genreFilter]
				const newGenreFilter = prevGenreFilter.filter(function (e) {
					return e !== genre
				})
				return {
					genreFilter: newGenreFilter
				}
			})
		}

	}


	// Filtering the songs in state based on rating
	filterRating(event) {
		const rating = event.target.value
		const checked = event.target.checked
		console.log("check", rating, checked)
		if (checked) {
			this.setState(prevState => {
				console.log("checked, filter", prevState.ratingFilter)
				const prevRatingFilter = [...prevState.ratingFilter]
				const newRatingFilter = prevRatingFilter.concat(rating)
				return {
					ratingFilter: newRatingFilter
				}
			})
		} else {
			this.setState(prevState => {
				console.log("unchecked, filter", prevState.ratingFilter)
				const prevRatingFilter = [...prevState.ratingFilter]
				const newRatingFilter = prevRatingFilter.filter(function (e) {
					return e !== rating
				})
				console.log("new", newRatingFilter)
				return {
					ratingFilter: newRatingFilter
				}
			})
		}

	}

	render() {
		return (
			<div className="SongOverview">
				<h1>My playlist</h1>
				<SongForm
					inputTitle={this.state.inputTitle}
					inputArtist={this.state.inputArtist}
					inputGenre={this.state.inputGenre}
					inputRating={this.state.inputRating}
					addSong={this.addSong}
					handleFormSubmit={this.handleFormSubmit}
					handleChange={this.handleChange}
				/>
				<SortSongs
					value={this.state.sort}
					sortArray={this.sortArray}
				/>
				<DeleteButton
					clearPlaylist={this.clearPlaylist}
				/>
				<SongFilter
					filterGenre={this.filterGenre}
					filterRating={this.filterRating}
				/>
				<SongList songs={this.state.songs}
					genreFilter={this.state.genreFilter}
					ratingFilter={this.state.ratingFilter} />
			</div>
		);
	}
}

export default SongOverview;