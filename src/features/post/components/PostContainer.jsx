import { toast } from 'react-toastify';
import CreatePostBox from './CreatePostBox';
import PostList from './PostList';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PostContainer() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const fetchPost = async () => {
    const res = await axios.get('http://localhost:8888/posts/friends', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    setPosts(res.data.posts);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const createPost = async (message, file) => {
    const formData = new FormData();
    if (message) {
      formData.append('message', message);
    }
    if (file) {
      formData.append('image', file);
    }

    try {
      const res = await axios.post('http://localhost:8888/posts', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      const postsAfterCreated = [res.data.post, ...posts];
      setPosts(postsAfterCreated);
      // await fetchPost();
    } catch (err) {
      console.log(err);
      toast.error('Error create post');
    }
  };

  return (
    <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
      <CreatePostBox createPost={createPost} />
      <PostList posts={posts} />
    </div>
  );
}
