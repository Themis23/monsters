import {Component} from 'react'

import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response =>response.json())
    .then(users =>this.setState({monsters : users}))
  }
    
  onSearchChange = (event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState({searchField : searchField})
  }

  render(){
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchField))

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder="Search Monsters" 
          className="monsters-search-box" />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
