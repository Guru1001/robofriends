import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users =>this.setState({robots: users}))
		
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return !this.state.robots.length ?
			<div className = 'tc'>
				<div><h1 className='f1'>Robofriends</h1></div>
				<h2 className>Loding</h2>
			</div>
			:
			<div className = 'tc'>
				<div><h1 className='f1'>Robofriends</h1></div>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>	
			</div>;		
	}
	
}

export default App;