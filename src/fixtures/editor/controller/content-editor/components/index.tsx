import type { ContentProperties, ContentType } from '@/fixtures/editor/types'

import ImageEditor from './image-editor'
import StyleEditor from './style-editor'
import TextEditor from './text-editor'

export type ContentEditorProps<T extends ContentType> = {
  properties?: ContentProperties<T>
  onUpdate: (properties: ContentProperties<T>) => void
}

export const ContentEditorMap: Record<
  ContentType,
  (props: ContentEditorProps<ContentType>) => JSX.Element
> = {
  image: ImageEditor,
  text: TextEditor,
}

export { ImageEditor, StyleEditor, TextEditor }
