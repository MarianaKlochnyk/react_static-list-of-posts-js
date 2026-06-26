import { PostInfo } from '../PostInfo';
import { CommentList } from '../CommentList';

export const PostList = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  </>
);
