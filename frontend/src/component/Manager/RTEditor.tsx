import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function RTEditor () {
  const [value, setValue] = useState('')

  return(
    <ReactQuill theme="snow" value={value} onChange={setValue} />
  );
}
export default RTEditor;