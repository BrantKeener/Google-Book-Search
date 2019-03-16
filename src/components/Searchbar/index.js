import React from 'react';
import Button from '../Button';

const Searchbar = ({ onClick }) => {
  return (
    <form>
      <fieldset>
        <legend>Book Search</legend>
        <label name = 'search title'>Book Title</label>
        <input name = 'search title' type = 'text'></input>
        <Button type = 'submit' classy = '' buttonText = 'Search' onClick = {onClick}/>
      </fieldset>
    </form>
  )
}

export default Searchbar;