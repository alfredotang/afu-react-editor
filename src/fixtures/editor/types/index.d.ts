import { CONTENT_TYPES } from '@/fixtures/editor/constants'

export type ContentType = (typeof CONTENT_TYPES)[number]

export type TextProperties = {
  style?: React.CSSProperties
  text?: string
}

export type ImageItemProperties = {
  width?: string
  height?: string
  alt?: string
  src?: string
  style?: React.CSSProperties
}

export type ImageProperties = {
  style?: React.CSSProperties
  children?: Array<ImageItemProperties>
}

export type ContentProperties<T extends ContentType> = T extends 'text'
  ? TextProperties
  : T extends 'image'
    ? ImageProperties
    : never

export type Content = {
  type: ContentType
  id: string
  properties?: ContentProperties<ContentType>
}
