export default async function Page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    next: {
      revalidate: 30,
    },
  });

  const data = await response.json();
  console.log(data);
  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
}
