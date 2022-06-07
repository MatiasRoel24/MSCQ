import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4f-Vaj_Cvj5BG61PFG48nIc7ccAqrvXI",
  authDomain: "primerecommerce.firebaseapp.com",
  projectId: "primerecommerce",
  storageBucket: "primerecommerce.appspot.com",
  messagingSenderId: "766121365067",
  appId: "1:766121365067:web:dcacaeb11dc17c103e87ce"
};

const app = initializeApp(firebaseConfig);

export default function getFiresotreApp(){
    return app
}