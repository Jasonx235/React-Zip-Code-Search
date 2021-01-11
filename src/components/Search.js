import React from 'react';



class Search extends React.Component {

    state = {
        zipcode: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.findZipData(this.state.zipcode);
        this.setState({zipcode:""});
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name="zipcode" value={this.state.zipcode} onChange={this.onChange} placeholder="Enter zip code..."/>
                <input type='submit' value="submit"/>
                </form>
                
            </div>
        )
    }
}


export default Search;