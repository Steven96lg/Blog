import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  const ciberseguridadPosts = await getCollection("ciberseguridad");

  // Determinar el base path a partir de SITE (ej: https://user.github.io/blog -> /blog)
  const site = import.meta.env.SITE || "/";
  const base = site ? new URL(site).pathname.replace(/\/$/, "") : "";

  const allPosts = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      url: `${base}/post/${post.slug}`,
    })),
    ...ciberseguridadPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      url: `${base}/ciberseguridad/${post.slug}`,
    })),
  ];

  return new Response(
    JSON.stringify(allPosts),
    { headers: { "Content-Type": "application/json" } }
  );
}
