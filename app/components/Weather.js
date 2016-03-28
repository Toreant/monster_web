/**
 * Created by apache on 15-12-11.
 */
import React from 'react';
import WeatherActions from '../actions/WeatherActions';
import WeatherStore from '../stores/WeatherStore';
import Loading from './Loading';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = WeatherStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        WeatherStore.listen(this.onChange);
        WeatherActions.getWeather();
    }

    componentWillUnmount() {
        WeatherStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    refresh() {
        WeatherActions.getWeather();
    }

    render() {
        let Target = null;
        if(this.state.loading) {
            Target = <Loading/>;
        } else if(!this.state.error && this.state.weather !== null) {
            Target = (
                <div className="mon-weather">
                    <div className="mon-weather-title">
                        <span className="fa fa-calendar"></span>
                        <p className="text-center mon-weather-time">
                            {this.state.weather.date}
                        </p>
                    </div>
                    <div className="mon-weather-content">
                        <img src={'/img/weather/'+this.state.weather.cond.code_d+'.png'} alt="loading"/>
                        <p>
                            <a href="javascript:;" className="mon-location">
                                <span className="fa fa-map-pin"></span>
                            </a>
                            {this.state.city}
                        </p>
                        <p>
                            <span>{this.state.weather.tmp.min}℃</span>
                            <span>～</span>
                            <span>{this.state.weather.tmp.max}℃</span>
                        </p>
                    </div>
                </div>
            );
        } else if(this.state.error) {
            Target = (
                <div className="mon-error">
                    <a href="javascript:;" onClick={this.refresh}>
                        <span className="fa fa-refresh"></span>
                        刷新试试
                    </a>
                </div>
            );
        }
        return (
            <div className="mon-weather hidden-xs">
                {Target}
            </div>
        );
    }
}

export default Weather;