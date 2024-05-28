import type { MetaFunction } from '@remix-run/node';

import DropdownItem from '~/components/DropdownItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Dropdown.' },
    { name: 'description', content: 'Preline 2. Dropdown.' },
  ];
};

export default function Dropdown() {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <h2 className="mb-2">Dropdown 1</h2>
          <DropdownItem title="Action" />
        </div>
        <div>
          <h2 className="mb-2">Dropdown 2</h2>
          <DropdownItem title="Action" />
        </div>
      </div>
    </>
  );
}
