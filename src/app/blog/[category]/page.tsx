/**
 * 포스트 전체 개요 페이지
 *
 * 실제 포스트 상세는 [slug] 하위 디렉토리로
 */

import PostListPage from "@/components/post_list/PostListPage";
import {
    getAllPostCount,
    getCategoryDetailList,
    getPostPaths,
    getSortedPostList,
    parsePostAbstract,
} from "@/lib/posts";

type Props = {
    params: { category: string };
};

const CategoryPage = async ({ params: { category } }: Props) => {
    const postList = await getSortedPostList(category);
    const categoryList = getCategoryDetailList();
    const allPostCount = await getAllPostCount();

    return (
        <PostListPage
            category={category}
            postList={postList}
            categoryList={categoryList}
            allPostCount={allPostCount}
        />
    );
};

export default CategoryPage;
