import type { MetaFunction } from '@remix-run/node';

import RemoveElementItem from '~/components/RemoveElementItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Remove Element.' },
    { name: 'description', content: 'Preline 2. Remove Element.' },
  ];
};

export default function RemoveElement() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Remove Element 1</h2>
        <RemoveElementItem contentId="remove-element-1" />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Remove Element 2</h2>
        <RemoveElementItem contentId="remove-element-2" />
      </div>
    </>
  );
}
