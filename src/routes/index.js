import { createSwitchNavigator } from 'react-navigation';
import Loader from './Loader';
import RutaAplicacion from './RutaAplicacion';
import RutaNuevo from './RutaNuevo';

export default createSwitchNavigator({
  Loader: Loader,
  RutaNuevo: RutaNuevo,
  RutaAplicacion: RutaAplicacion
},{
  initialRouteName: 'Loader'
});


