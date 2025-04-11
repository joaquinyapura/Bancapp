import { SlReload } from "react-icons/sl";
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";

import { GrMoney } from "react-icons/gr";

export const Homepage = () => {
  return (
    <header className="text-black flex justify-center items-center w-full h-screen  ">
      <div className="w-full h-[700px] bg-gray-100 p-6">
        <h1 className="text-4xl font-bold">Hello, Cliente Nombre!</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-6">
          <div className="col-span-1 row-span-2  rounded-md h-[200px] bg-white  shadow-md">
            <div className="p-4">
              <h2>Cuenta única</h2>
              <p className="text-gray-600">123123-123123-23</p>
              <p className="text-3xl font-bold mb-2">$102.344.123,23</p>
              <p className="text-3xl font-bold mb-2">U$S 13,23</p>
              <div className="flex justify-between text-sm">
                <a
                  href="#"
                  className="flex items-center hover:text-sky-900 text-gray-700"
                >
                  <SlReload />
                  <p className=" ml-4 font-bold">ver movimientos</p>
                </a>
                <a
                  href="#"
                  className="flex items-center hover:text-sky-900 text-gray-700"
                >
                  <SlReload />
                  <p className=" ml-4 font-bold">CBU/Alias</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <BiTransfer className="text-sky-400 mr-2 text-2xl" />
                <p>Transferencias</p>
              </a>
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <IoWalletOutline className="text-sky-400 mr-2 text-2xl" />
                <p>Pago de servicios</p>
              </a>
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <GrMoney className="text-sky-400 mr-2 text-2xl" />
                <p>Prestamos</p>
              </a>
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <BiTransfer className="text-sky-400 mr-2 text-2xl" />
                <p>Transferencias</p>
              </a>
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <BiTransfer className="text-sky-400 mr-2 text-2xl" />
                <p>Transferencias</p>
              </a>
              <a
                href="#"
                className="shadow bg-white rounded-md flex items-center justify-center p-6 py-9 "
              >
                <BiTransfer className="text-sky-400 mr-2 text-2xl" />
                <p>Transferencias</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
