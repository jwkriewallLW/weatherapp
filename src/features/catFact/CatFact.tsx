import React, { useEffect, useState } from "react";
//you MUST desctructure component from @material-ui in order to remove JSX warnings.
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { CatFact } from "../../models/CatFactModel";
import GetCatFactAsync from "../../redux/services/catFactRequestService";
import { connect } from "react-redux";

interface IMapDispatchProps {
	requestCatFactContent: Function;
}

interface IMapStateProps {
	catFact: CatFact;
}

export const mapStateToProps = (state: any): IMapStateProps => {
	console.log("mapStateToProps");
	console.log(`catFact: ${state}`); // state
	const catFact = state.catFact.catFact;
	return {
		catFact,
	} as IMapStateProps;
};

export const mapDispatchToProps = (dispatch: any): IMapDispatchProps => {
	console.log("mapDispatchToProps");
	return {
		requestCatFactContent: () => {
			dispatch(GetCatFactAsync);
		},
	};
};

export function CatFactData(props: IMapStateProps & IMapDispatchProps) {
	console.log("CatFactComponent");
	let { catFact, requestCatFactContent } = props || {};
	const [isInitialized, setInitialized] = useState(false);
	const [catFactList, setCatFactList] = useState([""]);

	useEffect(() => {
		if (isInitialized === false) {
			setInitialized(catFact.fact !== undefined);
			if (catFact.fact === undefined) {
				requestCatFactContent();
			}
		}
	}, [isInitialized, catFact, requestCatFactContent]);

	// if (catFact.fact !== undefined) {
	// 	// if there is a catFact, add it to catFactList
	// 	//setCatFactList(catFact.fact)
	// 	console.log(catFactList);
	// }

	const addFact = () => {
		setCatFactList([...catFactList, catFact.fact]);
	};

	console.log(props);

	return (
		<Grid container className="CatFactComponent_Container">
			<div>
				<ButtonGroup orientation="vertical">
					<Button
						onClick={() => {
							alert("Fact Generated");
							requestCatFactContent();
							addFact();
						}}
						variant="contained"
						color="primary"
					>
						Request New Cat Fact
					</Button>
				</ButtonGroup>

				<p>Fact:</p>
				<p>{catFact.fact}</p>
				<p>Length:</p>
				<p>{catFact.length}</p>
				<p>Cat Fact List:</p>
				<ul>
					{catFactList.map((fact) => (
						<div key={fact.length}>{fact}</div>
					))}
				</ul>
			</div>
		</Grid>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CatFactData);
