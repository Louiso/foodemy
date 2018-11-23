import { observable } from 'mobx';


class Store{

  @observable user = '';
  @observable data = [
    {
      key: '1',
      name: 'Conceptos',
      img: 'https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e62a7e25e5552ec806aa34e63efb0ee&auto=format&fit=crop&w=1050&q=80',
      temaActual: 1,
      temas: [
        {
          name: 'Metabolismo',
          body: [
            {
              type: 'parrafo',
              contenido: 'Proident aliqua et id ad consequat veniam eiusmod minim sint aliqua excepteur excepteur mollit officia.'
            },
            {
              type: 'imagen',
              url: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be54d2b29df678372688979bc43f3529&auto=format&fit=crop&w=1189&q=80'
            },
            {
              type: 'parrafo',
              contenido: 'Fugiat amet officia ea magna aliquip culpa ea.'
            }
          ]
        },
        {
          name: 'Macromoleculas',
          body: [
            {
              type: 'parrafo',
              contenido: 'Id est esse sit sunt Lorem reprehenderit quis non veniam et.'
            },
            {
              type: 'imagen',
              url: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be54d2b29df678372688979bc43f3529&auto=format&fit=crop&w=1189&q=80'
            }
          ]
        }
      ]
    },
    {
      key: '2',
      name: 'Macromoleculas',
      img: 'https://images.unsplash.com/photo-1519699153807-6acb3311374a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6beb38a98d4f8a3331572f56ee790e9&auto=format&fit=crop&w=1040&q=80'
    },
    {
      key: '3',
      name: 'Metabolismo',
      img: 'https://images.unsplash.com/photo-1529996841047-ea0e1966eddc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e756b7bcac7bb1e72f3acb1f095aef2b&auto=format&fit=crop&w=1143&q=80 '
    },
    {
      key: '4',
      name: 'Macromoleculas',
      img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
    },
    {
      key: '5',
      name: 'Metabolismo',
      img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
    },
    {
      key: '6',
      name: 'Macromoleculas',
      img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
    },
    {
      key: '7',
      name: 'Metabolismo',
      img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
    }
  ];
}
export default new Store();