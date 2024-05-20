import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { CanvasComponentProps } from '@/fixtures/editor/canvas/components'

export default function Image(props?: CanvasComponentProps<'image'>) {
  return (
    <div style={{ ...props?.style }}>
      <Carousel className="w-full">
        <CarouselContent>
          {props?.children?.map((item, index) => (
            <CarouselItem key={index}>
              <div style={{ ...item?.style }}>
                <img
                  width={item.width}
                  height={item.height}
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
