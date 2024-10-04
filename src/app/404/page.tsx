import Link from 'next/link';
import Image from 'next/image';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={cairo.className}
        style={{ margin: 0, padding: 0, lineHeight: '1.5' }}
      >
        <div
          style={{
            position: 'relative',
            // minWidth: '100vw',
            width: '80vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            padding: '1rem',
            marginBottom: '1.5rem',
            margin: 'auto'
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <Image
              src="/assets/not-found.svg"
              alt="Not Found"
              width={200}
              height={100}
            />
          </div>
          <div style={{ textAlign: 'center', margin: '0 auto' }}>
            <h1
              style={{ fontSize: '6rem', fontWeight: '800', color: '#3b82f6' }}
            >
              404
            </h1>
            <h2
              style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937' }}
            >
              Page Not Found
            </h2>
            <p
              style={{
                color: '#4b5563',
                fontSize: '1.125rem',
                maxWidth: '32rem',
                margin: '0 auto'
              }}
            >
              Oops! The page you’re looking for doesn’t exist. It might have
              been moved or deleted.
            </p>
            <Link
              href="/"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                display: 'inline-block',
                textDecoration: 'none'
              }}
              // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              // onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
