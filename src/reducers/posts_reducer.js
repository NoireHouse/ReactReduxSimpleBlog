import { FETCH_POSTS, FETCH_POST_DETAILS, DELETE_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_POSTS:{
      return { ...state, all: action.payload.data };
    }
    case FETCH_POST_DETAILS:{
      return {...state, post: action.payload.data };
    }
    case DELETE_POST:{
      return state;
    }
    default:{
      return state;
    }
  }
}
