import { useDrag } from 'react-dnd'

import { Card } from '@/components/ui/card'
import type { ContentType } from '@/fixtures/editor/types'
import { cn } from '@/helpers/class-name'

type Props = {
  type: ContentType
}

export default function Creator({ type }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <Card
      ref={drag}
      className={cn('cursor-pointer p-4 text-center hover:shadow', {
        'opacity-40': isDragging,
      })}
    >
      {type}
    </Card>
  )
}
