import React from 'react';



class Search extends React.Component {

    state = {
        zipcode: '',
        isEmpty: true
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.findZipData(this.state.zipcode);

        if(this.state.zipcode === ""){
            this.setState({isEmpty: true});
        }
        else{
             this.setState({isEmpty: false});
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value,  isEmpty: true});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name="zipcode" value={this.state.zipcode} onChange={this.onChange} placeholder={this.state.isEmpty ? "Enter Zip Code..." : this.state.zipcode}/>
                <input type='submit' value="submit"/>
                </form>
                
            </div>
        )
    }
}


export default Search;