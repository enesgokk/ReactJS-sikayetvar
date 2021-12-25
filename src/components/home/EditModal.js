import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { updatePost } from "../../services/homeServices";

const EditModal = ({open,setOpen,postData}) => {

  const cancelButtonRef = useRef(null);
  const titleRef=useRef();
  const bodyRef=useRef();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full align-bottom pb-4 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white pt-5 pb-6 border-b ">
                <div className="w-full sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="flex items-center justify-between text-lg leading-6 font-medium text-gray-900 border-b pb-5 px-10"
                    >
                      <div>Düzenle</div>
                      <XIcon 
                      className="w-5 cursor-pointer"
                      onClick={()=>setOpen(false) }
                      
                      />
                    </Dialog.Title>
                    <div className="mt-5 px-10 w-full">
                      <div className="flex flex-col">
                        <label className="text-gray-700 font-medium" htmlFor="">Title</label>
                        <input ref={titleRef} className="border rounded-md outline-none py-2 px-4 text-gray-400" type="text" />
                      </div>
                      <div className="flex flex-col mt-4">
                        <label className="text-gray-700 font-medium" htmlFor="">Body</label>
                        <textarea ref={bodyRef} className="border rounded-md outline-none py-2 px-4 text-gray-400 max-h-24" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex mt-6 ">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-500 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-md"
                  onClick={async() => await updatePost(postData[0],titleRef.current.value,bodyRef.current.value,postData[1]) }
                >
                  GÜNCELLE
                </button>  
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditModal;
