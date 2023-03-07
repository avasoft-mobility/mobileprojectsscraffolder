import {action, makeAutoObservable, observable} from 'mobx';
import exceptionHandlingObj from '../../Helpers/Utilities/Utilities';
import LandingPageModel from './LandingPageModel';

class LandingPageVM extends LandingPageModel {

//   /* Changing the popupVisibility property to true. */
//   showAlert() {
//     try{
//       //call the setPopupVisibility in model
//       super.setPopupVisibility(true)
//     }
//     catch (error) {
//       //logs exception
//       exceptionHandlingObj.handleException(error as unknown as Error);
//     }
//   }

updateSelectedStack(action:string){
    super.setSelectedStacked(action)
}

getSelectedStack(action:string){
    return super.getSelectedStacked()
}


}

export default LandingPageVM;