import './index.css'

import {Component} from 'react'

import SearchInputElement from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchItem: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchItem: event.target.value,
    })
  }

  render() {
    const {searchItem} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchItem),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchItem}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
        <ul className="ul-container">
          {searchResults.map(each => (
            <SearchInputElement eachPerson={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
