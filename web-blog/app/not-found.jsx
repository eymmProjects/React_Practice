// pages/404.js
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-3">Page Not Found</p>
      <p className="mt-4">The page your looking for does not seem to exist.</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
}
