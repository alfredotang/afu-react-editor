import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Canvas from './canvas'
import { EditorProvider } from './context'
import Controller from './controller'

export default function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <EditorProvider>
        <main className="grid h-screen w-full grid-cols-[300px_1fr]">
          <Controller />
          <Canvas />
        </main>
      </EditorProvider>
    </DndProvider>
  )
}
