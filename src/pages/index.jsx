import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import TodoList from '@/components/todoList/TodoList';
import { getSessionProps } from '@/utils/sessionProps';

const storageKey = 'aleph-todo';

const inter = Inter({ subsets: ['latin'] });
import Navbar from '@/components/navbar/Navbar';

export async function getServerSideProps(context) {
  const sessionProps = await getSessionProps(context);
  return {
    ...sessionProps
  };
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(storageKey, JSON.stringify(todos));
    }
  }, [initialized, todos]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prev = localStorage.getItem(storageKey);
      setTodos(prev ? JSON.parse(prev) : []);
      setInitialized(true);
    }
  }, []);

  // TODO: This function can be improved.
  const filteredObjects = todos.filter((object) => {
    return object.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 p-md-24 ${inter.className}`}
    >
      <div className='w-full max-w-3xl font-mono text-sm pt-16'>
        <TodoList todos={filteredObjects} setTodos={setTodos} />
      </div>
      <div className={'fixed top-0 z-30 w-full'}>
        <Navbar searchText={search} onSearchTextChange={setSearch} />
      </div>
    </main>
  );
}
