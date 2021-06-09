import { Redirect, Route, HashRouter as Router } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id='main'>
        <Route
          path='/tabs'
          render={() => (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path='/tabs/tab1'>
                  <Tab1 />
                </Route>
                <Route exact path='/tabs/tab2'>
                  <Tab2 />
                </Route>
                <Route path='/tabs/tab3'>
                  <Tab3 />
                </Route>
                <Route exact path='/tabs'>
                  <Redirect to='/tabs/tab1' />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot='bottom'>
                <IonTabButton tab='tab1' href='/tabs/tab1'>
                  <IonIcon icon={triangle} />
                  <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab='tab2' href='/tabs/tab2'>
                  <IonIcon icon={images} />
                  <IonLabel>Photos</IonLabel>
                </IonTabButton>
                <IonTabButton tab='tab3' href='/tabs/tab3'>
                  <IonIcon icon={square} />
                  <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          )}
        ></Route>

        <Route exact path='/tab4'>
          <Tab1 />
        </Route>
        <Route exact path='/'>
          <Redirect to='/tabs/tab1' />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
