import React, {useState} from 'react'
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonList, IonItem, IonLabel, IonInput, IonCard, IonCardContent, IonSlide, IonSlides, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonText, IonIcon, IonBackButton, IonRouterLink, IonToast} from '@ionic/react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig';

export const PaginaRegistro = () => {

        // Aqui, estamos definiendo el estado de unas variables que nos van a guardar el usuario que nos introduzca el usuario...
        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");

    // Este registro nos creará el usuario y contraseña dentro de nuestro firebase.
    const registro = async () => {
        try{
          const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
          console.log(user);
        } catch (error){
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
                            <IonInput type="email" placeholder="Introduce tu email" onIonChange={(e: any) => setRegisterEmail(e.target.value)}></IonInput>
                    </IonItem>
                    <IonItem>
                            <IonLabel position="floating">Contraseña</IonLabel>
                            <IonInput type="password" placeholder="Introduce tu contraseña" onIonChange={(e: any) => setRegisterPassword(e.target.value)}></IonInput>
                    </IonItem>
                    <IonText> ¿Ya tienes cuenta? <IonRouterLink href='/PaginaLogin'> Registrate aqui</IonRouterLink></IonText>
                </IonList>
                <IonButton expand="block" fill='outline' shape='round' onClick={() => registro() } routerLink="/Home">Login con Correo</IonButton>
            </IonCard>
    </IonContent>
</>
  )
}

export default PaginaRegistro;