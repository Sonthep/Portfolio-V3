'use client'

import { useEffect, useState } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Log the error to an error reporting service
    if (typeof window !== 'undefined') {
      console.error('Page Error:', error);
    }
  }, [error]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900" suppressHydrationWarning>
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            เกิดข้อผิดพลาด
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            กรุณาลองรีเฟรชหน้าเว็บหรือติดต่อผู้ดูแลระบบ
          </p>
        </div>
        <div className="space-x-4">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            onClick={() => reset()}
          >
            ลองใหม่
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
          >
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    </div>
  )
}
