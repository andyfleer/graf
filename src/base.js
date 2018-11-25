import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0nw7F_GNeSiWHddpJTsW3Eilni_ux4_0",
    authDomain: "grafnsk-site.firebaseapp.com",
    databaseURL: "https://grafnsk-site.firebaseio.com"
  });


  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };
  export default base; 