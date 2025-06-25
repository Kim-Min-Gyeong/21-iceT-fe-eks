import { formatDate } from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';
import { convertEnglishCategoryToKorean } from '@/utils/doMappingCategories';
import { Post } from '../types/post';

interface IPostItemProps {
  post: Post;
}

const PostItem = ({ post }: IPostItemProps) => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate(`/post/${post.postId}`);
  };

  return (
    <div
      onClick={onClickPost}
      className="bg-surface p-4 border-b border-border cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-wrap gap-1 mb-2">
        {post.categories.map(category => (
          <span
            key={category.categoryId}
            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-xl text-xs font-medium"
          >
            {convertEnglishCategoryToKorean(category.categoryName)}
          </span>
        ))}
      </div>
      {/* 제목 */}
      <h3 className="text-base font-semibold text-text-primary mb-2 line-clamp-2 flex items-start gap-2">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium shrink-0">
          #{post.problemNumber}
        </span>
        <span>{post.title}</span>
      </h3>
      {/* 하단 정보 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-secondary">{post.author.nickname}</span>
          <span className="text-xs text-text-secondary">·</span>
          <span className="text-xs text-text-secondary">{formatDate(post.createdAt)}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className={`text-xs ${post.likeCount ? 'text-red-500' : 'text-text-secondary'}`}>
              {post.likeCount ? '❤️' : '🤍'}
            </span>
            <span className="text-xs text-text-secondary">{post.likeCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-text-secondary">💬</span>
            <span className="text-xs text-text-secondary">{post.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
