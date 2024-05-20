import { XIcon } from 'lucide-react'

import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { StyleEditor } from '@/fixtures/editor/controller/content-editor/components'
import type { ImageItemProperties } from '@/fixtures/editor/types'

type Props = {
  properties: ImageItemProperties
  onRemoveItem: () => void
  onUpdate: (properties: ImageItemProperties) => void
}

export default function ImageEditor({
  properties,
  onRemoveItem,
  onUpdate,
}: Props) {
  return (
    <div className="relative grid gap-4 rounded border p-4">
      <Button
        size="sm"
        variant="ghost"
        className="absolute -right-2 -top-2 h-6 w-6 rounded-full border bg-background p-1"
        onClick={onRemoveItem}
      >
        <XIcon className="h-4 w-4" />
      </Button>
      <StyleEditor
        style={properties.style}
        onUpdate={style => {
          onUpdate({ ...properties, style })
        }}
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm">src</label>
        <Input
          value={properties?.src}
          onChange={event => {
            onUpdate({ ...properties, src: event.target.value })
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">alt</label>
        <Input
          value={properties?.alt}
          onChange={event => {
            onUpdate({ ...properties, alt: event.target.value })
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">width</label>
        <Input
          value={properties?.width}
          onChange={event => {
            onUpdate({ ...properties, width: event.target.value })
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">height</label>
        <Input
          value={properties?.height}
          onChange={event => {
            onUpdate({ ...properties, height: event.target.value })
          }}
        />
      </div>
    </div>
  )
}
