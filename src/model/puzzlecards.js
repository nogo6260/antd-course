import request from '../util/request'; 
import {message} from 'antd';

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',

  state: {
    data: [],
    counter: 0,
  },
  /*
  state: {
    data:[
      { id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter:100,
  },*/

  effects: {
    *queryInitCards(_, sagaEffects) {
      try{
        const { call, put } = sagaEffects;
        const endPointURI = '/dev/random_joke';

        const puzzle = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle });

        yield call(delay, 3000);

        const puzzle2 = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle2 });
      }
      catch(e){
        message.error('数据获取失败'); // 打印错误信息
      }
    }
  },

  reducers:{
    addNewCard(state,{payload: newCard}){
      let nextCounter, newCardWithId, nextData;
      nextCounter = state.counter;
      nextData = state.data;
      nextCounter = nextCounter + 1;
      newCardWithId = {...newCard, id: nextCounter};
      nextData = nextData.concat(newCardWithId);
      return {
        data:nextData,
        counter:nextCounter
      }
    }
  }
};