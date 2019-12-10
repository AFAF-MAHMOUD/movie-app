import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                {this.props.movies && this.props.movies.filter(el => el.name.toLowerCase().includes(this.props.input.toLowerCase().trim()) && el.rating < this.props.star).map(el => {
                    return (
                        <div className="movie-card">
                            <p className="movie-name">{el.name}</p>
                            <p className="movie-rating">{"".padEnd(el.rating, "⭐")}</p>
                            <img className="movie-img" src={el.img} />
                         </div>
                    )
                })}
            </div>);
    }
}
export default Card;

