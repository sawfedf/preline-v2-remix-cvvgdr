import type { MetaFunction } from '@remix-run/node';

import TooltipItem from '~/components/TooltipItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Tooltip.' },
    { name: 'description', content: 'Preline 2. Tooltip.' },
  ];
};

export default function Tooltip() {
  return <TooltipItem />;
}
