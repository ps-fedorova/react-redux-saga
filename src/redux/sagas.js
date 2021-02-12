import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_POSTS, REQUEST_POSTS } from './types'
import { hideLoader, showAlert, showLoader } from './actions'

export function* sagaWatcher() { // * - превратить функцию в генератор
  yield takeEvery(REQUEST_POSTS, sagaWorker) // добавляем side effect, который говорит:
  // нам необходимо обрабатывать каждый экшин, поступающий в стор - takeEvery
  // нам нужно каждый - takeEvery, но есть и другие вариации

  // на каждый REQUEST_POSTS мы будем выполнять side effect sagaWorker
  // чтобы генератор работал, нам необходимо добавлять приставку yield "передать управление"
}

function* sagaWorker() {
  try {
    yield put(showLoader()) // put позволяет диспатчить определенные события в store
    const payload = yield call(fetchPosts) // нам необходимо подождать, пока мы выполним с помощью функции call
    // метод fetchPosts
    yield put({ type: FETCH_POSTS, payload }) // вставить наши загружнные посты
    yield put(hideLoader()) // скрыть лоадер
// сюда просто так нельзя запихнуть setTimeout, потому что внутри генераторов и только внутри них
// существует оператор yield
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPosts() { // функция, которая делает загрузку с сервера
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}
