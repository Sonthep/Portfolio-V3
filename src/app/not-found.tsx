import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#000000'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#374151'
        }}>
          Page Not Found
        </h2>
        <p style={{
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            fontWeight: '500',
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
