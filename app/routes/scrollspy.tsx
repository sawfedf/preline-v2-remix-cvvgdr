import type { MetaFunction } from '@remix-run/node';

import ScrollspyItem from '~/components/ScrollspyItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Scrollspy.' },
    { name: 'description', content: 'Preline 2. Scrollspy.' },
  ];
};

export default function Scrollspy() {
  return (
    <div className="max-w-[500px]">
      <ScrollspyItem />
    </div>
  );
}
