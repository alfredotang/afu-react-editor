import { ArrowLeft } from 'lucide-react'

import Button from '@/components/ui/button'
import { useEditorContext } from '@/fixtures/editor/context'

import { ContentEditorMap } from './components'

type Props = {
  id: string
}

export default function ContentEditor({ id }: Props) {
  const { state, dispatch } = useEditorContext()
  const content = state.contents.find(content => content.id === id)

  if (!content) {
    return (
      <section className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            dispatch({ type: 'setCurrentActive', payload: null })
          }}
        >
          Back
        </Button>
      </section>
    )
  }

  const ContentEditor = ContentEditorMap[content.type]

  return (
    <section className="grid gap-4">
      <div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            dispatch({ type: 'setCurrentActive', payload: null })
          }}
        >
          <ArrowLeft />
        </Button>
      </div>
      <ContentEditor
        properties={content.properties}
        onUpdate={properties => {
          dispatch({ type: 'update', payload: { id, properties } })
        }}
      />
    </section>
  )
}
