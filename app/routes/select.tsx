import type { MetaFunction } from '@remix-run/node';

import SelectItem from '~/components/SelectItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Select.' },
    { name: 'description', content: 'Preline 2. Select.' },
  ];
};

export default function Select() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Select 1</h2>
        <SelectItem />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Select 2</h2>
        <SelectItem />
      </div>
    </>
  );
}
