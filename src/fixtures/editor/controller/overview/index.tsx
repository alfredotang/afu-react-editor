import { CONTENT_TYPES } from '@/fixtures/editor/constants'

import Creator from './creator'

export default function Overview() {
  return (
    <section className="grid gap-4">
      {CONTENT_TYPES.map(type => (
        <Creator key={type} type={type} />
      ))}
    </section>
  )
}
