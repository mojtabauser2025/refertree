import { useUsers } from "@/hooks/useUsers";
import type { User } from "@/types/user";

export default function UsersPage() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {data.map((u: User) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}