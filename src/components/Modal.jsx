/* eslint-disable react/prop-types */
const Modal = ({ showModal, setShowModal }) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={`w-full h-full flex items-center justify-center min-h-screen bg-gray-100 absolute top-0 left-0 bg-transparent z-10 ${showModal ? '':'hidden'}`}
    >
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This is a simple modal.</p>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded"
              onClick={() => setShowModal(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
