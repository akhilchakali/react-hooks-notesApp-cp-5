// Write your code here
const NoteItem = props => {
  const {each} = props
  const {titleName, textAreaName} = each
  return (
    <li>
      <h1>{titleName}</h1>
      <p>{textAreaName}</p>
    </li>
  )
}

export default NoteItem
