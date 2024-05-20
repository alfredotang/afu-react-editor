import { useRef, useState } from 'react'

import Button from '@/components/ui/button'
import { cn } from '@/helpers/class-name'

type Props = {
  className?: string
  children?: React.ReactNode
  value?: string
  onChange?: (color: string) => void
}

export default function ColorInput({
  className,
  value = '#000000',
  children,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [color, setColor] = useState(value)

  return (
    <Button
      className={cn(className)}
      onClick={() => {
        inputRef.current?.click()
      }}
      size="sm"
      variant="ghost"
    >
      <label>{children}</label>
      <input
        ref={inputRef}
        type="color"
        className="invisible absolute"
        value={color}
        onChange={() => {
          setColor(inputRef.current?.value || '')
          onChange?.(inputRef.current?.value || '')
        }}
      />
    </Button>
  )
}
