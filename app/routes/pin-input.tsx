import type { MetaFunction } from '@remix-run/node';

import PinInputItem from '~/components/PinInputItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Pin Input.' },
    { name: 'description', content: 'Preline 2. Pin Input.' },
  ];
};

export default function PinInput() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Pin Input 1</h2>
        <PinInputItem />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Pin Input 2</h2>
        <PinInputItem />
      </div>
    </>
  );
}
