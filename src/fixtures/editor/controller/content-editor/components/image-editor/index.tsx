import { PlusIcon } from 'lucide-react'

import Button from '@/components/ui/button'
import type { ContentEditorProps } from '@/fixtures/editor/controller/content-editor/components'
import { StyleEditor } from '@/fixtures/editor/controller/content-editor/components'

import ImageItemEditor from './image-item-editor'

export default function ImageEditor({
  properties,
  onUpdate,
}: ContentEditorProps<'image'>) {
  return (
    <div className="grid gap-4">
      <StyleEditor
        style={properties?.style}
        onUpdate={style => {
          onUpdate({ ...properties, style })
        }}
      />
      <div>
        <Button
          size="sm"
          className="mb-2"
          onClick={() => {
            onUpdate({
              children: [
                ...(properties?.children || []),
                { src: '', alt: '', width: '', height: '', style: {} },
              ],
            })
          }}
        >
          <PlusIcon />
        </Button>
        <div className="space-y-4 pl-4">
          {properties?.children?.map((item, index) => (
            <ImageItemEditor
              key={index}
              properties={item}
              onUpdate={value => {
                onUpdate({
                  children: properties?.children?.map((child, i) =>
                    i === index ? value : child
                  ),
                })
              }}
              onRemoveItem={() => {
                onUpdate({
                  children: properties?.children?.filter((_, i) => i !== index),
                })
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
