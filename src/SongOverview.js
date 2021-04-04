import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {

	constructor() {
		super()
		this.state =
		{
			songs: [],
			inputTitle: "",
			inputArtist: "",
			inputGenre: "",
			inputRating: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addSong = this.addSong.bind(this)
		this.clearPlaylist = this.clearPlaylist.bind(this)

	}

	handleFormSubmit(event) {
		event.preventDefault();
		const song = {
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