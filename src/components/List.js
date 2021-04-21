import React, { Component } from 'react';
import { debounce } from 'lodash';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            search: '',
            
        }
        this.handleChange = this.handleChange.bind(this);
    
    }

    debouncedHandleChange = debounce(this.handleChange, 200);

    render() {
        const { search } = this.state;
        console.log('l',search.length);
        return (
            <div>
            <input type="text" className ="App-input" onChange={this.handleChange} placeholder="yyyy-mm-dd"></input>
            <button className = "App-button"> Find! </button>
                <table style={{width : '100%'}}>
                <tr className = "tableHeading">
                    <th>NAME</th>
                    <th>BREED</th>
                    <th>COLOR</th>
                    <th>SEX</th>
                </tr>
                { search.length > 6 && this.state.filtered.map(dog => (<tr key={dog} className="tableContent">
                    <td>{dog.Name}</td>
                    <td>{dog.Breed}</td>
                    <td>{dog.Color}</td>
                    <td>{dog.Sex}</td>
                </tr>))}
                </table>

            </div>
        );
    }

            componentDidMount() {
            this.setState({
                filtered: this.props.data
            });
        }

        componentWillRecieveProps(nextProps) {
            this.setState({
                filtered: nextProps.data
            });
        }

        handleChange(e) {
            console.log('handleChange');
            let currentList = [];
            let newList = [];

            if(e.target.value !== "") {
                currentList = this.props.data;
                newList = currentList.filter(datum => {
                    const lc = datum.Date.toLowerCase();
                    const filter = e.target.value.toLowerCase();

                    return lc.includes(filter);
                });
                console.log(newList);

            } else {
                newList =this.props.data;
            }
            this.setState({
                filtered: newList,
                search: e.target.value,
            });

            }
        }

export default List