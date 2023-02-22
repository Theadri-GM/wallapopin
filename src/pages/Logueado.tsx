import { IonContent, IonButton, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react'
import React from 'react'
import {auth} from '../firebaseConfig';
import {signOut} from 'firebase/auth';
import './Logueado.css'

export const Logueado = () => {

    // Esta función permite salir o desloguearse al usuario.
    const logout = async () =>{
        try{
        await signOut(auth)
        window.location.href="/PaginaPrincipal"
        }catch (error){

        }
      };

      
  return (
    <>
        <IonHeader>
          <IonToolbar class='ion-text-center'>
              <IonTitle>PelisPop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            Logueado!
            
            <IonButton expand="block" fill='outline' shape='round' onClick={() => logout()}>Logout</IonButton>
        </IonContent>
    </>
  )
}

export default Logueado;