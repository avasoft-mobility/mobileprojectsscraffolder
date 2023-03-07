import {action, makeObservable, observable} from 'mobx';

class LandingScreenModel {
  selectedStack:string = ""

  constructor() {
    makeObservable(this, {
        selectedStack:observable,
        setSelectedStacked:action,
        getSelectedStacked:action
    });
  }

  setSelectedStacked(value:string) {
    this.selectedStack = value
  }

  getSelectedStacked(){
    return this.selectedStack
  }
}

export default LandingScreenModel;
