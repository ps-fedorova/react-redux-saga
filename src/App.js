import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className="container pt-3">
      <h1 className="p-5 mb-5 text-center">react-redux-saga</h1>
      <div className="row">
        <div className="col mx-5">
          <h2 className="mb-4">Синхронные Посты</h2>
          <div className="row">
            <div className="col">
              <PostForm />
            </div>
          </div>
          <Posts />
        </div>
        <div className="col mx-5">
          <h2 className="mb-5">Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
