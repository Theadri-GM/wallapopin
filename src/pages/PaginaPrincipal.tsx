import React from 'react'
import './PaginaPrincipal.css'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebaseConfig';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonList, IonItem, IonLabel, IonInput, IonCard, IonCardContent, IonSlide, IonSlides, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonText, IonIcon, IonPage} from '@ionic/react'
import { mailOutline } from 'ionicons/icons'
import { logoGoogle } from 'ionicons/icons'

async function googleSignIn(){
    try{
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    window.location.href = "/Logueado"
    }catch (error){

    }
};

export const PaginaPrincipal = () => {

  return (
    <>
    <IonHeader>
            <IonToolbar>
                <div className='cabecera'>
                    <IonTitle class="ion-text-center" >PelisPop</IonTitle>
                </div>  
            </IonToolbar>
    </IonHeader>
        <IonContent>
            <IonSlides pager={true}>
                <IonSlide className="primerSlide">
                    <IonCard>
                        <IonImg src="https://img.freepik.com/vector-premium/lindo-dibujo-palomitas-maiz-palomitas-maiz-bebida-lista-ver-peliculas-cine_214584-8068.jpg?w=2000" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>Busca tus pelis favoritas</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Vas a poder buscar tus peliculas favoritas mediante nuestra barra de búsqueda.
                            </IonCardContent>
                    </IonCard>
                </IonSlide>
                <IonSlide className='segundoSlide'>
                    <IonCard>
                        <IonImg src="https://img.freepik.com/vector-premium/lindo-dibujo-palomitas-maiz-palomitas-maiz-bebida-lista-ver-peliculas-cine_214584-8068.jpg?w=2000" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle>Busca tus pelis favoritas</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Vas a poder buscar tus peliculas favoritas mediante nuestra barra de búsqueda.
                                </IonCardContent>
                    </IonCard>
                </IonSlide>
                <IonSlide className='tercerSlide'>
                <IonCard>
                    <IonImg src="https://img.freepik.com/vector-premium/lindo-dibujo-palomitas-maiz-palomitas-maiz-bebida-lista-ver-peliculas-cine_214584-8068.jpg?w=2000" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle>Busca tus pelis favoritas</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Vas a poder buscar tus peliculas favoritas mediante nuestra barra de búsqueda.
                                </IonCardContent>
                    </IonCard>
                </IonSlide>
            </IonSlides>
                    <IonButton expand="block" fill='outline' shape='round' onClick={() => googleSignIn()} ><IonIcon icon={logoGoogle} slot="start"/>Login con Google</IonButton>
                    <IonButton expand="block" fill='outline' shape='round' routerLink='/PaginaLogin'><IonIcon icon={mailOutline} slot="start"/>Login con Correo</IonButton>
        </IonContent>
    </>
  )
}

export default PaginaPrincipal;