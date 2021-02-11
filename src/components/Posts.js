import React from 'react'
import {connect} from 'react-redux' // HOC
import Post from './Post'

const Posts = ({syncPosts}) => {
  if (!syncPosts.length) {
    return <p className="pt-3">Постов пока нет</p>
  }
  return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => { // функция преобразовывает весь стейт в пропсы
  return {
    syncPosts: state.posts.posts // нам нужно преобразовать только конкретные поля
  } // syncPosts - произвольное название переменной
}

export default connect(mapStateToProps, null)(Posts)
// мы можем работать напрямую со стором с помощью connect, т.е., не нужно прокидывать пропсы
