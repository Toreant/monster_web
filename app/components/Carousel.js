/**
 * Created by apache on 15-12-9.
 */
import React from 'react';
import CarouselActions from '../actions/CarouselActions';
import CarouselStore from '../stores/CarouselStore';
import Loading from './Loading';
import {Link} from 'react-router';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = CarouselStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CarouselStore.listen(this.onChange);
        CarouselActions.getRecommend();
    }

    componentWillUnmount() {
        CarouselStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        $("#carousel").sangarSlider({
            timer : false, // true or false to have the timer
            width : 850, // slideshow width
            height : 500, // slideshow height,
            directionalNav : 'show',
            pagination : 'bullet', // bullet, content-horizontal, content-vertical, none
            paginationContent : ["Lorem Ipsum Dolor", "Dolor Sit Amet", "Consectetur", "Do Eiusmod", "Magna Aliqua"],
            paginationContentWidth : 200
        });
    }

    render() {
        let Target = null;
        if(this.state.loading) {
            Target = <Loading/>;
        } else {
            Target = this.state.list.map((data) => {
                return (
                    <div key={data.data._id} className="sangar-content">
                        <img src={data.data.abbreviations || '/img/abbreviations.png'} alt="loading"/>
                        <Link to={'/'+data.option+'/'+data.data._id}>
                            <data className="data title"></data>
                        </Link>
                        <div className="mon-sanger-content">
                            <p>
                                {data.data.title}
                            </p>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div className='sangar-slideshow-container' id="carousel">
                <div className='sangar-content-wrapper'>
                    {Target}
                </div>
            </div>
        );
    }
}

export default Carousel;