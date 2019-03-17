import React from 'react';
import Button from '../Button';

const Searchbar = ({ onClick }) => {
  return (
    <form>
      <fieldset>
        <legend>Book Search</legend>
        <label name = 'searchAPI'>Book Title</label>
        <input name = 'searchAPI' type = 'text'></input>
        <Button name = 'searchAPI' button = 'submit' classy = '' buttonText = 'Search' onClick = {onClick}/>
      </fieldset>
    </form>
  )
}

export default Searchbar;