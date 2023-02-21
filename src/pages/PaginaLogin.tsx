import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonList, IonItem, IonLabel, IonInput, IonCard, IonCardContent, IonSlide, IonSlides, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonText, IonIcon, IonBackButton, IonRouterLink, IonToast, IonNavLink} from '@ionic/react'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig';

export const PaginaLogin = () => {

    // y la contraseña.
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");

    // Este Login, nos va a devolver el login de nuestros valores introducidos dentro de los inputs.
    const login = async () =>{
        try{
          const user =  await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
          console.log(user);
          window.open("/home");
        } catch (error){
            console.log(error);
        }
    };
    
  return (
    <>
        <IonHeader>
            <IonToolbar>
                <div className='cabecera'>
                    <IonTitle class="ion-text-center" >Login</IonTitle>
                    <IonButton fill="clear" routerLink='/' className='volver'> volver </IonButton>
                </div>  
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonTitle>
                ¡Unete a PelisPop!
            </IonTitle>
                <IonCard>
                    <IonList>
                        <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" placeholder="Introduce tu email" onIonChange={(e: any) => setLoginEmail(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput type="password" placeholder="Introduce tu contraseña" onIonChange={(e: any) => setLoginPassword(e.target.value)}></IonInput>
                        </IonItem>
                        <IonContent> ¿No tienes cuenta? Registrate aqui</IonContent>
                    </IonList>
                    <IonButton expand="block" fill='outline' shape='round' onClick={() => login() }>Login con Correoito</IonButton>
                </IonCard>
        </IonContent>
    </>
  )
}

export default PaginaLogin;