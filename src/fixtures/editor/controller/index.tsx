import { useEditorContext } from '@/fixtures/editor/context'

import ContentEditor from './content-editor'
import Overview from './overview'

export default function Controller() {
  const { state } = useEditorContext()
  return (
    <aside className="mb-8 h-full w-full overflow-y-scroll p-8">
      {state.currentActive ? (
        <ContentEditor key={state.currentActive} id={state.currentActive} />
      ) : (
        <Overview />
      )}
    </aside>
  )
}
