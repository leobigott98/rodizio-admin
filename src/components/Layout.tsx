import Sidebar from "@/src/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto bg-background-light dark:bg-background-dark lg:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
