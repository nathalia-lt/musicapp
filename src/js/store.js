
import { createStore } from 'framework7';

//Mesma logica do Reduxç

const store = createStore({
  state: {
    currentAlbum: {
      id: 0,
      name: 'The Dark Side of the Moon',
      img: 'https://upload.wikimedia.org/wikipedia/pt/3/3b/Dark_Side_of_the_Moon.png',
      artist: 'Pink Floyd',
      min: '43 min'
    }, 
    currentPlaylist:[{}],
    currentSong: 0, //id do array
  },
  // funcoes para eu recuperar variaveis do meu state
  getters: {
    getAlbum({ state }) {
      return state.currentAlbum;
    }
  },
  //actions seriam os nossos setters, ele salva a informacao no state
  actions: {
    setAlbum({ state }, album) {
      state.currentAlbum = {...album};
    },
  },
})
export default store;
