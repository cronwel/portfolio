import React from 'react';
import axios from 'axios';
import Post from './Post';

class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  };

  componentDidMount() {
    axios.get('/api/v1/posts.json')
    .then(response => {
      console.log(response)
      this.setState({
        posts: response.data
      })
    })
    .catch(error => console.log(error))
  };
  
  render() {
    return (
      <section className="section_blog">
        <header >Blog</header>
          <Post />
          {this.state.posts.map(post => {
            return (

              <div className="article" key={post.id} >
              <h4> {post.title}  </h4>
              <p> {post.content}</p>
              </div>
            )
          }
          )}
      </section>
    )
  }
}

export default Blog;