import React from 'react';
import axios from 'axios';
import Post from './Post';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';
class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
    // this.PostForm.prototype = this.PostForm.bind(this);
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
  
  listNewEntry(title, content){
    axios.post('api/v1/posts', {list: {title, content}})
    .then(response => {
      console.log(response)
      const posts = [...this.state.posts, response.data ]
      this.setState({posts})
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
    return (
      <section className="section_blog">
        <header >
              <Link to="/blog">
              [ Blog ]
              </Link>
          </header>
          {this.state.posts.map( post => {
            return (
              <div>

            <Post post={post} key={post.id}/>
            < PostForm listNewEntry={this.listNewEntry} />
              </div>
            )
          })}
      </section>
    )
  }
}

export default Blog;