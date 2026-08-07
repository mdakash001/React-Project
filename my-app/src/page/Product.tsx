import { useEffect, useState } from "react";

type PostItem = {
  id: number;
  title: string;
  body: string;
};

type PostProps = {
  numOfPost?: number;
};

function Post({ numOfPost = 3 }: PostProps) {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numOfPost}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data: PostItem[]) => {
        if (cancelled) return;
        setPosts(data);
        timer = setTimeout(() => {
          if (!cancelled) setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [numOfPost]);

  if (loading) {
    return <h1>Posts is loading....</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <p className="mt-2 text-lg text-white-600">
          Posts:{" "}
          <span className="font-bold text-black-600">{posts.length}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full px-3 py-1 text-sm font-semibold text-black-700">
                Post #{post.id}
              </span>
            </div>

            <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-800">
              {post.title}
            </h2>

            <p className="mb-5 line-clamp-4 text-gray-600">{post.body}</p>

            <button
              type="button"
              className="rounded-lg bg-black-600 px-4 py-2 text-white transition hover:bg-black-700"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
