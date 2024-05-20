import type { Editor } from '@tiptap/react'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HighlighterIcon,
  ItalicIcon,
  PaletteIcon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react'

import Button from '@/components/ui/button'
import ColorInput from '@/components/ui/color-input'
import Toggle from '@/components/ui/toggle'

type Props = { editor: Editor | null }

export default function Toolbar({ editor }: Props) {
  if (!editor) return null
  return (
    <div className="flex flex-wrap items-center gap-1 rounded border border-border p-2">
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 1 }).run()
        }}
      >
        <Heading1Icon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }}
      >
        <Heading2Icon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 3 })}
        onPressedChange={() => {
          editor?.chain().focus().toggleHeading({ level: 3 }).run()
        }}
      >
        <Heading3Icon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => {
          editor?.chain().focus().toggleBold().run()
        }}
      >
        <BoldIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => {
          editor?.chain().focus().toggleItalic().run()
        }}
      >
        <ItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => {
          editor?.chain().focus().toggleStrike().run()
        }}
      >
        <StrikethroughIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('underline')}
        onPressedChange={() => {
          editor?.chain().focus().toggleUnderline().run()
        }}
      >
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: 'left' })}
        onPressedChange={() => {
          editor.isActive({ textAlign: 'left' })
            ? editor?.chain().focus().unsetTextAlign().run()
            : editor?.chain().focus().setTextAlign('left').run()
        }}
      >
        <AlignLeftIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: 'center' })}
        onPressedChange={() => {
          editor.isActive({ textAlign: 'center' })
            ? editor?.chain().focus().unsetTextAlign().run()
            : editor?.chain().focus().setTextAlign('center').run()
        }}
      >
        <AlignCenterIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive({ textAlign: 'right' })}
        onPressedChange={() => {
          editor.isActive({ textAlign: 'right' })
            ? editor?.chain().focus().unsetTextAlign().run()
            : editor?.chain().focus().setTextAlign('right').run()
        }}
      >
        <AlignRightIcon className="h-4 w-4" />
      </Toggle>
      <ColorInput
        onChange={value => editor.chain().focus().setColor(value).run()}
        value={editor.getAttributes('textStyle').color}
      >
        <PaletteIcon className="h-4 w-4" />
      </ColorInput>
      <ColorInput
        onChange={value =>
          editor.chain().focus().setHighlight({ color: value }).run()
        }
        value={editor.getAttributes('mark').color}
      >
        <HighlighterIcon className="h-4 w-4" />
      </ColorInput>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          editor.chain().focus().unsetAllMarks().setTextAlign('left').run()
        }}
      >
        <RemoveFormattingIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
