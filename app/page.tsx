'use client';
import Link from 'next/link';
import {httpURL} from "@/app/config";
export default function Page() {
  async function handleCalculate() {
    const orderedItemsInput = document.getElementById('ordered-items-input') as HTMLInputElement | null;
    const packSizesInput = document.getElementById('pack-sizes-input') as HTMLInputElement | null;
    const resultInput = document.getElementById('result-input') as HTMLInputElement | null;

    if (orderedItemsInput && packSizesInput) {
      const orderedItemsStr = orderedItemsInput.value;
      const packSizesStr = packSizesInput.value.split(",");

      const orderedItemsInt = parseInt(orderedItemsStr, 10);
      const packSizesInt = packSizesStr.map(str => {
        return parseInt(str, 10);
      });

      console.log('Ordered Items:', orderedItemsInt);
      console.log('Pack sizes:', packSizesInt);

      if (orderedItemsInt && packSizesInt) {
        try {
          const response = await fetch(httpURL + '/task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "items_ordered": orderedItemsInt,
              "pack_sizes": packSizesInt,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Data saved successfully:', data);
            if (resultInput) {
              resultInput.value = data?.result.toString();
            } else {
              console.error('resultInput is null or undefined');
            }
          } else {
            console.error('Failed to save data. Status:', response.status);
          }
        } catch (error) {
          console.error('Error while saving data:', error);
        }
      } else {
        if (resultInput) {
          resultInput.value = "Input elements not found";
        } else {
          console.error('resultInput is null or undefined');
        }
        console.error('Input elements not found');
      }
      }
  }

  return (
      <form>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="rounded-lg bg-gray-50 px-16 py-14">
            <div className="flex justify-center">
              <div className="rounded-full bg-gray-200 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-4">
                  <img src="https://static.wixstatic.com/media/8849f2_ad48e10facdd45a3b86d956cce6c8805~mv2.png/v1/crop/x_383,y_211,w_1054,h_1341/fill/w_120,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20in%20colour.png" alt="Logo in colour.png"  width="60" height="71" srcSet="https://static.wixstatic.com/media/8849f2_ad48e10facdd45a3b86d956cce6c8805~mv2.png/v1/crop/x_383,y_211,w_1054,h_1341/fill/w_120,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20in%20colour.png" fetchPriority="high"></img>
                </div>
              </div>
            </div>
            <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Calculate Packs</h3>
            <p className="text-center font-normal text-gray-600">This is solution for Re-Partners challenge</p>
            <div className={"inline-flex justify-center w-[100%]"}>
              <button  className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
                <a href="https://kiyali.kz/swagger/index.html" target={"_blank"}>Swagger</a>
              </button>
            </div>

            <div className="relative flex flex-nowrap items-stretch mt-10">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-900 dark:placeholder:text-neutral-200"
                        id="ordered-items-addon-wrapping">
                      Ordered Items
                    </span>
              <input
                  id="ordered-items-input"
                  type="text"
                  className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="e.g. 100"
                  aria-label="ordered-items"
                  required
                  aria-describedby="ordered-items-addon-wrapping" />
            </div>
            <div className="relative flex flex-nowrap items-stretch mt-2">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-900 dark:placeholder:text-neutral-200"
                        id="pack-sizes-addon-wrapping">
                      Pack sizes
                    </span>
              <input
                  id="pack-sizes-input"
                  type="text"
                  className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="e.g. 10,20,10,1"
                  aria-label="pack-sizes"
                  required
                  aria-describedby="pack-sizes-addon-wrapping" />
            </div>
            <button onClick={handleCalculate} type="button" className="mx-auto mt-3 block rounded-xl border-4 border-transparent bg-blue-700 px-6 py-1 text-center text-base font-medium text-blue-100 outline-8 hover:outline hover:duration-300">
              Calculate
            </button>

            <div className="relative flex flex-nowrap items-stretch mt-2">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-900 dark:placeholder:text-neutral-200"
                        id="pack-sizes-addon-wrapping">
                      Result
                    </span>
              <textarea
                  id="result-input"
                  className="h-40 relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  aria-label="result-input"
                  required
                  disabled
                  aria-describedby="result-input-addon-wrapping" />
            </div>
          </div>
        </div>
      </form>
  );
}