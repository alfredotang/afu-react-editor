import { Color } from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { cn } from '@/helpers/class-name'

import Toolbar from './tool-bar'

type Props = {
  value?: string
  className?: string
  onChange?: (richText: string) => void
}

export default function RichTextField({
  className,
  value = '',
  onChange,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        spellcheck: 'true',
        class:
          'break-all rounded border border-border p-2 border-input focus:border-primary focus:ring-1 focus:ring-ring focus:outline-none min-h-48',
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
  })
  return (
    <div className={cn('grid gap-2', className)}>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
