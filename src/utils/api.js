import { connectToDatabase } from './db';

export async function getRecentPosts() {
  const db = await connectToDatabase();
  const posts = await db.collection('posts')
    .find()
    .sort({ createdAt: -1 })
    .limit(3)
    .toArray();

  return posts.map((post) => ({
    _id: post._id.toString(),
    title: post.title,
    description: post.description,
    image: post.image,
    categories: post.categories,
    url: `/post/${post._id}`,
    createdAt: post.createdAt,
  }));
}