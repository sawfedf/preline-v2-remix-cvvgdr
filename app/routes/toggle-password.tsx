import type { MetaFunction } from '@remix-run/node';

import TogglePasswordItem from '~/components/TogglePasswordItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Toggle Password.' },
    { name: 'description', content: 'Preline 2. Toggle Password.' },
  ];
};

export default function TogglePassword() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Toggle Password 1</h2>
        <TogglePasswordItem groupId="first-group" />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Toggle Password 2</h2>
        <TogglePasswordItem groupId="second-group" />
      </div>
    </>
  );
}
