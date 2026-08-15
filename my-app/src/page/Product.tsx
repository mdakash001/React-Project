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
        }, 500);
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
    return <h2 className="text-center text-white">Loading....</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <p className="mt-2 text-lg text-white">
          Posts:{" "}
          <span className="font-bold text-white">{posts.length}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className=" bg-white p-6" >
            <h2 className="mb-3 text-xl font-bold text-gray-800">
              {post.title}
            </h2>
            <p className="mb-5 text-black">{post.body}</p>
            <button type="button" className=" text-black mt-2" >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
