export const fetchBooks = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const data = await res.json();
  return data;
};
