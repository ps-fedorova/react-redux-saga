import { CREATE_POST, FETCH_POSTS } from './types'

const initialState = {
  posts: [],
  fetchedPosts: []
}

// Pure Functions
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] } // старый массив постов + новый пост
    // return { ...state, posts: state.posts.concat([action.payload]) }

    // когда у нас происходит событие CREATE_POST, мы должны вернуть
    // копию стейта - ...state, (иммутабельность), дальше нам нужно создать новый пост в списке,
    // основываясь на предыдущем значении массива. Предыдущее значение массива лежит в state.posts
    // нельзя использовать push, потому что он мутирует состояние, а нам нужен новый объект.

    // Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
    // соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

    // const array1 = ['a', 'b', 'c'];
    // const array2 = ['d', 'e', 'f'];
    // const array3 = array1.concat(array2);
    //
    // console.log(array3);
//  // expected output: Array ["a", "b", "c", "d", "e", "f"]

    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload }
    default:
      return state
  }
}
