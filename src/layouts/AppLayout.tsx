import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/useUIStore";
import { Link } from "react-router-dom";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { dark, toggleDark } = useUIStore();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="h-14 border-b flex items-center justify-between px-4">
        
        {/* Left */}
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold">ReferTree</h1>

          <nav className="flex gap-3 text-sm">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
        </div>

        {/* Right */}
        <Button onClick={toggleDark}>
          {dark ? "Light" : "Dark"}
        </Button>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}