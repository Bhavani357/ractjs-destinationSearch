import './index.css'

import {Component} from 'react'

class SearchInputElement extends Component {
  render() {
    const {eachPerson} = this.props
    const {name, imgUrl} = eachPerson

    return (
      <li>
        <img src={imgUrl} alt={name} className="image" />
        <p>{name}</p>
      </li>
    )
  }
}

export default SearchInputElement
