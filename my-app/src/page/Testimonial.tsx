import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
};

type UsersProps = {
  endpointApi?: string;
  numOfUsers?: number;
};

function Users({ endpointApi = "users", numOfUsers = 6 }: UsersProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    setLoading(true);

    fetch(
      `https://jsonplaceholder.typicode.com/${endpointApi}?_limit=${numOfUsers}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data: User[]) => {
        if (cancelled) return;
        setUsers(data);
        timer = setTimeout(() => {
          if (!cancelled) setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [endpointApi, numOfUsers]);

  if (loading) {
    return <h1>Users is loading, please wait...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Users Directory</h1>
        <p className="mt-2 text-lg text-gray-600">
          Total Users:
          <span className="ml-2 rounded-full bg-black-600 px-3 py-1 text-white">
            {users.length}
          </span>
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black-600 text-2xl font-bold text-white">
              {user.name.charAt(0)}
            </div>

            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>

            <p className="mt-1 text-gray-500">@{user.username}</p>

            <hr className="my-4" />

            <div className="mb-2">
              <span className="font-semibold text-gray-700"> Phone:</span>
              <p className="text-gray-600">{user.phone}</p>
            </div>

            <div className="mb-5">
              <span className="font-semibold text-gray-700">Website:</span>
              <br />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-600 hover:underline"
              >
                {user.website}
              </a>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-black-600 py-2 text-white transition hover:bg-black-700"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
