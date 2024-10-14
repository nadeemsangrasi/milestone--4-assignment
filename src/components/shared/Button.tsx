"use client";

import { useRouter } from "next/navigation";

const Button: React.FC<{
  className?: string;
  label: string;
  url: string;
}> = ({ label, className, url }) => {
  const router = useRouter();
  return (
    <button
      className={`${className} bg-black px-6 py-3 rounded-lg font-medium  transition-colors cursor-pointer text-white`}
      onClick={() => router.push(url)}
    >
      {label}
    </button>
  );
};

export default Button;
