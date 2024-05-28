import type { MetaFunction } from '@remix-run/node';

import TabsItem from '~/components/TabsItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Tabs.' },
    { name: 'description', content: 'Preline 2. Tabs.' },
  ];
};

export default function Tabs() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Tabs 1</h2>
        <TabsItem groupId="first-group" />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Tabs 2</h2>
        <TabsItem groupId="second-group" />
      </div>
    </>
  );
}
