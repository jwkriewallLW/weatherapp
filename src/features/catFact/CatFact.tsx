import React from 'react';
//you MUST desctructure component from @material-ui in order to remove JSX warnings.
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { CatFact } from '../../models/CatFactModel';
import GetCatFactAsync from "../../redux/services/catFactRequestService";


interface IMapDispatchProps {
  requestCatFactContent: Function;
}

interface IMapStateProps {
  catFact: CatFact;
}

export const mapStateToProps = (state: any): IMapStateProps => {
  console.log("mapStateToProps");
  console.log(`catFact: ${state.catFact.catFact}`); // state
  const catFact = state.catFact.catFact;  
  return {
    catFact   
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


export function CatFactPage() {
    // return (
    //     <div>
    //         <Button onClick={() => {
    //             alert('Fact generated.');
    //             // requestCatFactContent();
    //             // addFact();    
    //           }} 
    //           >  
    //             Generate Cat Fact
    //         </Button>
    //     </div>
    // )

      return (
    
        <Grid container className="CatFactComponent_Container">
            <div>
            <ButtonGroup orientation="vertical">    
                <Button
                    onClick={() => {
                        alert('Fact Generated');
                        // requestCatFactContent();
                        // addFact();
                        
                    }}            
                    variant="contained"
                    color="primary"
                    >
                    Request New Cat Fact
                </Button>
                            
            </ButtonGroup> 
            
        {/* <p>Fact:</p><p>{catFact.fact}</p>
        <p>Length:</p><p>{catFact.length}</p> */}
        {/* <p>Cat Fact List:</p><ul>{catFactList.map((fact) => <div>{fact}</div>)}</ul> */}
        
            </div>
        </Grid>
    
    
  );
}