'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Only log on client side
    if (typeof window !== 'undefined') {
      console.error('Global error:', error);
    }
  }, [error]);
  
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              เกิดข้อผิดพลาด
            </h2>
            <p className="text-gray-600 mb-6">
              กรุณาลองใหม่อีกครั้ง หรือรีเฟรชหน้าเว็บ
            </p>
            <div className="space-x-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                onClick={() => reset()}
              >
                ลองใหม่
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                onClick={() => window.location.href = '/'}
              >
                กลับหน้าหลัก
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
