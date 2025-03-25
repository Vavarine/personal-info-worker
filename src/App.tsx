import Editor from '@monaco-editor/react'
import { jsonData } from './json-data'

function App() {
  return (
    <Editor
      height='100vh'
      width="100vw"
      language='json'
      theme="vs-dark"
      options={{
        lineHeight: 1.5,
        fontSize: 16,
      }}
      value={JSON.stringify(jsonData, null, 2)}
    />
  )
}

export default App
