import {Linking} from "react-native"


const startDeepLink = async () => {


      const squareAppID = 'APP_ID' // application production id. 
      const idpAppCallback = 'CALLBACK_URL' // defined in application dashboard > Oauth
      const squareCatalogItemID = 'ITEM_ID' // id of item, can be retrieved from catalog endpoint
      const locationID = 'LOCATION_ID' // for multiple locations

      const dataPackage = {
                               id: squareCatalogItemID,
                               client_id: squareAppID, 
                               callback_url: idpAppCallback 
                           }

      const encodeProduct = encodeURIComponent(JSON.stringify(dataPackage))

      const url = `square-commerce-v1://catalog/details?data=${encodeProduct}`
   // const url = `square-commerce-v1://payment/create?data=${encodeProduct}`; //tried this too didn't work. 

      
      Linking.openURL(url);
  
    }


// From here, startDeepLink() would be fired from a button press or something similar in the rendered return { } function that would come next. 
