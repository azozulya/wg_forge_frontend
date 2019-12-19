import React from "react";

class Search extends React.Component {
  constructor(props){
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event){
    this.props.searchInp(event.target.value);
  }

  render() {
    return (
      <div className="container py-2 px-0">
        <div className="row">
          <div className="col">
            <small>{this.props.searchString !== "" ? `You search "${this.props.searchString}"` : ""}</small>
          </div>
          <div className="col">
            <div className="form-inline float-right">
              <label htmlFor="search">Search:&nbsp;</label>
              <input type="text" id="search" className="form-control" autoComplete="off"
                                 value={this.props.searchString}
                                 onChange={this.handlerChange}
                                 minLength="3" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
