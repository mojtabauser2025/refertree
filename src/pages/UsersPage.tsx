import { useUsers } from "@/hooks/useUsers";

export default function UsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {data.map((u: any) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}