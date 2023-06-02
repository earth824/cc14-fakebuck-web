import { toast } from 'react-toastify';
import CreatePostBox from './CreatePostBox';
import PostList from './PostList';
import axios from 'axios';

export default function PostContainer() {
  const createPost = async (message, file) => {
    const formData = new FormData();
    if (message) {
      formData.append('message', message);
    }
    if (file) {
      formData.append('image', file);
    }

    try {
      await axios.post('http://localhost:8888/posts', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessItem')
        }
      });
      // axios.post('/posts', formData)

      // update state posts
    } catch (err) {
      console.log(err);
      toast.error('Error create post');
    }
  };

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostBox createPost={createPost} />
      <PostList />
    </div>
  );
}
