import React from 'react'
import './Pelicula.css'
import { IonList, IonListHeader, IonLabel, IonItem, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/react';

const Pelicula = (pelicula: { info: {
    Year: String;
    Poster: string | undefined; 
    Title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
}; }) => {
    console.log(pelicula.info);
  return (
    <IonList>
        <IonListHeader>
            <IonCard>
            <img className='imagen' alt="Silhouette of mountains" src={pelicula.info.Poster} />
                <IonCardHeader>
                    <IonCardTitle>{pelicula.info.Title}</IonCardTitle>
                    <IonCardSubtitle>{pelicula.info.Year}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </IonListHeader>
    </IonList>
  )
}

export {Pelicula}
