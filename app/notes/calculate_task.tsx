'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CalculateTask() {
  const [itemsOrdered, setItemsOrdered] = useState(0);
  const [packSizes, setPackSizes] = useState([]);
  const [result, setResult] = useState([]);

  const router = useRouter();

  const create = async() => {

    await fetch('http://localhost:4000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "itemsOrdered": itemsOrdered,
        "packSizes": packSizes,
      }),
    });

    // setItemsOrdered(0);
    // setPackSizes([]);

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Calculate Packs</h3>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Hello.</strong> This is solution for Re-Partners challenge{' '}
            {/* <a href="https://kiyali.kz/swagger/index.html" className="text-blue-500">
              Link to swagger
            </a>
            , brought to you by Vercel. */}
          </p>
          <Link
            href="https://kiyali.kz/swagger/index.html"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Swagger</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
      <input
        type="text"
        placeholder="Items Ordered"
        value={itemsOrdered}
        onChange={(e) => setItemsOrdered(parseInt(e.target.value))}
      />
      <input
        placeholder="Pack Sizes"
        value={packSizes}
        onChange={(e) => setPackSizes(JSON.parse("[" + e.target.value + "]"))}
      />
      <button type="submit">
        Calculate
      </button>
      <text>
        {result}
      </text>
    </form>
  );
}