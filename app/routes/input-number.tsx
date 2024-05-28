import type { MetaFunction } from '@remix-run/node';

import InputNumberItem from '~/components/InputNumberItem';

export const meta: MetaFunction = () => {
  return [
    { title: 'Preline 2. Input Number.' },
    { name: 'description', content: 'Preline 2. Input Number.' },
  ];
};

export default function InputNumber() {
  return (
    <>
      <div className="mb-10">
        <h2 className="mb-2">Input Number 1</h2>
        <InputNumberItem />
      </div>
      <div className="mb-10">
        <h2 className="mb-2">Input Number 2</h2>
        <InputNumberItem />
      </div>
    </>
  );
}
