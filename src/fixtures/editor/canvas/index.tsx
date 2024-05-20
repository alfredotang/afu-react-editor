import { useDrop } from 'react-dnd'

import { useEditorContext } from '@/fixtures/editor/context'
import type { ContentType } from '@/fixtures/editor/types'

import CanvasWrapper from './canvas-wrapper'
import { CanvasComponentMap } from './components'

export default function Canvas() {
  const { dispatch, state } = useEditorContext()
  const [, drop] = useDrop<{
    type: ContentType
    index: number
  }>(() => ({
    accept: ['image', 'text'],
    drop: item => {
      dispatch({ type: 'add', payload: { type: item.type } })
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <section
      ref={drop}
      className="w-full bg-gray-100 p-8"
      onClick={() => {
        dispatch({ type: 'setCurrentActive', payload: null })
      }}
    >
      <div className="box-border h-full w-full break-words border-t border-transparent bg-white shadow-md">
        {state.contents.map(content => {
          const Component = CanvasComponentMap[content.type]
          return (
            <CanvasWrapper key={content.id} id={content.id} type={content.type}>
              <Component {...content.properties} />
            </CanvasWrapper>
          )
        })}
      </div>
    </section>
  )
}
