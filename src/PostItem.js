import React from 'react'
import { useState } from 'react'

export const PostItem = ({
  id,
  title,
  completed,
  removeTask,
  updateTask,
  updateChecked,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [changeValue, setChangeValue] = useState(title)
  const [changeChecked, setChangeChecked] = useState(false)

  const editPost = (id) => {
    setIsEdit((prevState) => !prevState)
  }

  const editTask = (e) => {
    setChangeValue(e.target.value)
  }

  const updateCheck = () => {
    setChangeChecked((prevState) => !prevState)
  }

  const updateState = () => {
    setIsEdit((prevState) => !prevState)
  }
  return (
    <div className="postItem">
      <div className="container">
        {id}.{' '}
        {isEdit ? (
          <input type="text" value={changeValue} onChange={editTask} />
        ) : (
          title
        )}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => updateChecked(id, changeChecked, updateCheck())}
        />
        <div>
          <button className="deleteTask" onClick={() => removeTask(id)}>
            Удалить задачу
          </button>
          {isEdit ? (
            <button
              className="editTask"
              onClick={() => updateTask(id, changeValue, updateState())}
            >
              Подтвердить
            </button>
          ) : (
            <button className="editTask" onClick={() => editPost(id)}>
              Редактировать задачу
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
