import React, { useRef } from 'react'
//import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

const AddForm = () => {
  const refContainer = useRef(null)
  const dispatch = useDispatch()

  const newToDo = (content) => {
    dispatch({
      type: 'NEW_TO_DO', payload: content
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    newToDo({ content: refContainer.current.value })
    refContainer.current.value = ''
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type='text' ref={refContainer} />
      </form>
    </div>
  )
}


export default AddForm
