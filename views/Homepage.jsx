import { SlReload } from "react-icons/sl";

export const Homepage = () => {
  return (
    <header className="text-black flex justify-center items-center w-full h-screen  ">
      <div className="w-full h-[700px] bg-gray-100 p-6">
        <h1 className="text-4xl font-bold">Hello, Cliente Nombre!</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-6">
          <div className="col-span-1 row-span-2  rounded-md h-[200px] bg-white">
            <div className="p-4">
              <h2>Cuenta única</h2>
              <p className="text-gray-600">123123-123123-23</p>
              <p className="text-3xl font-bold mb-2">$102.344.123,23</p>
              <p className="text-3xl font-bold mb-2">U$S 13,23</p>
              <div className="flex justify-between text-md">
                <div className="flex items-center">
                  <SlReload />
                  <p>ver movimientos</p>
                </div>
                <div className="flex items-center">
                  <SlReload />
                  <p>CBU/Alias</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-2 bg-sky-500">
            <div className="grid grid-cols-3 gap-2 ">
              <div className="bg-sky-200">ITEM</div>
              <div className="bg-sky-200">ITEM</div>
              <div className="bg-sky-200">ITEM</div>
              <div className="bg-sky-200">ITEM</div>
              <div className="bg-sky-200">ITEM</div>
              <div className="bg-sky-200">ITEM</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
