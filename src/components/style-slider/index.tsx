import { useState } from 'react'

import Slider from '@/components/ui/slider'

type Props = {
  label: React.ReactNode
  value?: number | string
  onChange?: (value: number) => void
}

export default function StyleSlider({ label, value = 0, onChange }: Props) {
  const [range, setRange] = useState([Number(value) || 0])
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm">{label}</label>
      <Slider
        value={range}
        onValueChange={_value => {
          setRange(_value)
          onChange?.(_value[0])
        }}
      />
    </div>
  )
}
