import type { LinksFunction } from '@remix-run/node';
import { useEffect } from 'react';
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';

if (typeof window !== 'undefined') {
  require('preline/preline');
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th colspan="3">
                        <div class="flex justify-between mt-2 bg-red-700 p-2 text-white rounded-t">
                          <div class="flex">
                            <div class="ml-2">
                              <span class="inline-flex justify-center items-center size-[38px] rounded-full  text-white  dark:bg-blue-500">
                                <svg
                                  class="flex-shrink-0 size-4 text-yellow-500 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div class="ml-2">
                              KẾT QUẢ XỔ SỐ Miền Nam - 26/05/2024
                            </div>
                          </div>
                          <div class="flex text-xs">
                            <div>Xem bảng tỉnh...</div>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">
                        <div class="flex justify-between  pt-0 border-solid border-r-none border-2 border-brown-500">
                          <div class="flex text-center border-solid border-r border-brown-500 w-52 p-2 text-sm">
                            26/05/2024
                          </div>
                          <div class="flex justify-center text-blue-500 border-solid border-r border-brown-500 w-52 p-2">
                            Kiên Giang
                          </div>
                          <div class="flex justify-center text-blue-500 w-52 p-2">
                            Tiền Giang
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="border-none">
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-sm	border-solid border-r border-brown-500 w-52 p-2">
                        Giải Đặc Biệt
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737647
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737647
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-center text-sm	 border-solid border-r border-brown-500 w-52 p-2 capitalize">
                        Giải nhất
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-center text-sm	 border-solid border-r border-brown-500  p-2 w-52 capitalize">
                        Giải nhì
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalize">
                        Giải ba
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalize">
                        Giải tư
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500 capitalize">
                      <td class="flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalize">
                        Giải năm
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class=" flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalize">
                        Giải sáu
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class="flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalizee">
                        Giải bảy
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52 p-2">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            099
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            098
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            097
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            096
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            095
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            094
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            093
                          </p>
                          <p class="text-blacks-900 text-lg font-bold ml-2">
                            {' '}
                            092
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="flex justify-between  border-solid border-r-none border-t-0 border-2 border-brown-500">
                      <td class="flex text-center text-sm	 border-solid border-r border-brown-500 w-52  p-2 capitalize">
                        Giải tám
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737647
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                        </div>
                      </td>
                      <td class="border-solid border-r border-brown-500 w-52">
                        <div class="flex flex-wrap justify-center">
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737647
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                          <p class="text-red-900 text-lg font-bold ml-2">
                            {' '}
                            737646
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <div className="hs-dropdown [--strategy:static]">
          <button
            type="button"
            className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500"
          >
            Mega Menu
            <svg
              className="ml-2 w-2.5 h-2.5 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
            <div className="sm:grid sm:grid-cols-3">
              <div className="flex flex-col">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  About
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Customer Story
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Careers: Overview
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Careers: Apply
                </a>
              </div>

              <div className="flex flex-col">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Log In
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
