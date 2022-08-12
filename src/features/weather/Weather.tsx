import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Weather, WeatherArray } from "../../models/WeatherModel";
//import weatherInitialState from "../../redux/ducks/weatherDuck/weatherDuck_InitialState";
import GetWeatherAsync from "../../redux/services/weatherRequestService";
import { Button } from "@material-ui/core";
import weatherReducer from "../../redux/ducks/weatherDuck/weatherDuck_Reducer";

interface IMapDispatchProps {
	requestWeatherContent: Function;
}

interface IMapStateProps {
	weatherArray: WeatherArray;
}

export const mapStateToProps = (state: any): IMapStateProps => {
	const weatherArray = state.weatherArray.weatherArray;
	return {
		weatherArray,
	} as IMapStateProps;
};

export const mapDispatchToProps = (dispatch: any): IMapDispatchProps => {
	return {
		requestWeatherContent: () => {
			dispatch(GetWeatherAsync);
		},
	};
};

export function WeatherPage(props: IMapDispatchProps & IMapStateProps) {
	let { weatherArray, requestWeatherContent } = props || {};

	useEffect(() => {
		console.log(props);
		requestWeatherContent();
	}, []);

	return (
		<div>
			<h1>Weather Page</h1>

			<ul>
				{weatherArray.weatherArray.map((array) => (
					<div>{array.weather}</div>
				))}
			</ul>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
