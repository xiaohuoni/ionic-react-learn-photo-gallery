import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const h = useHistory();
  console.log(h.location.pathname);

  const [a, seta] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{a}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => seta(a + 1)}>click me</IonButton>
        <IonButton routerLink={h.location.pathname === '/tabs/tab1' ? '/tab4' : '/tabs/tab1'}>goto page</IonButton>
        <ExploreContainer name='Tab 1 page' />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
