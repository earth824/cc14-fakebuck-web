import { ImageIcon } from '../../../icons';

export default function PostForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <textarea
          className="block w-full resize-none outline-none"
          rows="5"
          placeholder="What&rsquo;s on your mind, Jeo"
        />
        <div className="bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center flex-col py-12">
          <div className="rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center">
            <ImageIcon />
          </div>
          <span>Add photo</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-white text-sm rounded-md w-full h-9 font-semibold">
          Post
        </button>
      </div>
    </form>
  );
}
