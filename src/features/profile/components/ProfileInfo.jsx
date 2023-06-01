import Avatar from '../../../components/Avatar';
import MeAction from './MeAction';

export default function ProfileInfo() {
  return (
    <div className="flex items-end gap-4 px-4 pb-4">
      <div className="-mt-8">
        <Avatar
          src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[10.5rem] w-[10.5rem] ring ring-white"
        />
      </div>

      <div className="flex-1 mb-4">
        <h2 className="text-3xl font-bold">Green FAi</h2>
        <span className="block text-gray-500 py-1 font-semibold">
          2 friends
        </span>
        <div className="flex -space-x-2">
          <Avatar
            src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[2rem] w-[2rem] ring-2 ring-white"
          />
          <Avatar
            src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[2rem] w-[2rem] ring-2 ring-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <MeAction />
      </div>
    </div>
  );
}
