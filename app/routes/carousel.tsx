import type { MetaFunction } from '@remix-run/node';

import CarouselItem from '~/components/CarouselItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Carousel.' },
    { name: 'description', content: 'Preline 2. Carousel.' },
  ];
};

export default function Carousel() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Carousel 1</h2>
        <CarouselItem />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Carousel 2</h2>
        <CarouselItem />
      </div>
    </>
  );
}
