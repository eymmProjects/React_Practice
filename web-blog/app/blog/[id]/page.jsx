import { notFound } from "next/navigation";

async function fetchPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Post not found");
    const data = await response.json();
    if (!data.title) {
      notFound();
    }
    return data; // Make sure to return the fetched data
  } catch (e) {
    console.error(e); // Adjust error handling as per your application's needs
    return null; // Return null or a similar indicator to handle this in your component
  }
}

export default async function Page({ params }) {
  const { id } = params;
  const data = await fetchPost(id);

  return (
    <main>
      <h1>Individual page {id}</h1>
      <p>{data.title}</p>
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return data.map((post) => ({
    id: String(post.id),
  }));
}

export const dynamicParams = false;
