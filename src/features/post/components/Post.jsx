import PostHeader from './PostHeader';
import pbow from '../../../assets/pbow.jpg';

export default function Post() {
  return (
    <div className="bg-white rounded-lg border shadow px-4 py-3">
      <PostHeader />
      <div className="mb-3"></div>
      <div className="flex flex-col gap-4">
        <span>Hello my friend</span>
        <div className="-mx-4">
          <img src={pbow} alt="" />
        </div>
      </div>
      <div>Footere</div>
    </div>
  );
}
