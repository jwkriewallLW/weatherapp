import IActionModel from "./IActionModel";

type DispatchFunctionType = (dispatch: Function | IActionModel ) => any;

export default DispatchFunctionType;