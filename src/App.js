import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

  //constructor calls Component
  //super calls constructor
  //state is now ready to use
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  //get from API -- fetch
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

//methods need an arrow function. Referring to e. Else 'this' will be referring to Component
//this binds our custom Method to Component automatically as opposed to binding it ourselves.
  handleChange = (e) => {
    this.setState(
      {
        searchField: e.target.value
      },
      () => console.log(this.state)
    )
  };

  render() {

    //Deconstruct the state
    //Create temporary array
    //filter and compare with searchField via includes
    //pass filtered array to CardList
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
