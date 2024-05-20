import StyleSlider from '@/components/style-slider'
import ColorInput from '@/components/ui/color-input'

type Props = {
  style?: React.CSSProperties
  onUpdate: (style: React.CSSProperties) => void
}

export default function StyleEditor({ style, onUpdate }: Props) {
  return (
    <div className="space-y-4 rounded border border-input p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Color</span>
        <ColorInput
          value={style?.color}
          className="border"
          onChange={value => {
            onUpdate({ ...style, color: value })
          }}
        >
          <span
            style={{ backgroundColor: style?.color || 'black' }}
            className="text-transparent"
          >
            Color
          </span>
        </ColorInput>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">BgColor</span>
        <ColorInput
          className="border"
          value={style?.backgroundColor}
          onChange={value => {
            onUpdate({
              ...style,
              backgroundColor: value,
            })
          }}
        >
          <span
            style={{
              backgroundColor: style?.backgroundColor || 'white',
            }}
            className="text-transparent"
          >
            color
          </span>
        </ColorInput>
      </div>
      <StyleSlider
        label="paddingLeft"
        value={style?.paddingLeft}
        onChange={value => {
          onUpdate({ ...style, paddingLeft: value })
        }}
      />
      <StyleSlider
        label="PaddingRight"
        value={style?.paddingRight}
        onChange={value => {
          onUpdate({ ...style, paddingRight: value })
        }}
      />
      <StyleSlider
        label="PaddingTop"
        value={style?.paddingTop}
        onChange={value => {
          onUpdate({ ...style, paddingTop: value })
        }}
      />
      <StyleSlider
        label="PaddingBottom"
        value={style?.paddingBottom}
        onChange={value => {
          onUpdate({ ...style, paddingBottom: value })
        }}
      />
      <StyleSlider
        label="MarginLeft"
        value={style?.marginLeft}
        onChange={value => {
          onUpdate({ ...style, marginLeft: value })
        }}
      />
      <StyleSlider
        label="MarginRight"
        value={style?.marginRight}
        onChange={value => {
          onUpdate({ ...style, marginRight: value })
        }}
      />
      <StyleSlider
        label="MarginTop"
        value={style?.marginTop}
        onChange={value => {
          onUpdate({ ...style, marginTop: value })
        }}
      />
      <StyleSlider
        label="MarginBottom"
        value={style?.marginBottom}
        onChange={value => {
          onUpdate({ ...style, marginBottom: value })
        }}
      />
    </div>
  )
}
