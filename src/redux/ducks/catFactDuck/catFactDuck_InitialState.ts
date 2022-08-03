import { CatFact } from "../../../models/CatFactModel";

export default function catFactInitialState(): CatFact {
  return {
    fact: '',
    length: 0,    
  };
}
