import { createContext, useContext } from 'react'

import { nanoid } from 'nanoid'
import { type ImmerReducer, useImmerReducer } from 'use-immer'

import type {
  Content,
  ContentProperties,
  ContentType,
} from '@/fixtures/editor/types'

type EditorState = {
  currentActive: string | null
  contents: Content[]
}

type EditorAction =
  | { type: 'remove'; payload: string }
  | { type: 'add'; payload: { type: ContentType } }
  | {
      type: 'update'
      payload: {
        id: string
        properties?: ContentProperties<ContentType>
      }
    }
  | { type: 'move'; payload: { id: string; atIndex: number } }
  | { type: 'setCurrentActive'; payload: string | null }

const initialState: EditorState = {
  currentActive: null,
  contents: [],
}

const editorReducer: ImmerReducer<EditorState, EditorAction> = (
  draft,
  action
) => {
  switch (action.type) {
    case 'remove':
      draft.contents = draft.contents.filter(
        content => content.id !== action.payload
      )
      draft.currentActive = null
      break
    case 'add': {
      const id = nanoid()
      draft.contents.push({
        type: action.payload.type,
        id,
      })

      draft.currentActive = id
      break
    }
    case 'update': {
      const { id, properties } = action.payload
      const currentIndex = draft.contents.findIndex(card => card.id === id)
      if (currentIndex === -1) break
      const res = {
        ...draft.contents[currentIndex],
        properties: {
          ...draft.contents[currentIndex].properties,
          ...properties,
        },
      }
      draft.contents[currentIndex] = res
      break
    }
    case 'move': {
      const { id, atIndex } = action.payload
      const currentIndex = draft.contents.findIndex(card => card.id === id)
      if (currentIndex === -1) break
      const item = draft.contents[currentIndex]
      const contents = draft.contents.slice()
      contents.splice(currentIndex, 1)
      draft.contents.splice(currentIndex, 1)
      draft.contents.splice(atIndex, 0, item)
      break
    }
    case 'setCurrentActive':
      draft.currentActive = action.payload
      break

    default:
      throw new Error(`action type not found`)
  }
}

const EditorContext = createContext<{
  state: EditorState
  dispatch: React.Dispatch<EditorAction>
}>({
  state: initialState,
  dispatch: () => {},
})

export const useEditorContext = () => useContext(EditorContext)

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useImmerReducer(editorReducer, initialState)
  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  )
}
