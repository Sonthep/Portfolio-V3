'use client';
export default function Error({ error }: { error: Error }) {
  console.error('RSC Error >>>', error);
  return <html><body>เกิดข้อผิดพลาด</body></html>;
}
