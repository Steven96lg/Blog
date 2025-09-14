import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts"); // depende cómo tengas tus posts
  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        url: `/post/${post.slug}`,
      }))
    ),
    { headers: { "Content-Type": "application/json" } }
  );
}
