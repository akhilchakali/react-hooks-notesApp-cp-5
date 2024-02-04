// Write your code here
import {useState} from 'react'
import NoteItem from '../NoteItem'
import {Main} from './styledComponents'
import {v4 as uuidv4} from 'uuid'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [textArea, setTextArea] = useState('')
  const [list, setList] = useState([])
  const saveTitle = event => {
    setTitle(event.target.value)
  }
  const saveTextArea = event => {
    setTextArea(event.target.value)
  }
  const btnClicked = event => {
    event.preventDefault()
    const a = {
      id: uuidv4(),
      titleName: title,
      textAreaName: textArea,
    }
    setList(prevState => [...prevState, a])
    setTitle('')
    setTextArea('')
    console.log(list)
  }

  return (
    <div>
      <form onSubmit={btnClicked}>
        <Main>Notes</Main>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={saveTitle}
        />
        <br />
        <textarea
          placeholder="Take a Note..."
          cols="10"
          rows="4"
          onChange={saveTextArea}
          value={textArea}
        >
          {textArea}
        </textarea>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {list.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <h1>No Notes Yet</h1>
              <p>Notes you add will appear here</p>
            </div>
          ) : (
            list.map(each => <NoteItem each={each} key={each.id} />)
          )}
        </ul>
      </div>
    </div>
  )
}

export default Notes
