import { observable } from 'mobx';


class Store{

  @observable user = 'Luis';
}
export default new Store();