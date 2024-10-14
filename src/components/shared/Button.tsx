"use client";

import { useRouter } from "next/navigation";

const Button: React.FC<{ url: string; label: string }> = ({ url, label }) => {
  const router = useRouter();
  return (
    <button
      className="bg-slate-300 px-6 py-3 rounded-lg font-medium transition duration-300 text-black"
      onClick={() => router.push(url)}
    >
      {label}
    </button>
  );
};

export default Button;
