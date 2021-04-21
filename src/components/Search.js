import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" name="name" placeholder="Search by Name"/>
                <input type="text" name="breed" placeholder="Search by Breed"/>
                <input type="radio" id="female" name="gender" value="Female"/>
                
                <label for="female"> Female </label>
                <input type="radio" id="male" name="gender" value="Male"/>
                <label for="male"> Male </label>
                <button className="App-button">Find Dog 
                </button>
            </form>
        );
    }
};

export default Search;