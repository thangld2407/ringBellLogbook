import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { play, pause, radioOutline } from 'ionicons/icons'
import './Home.css';
import ReactAudioPlayer from 'react-audio-player';

const Home: React.FC = () => {
  let musicPlay: ReactAudioPlayer | null;
  let bell : ReactAudioPlayer | null;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Application Ring Bell</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <ReactAudioPlayer
            ref={(element) => { musicPlay = element; }}
            src="./assets/sound/lcslg.mp3"
          />
          <IonLabel><strong>Playing Music </strong></IonLabel>
        </IonItem>
        <IonItem>
          <IonButton onClick={() => musicPlay?.audioEl.current?.play()}>
            <IonIcon slot="icon-only" icon={play}></IonIcon>
          </IonButton>
          <IonButton onClick={() => musicPlay?.audioEl.current?.pause()}>
            <IonIcon slot="icon-only" icon={pause} ></IonIcon>
          </IonButton>
        </IonItem>
        <IonItem className="react-audio">
        <ReactAudioPlayer
          ref={(element) => { bell = element; }}
          src="./assets/sound/Sound.mp3"
        />
          <IonLabel>Ring Bell Button</IonLabel>
        </IonItem>
        <IonItem>
        <IonButton onClick={() =>bell?.audioEl.current?.play() }>Ring a Bell</IonButton>

        </IonItem>
        <IonItem>
          <IonToolbar>
            <strong>Vibrate Control Device</strong>
          </IonToolbar>
        </IonItem>
        <IonItem>
          <IonLabel>
            <IonToolbar>
              <IonButton onClick={() => navigator.vibrate(2000)}>
                <strong>Click here to Vibrate Device </strong> <br /><IonIcon slot="icon-only" icon={radioOutline}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
