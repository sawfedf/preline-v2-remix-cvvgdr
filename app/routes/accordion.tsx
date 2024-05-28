import type { MetaFunction } from '@remix-run/node';

import AccordionGroup from '~/components/AccordionGroup';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Accordion.' },
    { name: 'description', content: 'Preline 2. Accordion.' },
  ];
};

export default function Accordion() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Accordion Group 1</h2>
        <AccordionGroup />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Accordion Group 2</h2>
        <AccordionGroup />
      </div>
    </>
  );
}
