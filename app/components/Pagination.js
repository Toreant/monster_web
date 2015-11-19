/**
 * Created by apache on 15-11-2.
 */
import React from 'react';
import PaginationActions from '../actions/PaginationActions';
import PaginationStore from '../stores/PaginationStore';
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = PaginationStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PaginationStore.listen(this.onChange);
    }

    componentWillUnmMout() {
        PaginationStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return(
            <nav>
                <ul className="pagination">
                    <li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li className="active"><a href="1">1 <span className="sr-only">(current)</span></a></li>
                    <li><a href="2">2</a></li>
                    <li><a href="3">3</a></li>
                    <li><a href="4">4</a></li>
                    <li><a href="5">5</a></li>
                    <li><a href=""><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;