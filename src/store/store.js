import { observable } from 'mobx';


class Store{

  @observable user = 'adaw';
}
export default new Store();