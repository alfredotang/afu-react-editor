import RichTextField from '@/components/rich-text-field'
import type { ContentEditorProps } from '@/fixtures/editor/controller/content-editor/components'
import { StyleEditor } from '@/fixtures/editor/controller/content-editor/components'

export default function TextEditor({
  properties,
  onUpdate,
}: ContentEditorProps<'text'>) {
  return (
    <div className="grid gap-4">
      <StyleEditor
        style={properties?.style}
        onUpdate={style => {
          onUpdate({ ...properties, style })
        }}
      />
      <RichTextField
        value={properties?.text}
        onChange={value => {
          onUpdate({ text: value })
        }}
      />
    </div>
  )
}
