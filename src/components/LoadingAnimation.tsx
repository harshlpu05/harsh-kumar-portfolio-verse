
import { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-blue-light border-r-purple border-b-orange border-l-blue-light rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-transparent border-l-purple rounded-full animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold font-heading">
            <span className="text-blue-light">H</span>
            <span className="text-purple">K</span>
          </span>
        </div>
      </div>
    </div>
  );
}
