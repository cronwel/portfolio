import React from 'react';

const PostForm = ({ListNewEntry = f => f}) => {
  let title, content
  const submit = e => {
    e.preventDefault()
    ListNewEntry(title.value, content.value)
    title.value= ''
    content.value = ''
    title.focus()
  }
  return(
    <form onSubmit="{submit}">
      <input type="text"
        ref={input => title = input}
        placeholder="Title..." required
      />
      <input type="text"
        ref={input => content = input }
        placeholder="Content..." required
      />
      <button> Add Post</button>
    </form>
  )
}

export default PostForm;