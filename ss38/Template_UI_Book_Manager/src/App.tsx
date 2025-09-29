import React, { useEffect, useMemo, useState } from 'react';
import type { Book } from './components/types';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearchSortFilter from './components/BookSearchSortFilter';
import { Button, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import { fetchBooks, fetchDeleteBooks, fetchAddBooks } from './components/BookSlice';

const App: React.FC = () => {
  const { books, status, error } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch<AppDispatch>();

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  // Trạng thái hiển thị spinner với delay tối thiểu
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Logic đảm bảo spinner hiện ít nhất 1.5 giây
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === 'loading') {
      setShowLoading(true);
    } else {
      // Chờ 1.5s trước khi tắt spinner (nếu API xong sớm thì vẫn giữ đủ 1.5s)
      timer = setTimeout(() => setShowLoading(false), 1500);
    }

    return () => clearTimeout(timer);
  }, [status]);

  const categories = useMemo(
    () => Array.from(new Set(books.map((b) => b.category))),
    [books],
  );

  const handleSubmit = (data: Book) => {
    if (data.id) {
      dispatch(fetchAddBooks(data));
    } else {
      const id = Date.now().toString();
      dispatch(fetchAddBooks({ ...data, id }));
    }
    setOpenForm(false);
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q),
      );
    }
    if (category !== 'all') out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === 'title') {
        const r = a.title.localeCompare(b.title);
        return sortDir === 'asc' ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === 'asc' ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      {/* Loading Spinner với delay tối thiểu 1.5s */}
      {showLoading && (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      )}

      {/* Hiển thị lỗi */}
      {status === 'failed' && (
        <p className="text-red-500 mt-4">⚠️ Error: {error}</p>
      )}

      {/* Hiển thị danh sách khi load xong và không còn loading */}
      {status === 'succeeded' && !showLoading && (
        <>
          <div className="mt-4">
            <BookSearchSortFilter
              search={search}
              category={category}
              sortBy={sortBy}
              sortDir={sortDir}
              categories={categories}
              onSearchChange={setSearch}
              onCategoryChange={setCategory}
              onSortChange={(by, dir) => {
                setSortBy(by);
                setSortDir(dir);
              }}
              onClear={() => {
                setSearch('');
                setCategory('all');
                setSortBy('title');
                setSortDir('asc');
              }}
            />
          </div>

          <div className="mt-6">
            <BookList
              books={filteredSorted}
              onEdit={(b) => {
                setEditing(b);
                setOpenForm(true);
              }}
              onDelete={(id) => dispatch(fetchDeleteBooks(id))}
            />
          </div>
        </>
      )}

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
