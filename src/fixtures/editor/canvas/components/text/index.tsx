import type { CanvasComponentProps } from '@/fixtures/editor/canvas/components'

export default function Text(props?: CanvasComponentProps<'text'>) {
  return (
    <div
      style={{ minHeight: '24px', ...props?.style }}
      dangerouslySetInnerHTML={{
        __html: props?.text || '',
      }}
    />
  )
}
