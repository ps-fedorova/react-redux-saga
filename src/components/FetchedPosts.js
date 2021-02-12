import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
import {fetchPosts} from '../redux/actions'
import {Loader} from './Loader'

export default () => {
  const dispatch = useDispatch()
  // обозначаем, что нам нужно достать из стора (хук useSelector)
  const posts = useSelector(state => state.postsReducerKey.fetchedPosts)
  const loading = useSelector(state => state.appReducerKey.loading)

  if (loading) {
    return <Loader />
  }

  if (!posts.length) {
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
    >Загрузить</button>
  }
  return posts.map(post => <Post post={post} key={post.id} />)
}
