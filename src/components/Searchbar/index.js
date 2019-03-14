import React from 'react';
import Button from '../Button';

const Searchbar = () => {
  return (
    <form>
      <fieldset>
        <legend>Book Search</legend>
        <label name = 'search title'>Book Title</label>
        <input name = 'search title' type = 'text'></input>
        <Button type = 'submit' classy = '' buttonText = 'Search' />
      </fieldset>
    </form>
  )
}

export default Searchbar;