import { createSwitchNavigator } from 'react-navigation';
import Loader from './Loader';
import RutaAplicacion from './RutaAplicacion';
import RutaNuevo from './RutaNuevo';
import Tema from './Tema';

export default createSwitchNavigator({
  Loader: Loader,
  RutaNuevo: RutaNuevo,
  RutaAplicacion: RutaAplicacion,
  Prueba: Tema
},{
  initialRouteName: 'Prueba'
});


