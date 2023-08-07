import React from "react";
import AlertDanger from "../../assets/alert-octagon.png"

function ModalDelete({ showModal, setShowModal, idDelete, setIdDelete, nameDelete, setNameDelete }) {
  // const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w- auto my-6 mx-auto max-w-3xl w-96">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none ">

                {/*body*/}
                <div className="relative p-6 flex flex-col items-center p-">
                  <img src={AlertDanger} alt="" className="w-32" />
                  <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                    ستقوم بحذف معرض
                  </p>
                  <p className=" text-red-600 text-lg leading-relaxed">
                    {nameDelete}
                  </p>
                  <p className=" text-slate-500 text-lg leading-relaxed">
                    هل انت متأكد من اتمام عملية الحذف
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 ">
                  <button
                    className=" bg-[#E62626] text-white font-bold uppercase text-sm px-7 py-3 rounded shadow hover:shadow-sm outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    نعم
                  </button>

                  <button
                    className="bg-[#eae8e8] font-bold uppercase px-7 py-3 text-sm shadow hover:shadow-sm outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    لا
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalDelete