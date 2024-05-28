import type { MetaFunction } from '@remix-run/node';

import OverlayItem from '~/components/OverlayItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Overlay.' },
    { name: 'description', content: 'Preline 2. Overlay.' },
  ];
};

export default function Overlay() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Overlay 1</h2>
        <OverlayItem
          contentId="overlay-1"
          title="Overlay 1"
          content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
        />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Overlay 2</h2>
        <OverlayItem
          contentId="overlay-2"
          title="Overlay 2"
          content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
        />
      </div>
    </>
  );
}
