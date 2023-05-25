import Modal from '../../../components/Modal';

export default function RegisterContainer() {
  return (
    <div>
      <button className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide">
        Create new account
      </button>
      <Modal />
    </div>
  );
}
