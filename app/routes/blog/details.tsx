import ReactMarkdown from "react-markdown";
import type { Route } from "./+types";
import type { Post, StrapiPost, StrapiResponse } from "~/types";
import type { BlogPostDeatilsProps } from "~/types";
import { Link } from "react-router";

export async function loader({
  request,
  params,
}: Route.LoaderArgs & { params: { slug?: string } }) {
  console.log("params: ", params);

  const { slug } = params;
  console.log("slug: ", slug);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length) throw new Response("Not found", { status: 404 });

  // Dynamically import raw markdown
  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/images/n-image.png",
  };

  return {
    post,
  };
}

const BlogPostDetailPage = ({ loaderData }: BlogPostDeatilsProps) => {
  const { post } = loaderData;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.date).toDateString()}
      </p>

      <img src={post.image} alt={post.title} className="w-full h-64 mb-4" />

      <div className="prose prose-invert max-w-none mb-12">
        <ReactMarkdown>{post?.body}</ReactMarkdown>
      </div>
      <Link
        to="/blog"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back To Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailPage;
