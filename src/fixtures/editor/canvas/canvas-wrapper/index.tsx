import { XIcon } from 'lucide-react'

import { useEditorContext } from '@/fixtures/editor/context'
import type { ContentType } from '@/fixtures/editor/types'
import { cn } from '@/helpers/class-name'

type Props = {
  id: string
  type: ContentType
  children?: React.ReactNode
}

export default function CanvasWrapper({ id, type, children }: Props) {
  const { dispatch, state } = useEditorContext()

  return (
    <div
      onClick={event => {
        event.stopPropagation()
        dispatch({ type: 'setCurrentActive', payload: id })
      }}
      className={cn('relative w-full cursor-pointer break-all', {
        'outline outline-sky-500': state.currentActive === id,
        'hover:outline hover:outline-sky-300': state.currentActive !== id,
      })}
    >
      {children}

      {state.currentActive === id ? (
        <label>
          <span className="absolute -top-4 left-1/2 h-fit -translate-x-1/2 rounded bg-sky-500 px-4 text-white">
            {type}
          </span>

          <XIcon
            className="absolute -right-2 -top-4 h-6 w-6 cursor-pointer rounded-full bg-sky-500 p-1 text-white"
            onClick={event => {
              event.stopPropagation()
              dispatch({ type: 'remove', payload: id })
            }}
          />
        </label>
      ) : null}
    </div>
  )
}
