import { Link } from 'react-router-dom';
import { RightFromBracketIcon } from '../icons';
import Avatar from '../components/Avatar';
import { useState, useRef, useEffect } from 'react';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1 bg-white border rounded-xl shadow-lg w-96 p-2">
          <Link to="/profile">
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg">
              <Avatar
                src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[3.75rem] w-[3.75rem]"
              />
              <div>
                <div className="font-semibold">Green Fai</div>
                <div className="text-gray-500 text-sm">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="border border-gray-300 m-2" />
          <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg">
            <div className="rounded-full bg-gray-300 h-9 w-9 flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <span className="text-sm font-semibold">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
}
