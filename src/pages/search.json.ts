import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts"); // depende cómo tengas tus posts

  // Determinar el base path a partir de SITE (ej: https://user.github.io/blog -> /blog)
  const site = import.meta.env.SITE || "/";
  const base = site ? new URL(site).pathname.replace(/\/$/, "") : "";

  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        url: `${base}/post/${post.slug}`,
      }))
    ),
    { headers: { "Content-Type": "application/json" } }
  );
}
