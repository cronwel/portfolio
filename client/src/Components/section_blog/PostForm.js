import React from 'react';

const PostForm = ({props, listNewEntry = f => f}) => {
  let title, content;
  const submit = e => {
    e.preventDefault()
    listNewEntry(title.value, content.value)
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
      <button onClick={listNewEntry}> Add Post</button>
    </form>
  )
}

export default PostForm;