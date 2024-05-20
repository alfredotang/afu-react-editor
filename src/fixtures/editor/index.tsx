import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="grid h-screen w-full grid-cols-[300px_1fr]">
        <aside className="bg-green-500" />
        <section />
      </main>
    </DndProvider>
  )
}
