import type { ContentProperties, ContentType } from '@/fixtures/editor/types'

import Image from './image'
import Text from './text'

export type CanvasComponentProps<T extends ContentType> = ContentProperties<T>

export const CanvasComponentMap: Record<
  ContentType,
  (props?: CanvasComponentProps<ContentType>) => JSX.Element
> = {
  image: Image,
  text: Text,
}

export { Image, Text }
