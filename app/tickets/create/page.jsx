'use client';

import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function CreateTicket() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket =
        { title, body: text , priority, user_email: 'alu0101056944@ull.edu.es'};

    const res = await fetch('http://localhost:4000/tickets/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newTicket),
        });

    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  }

  return (
    <main className='text-center'>
      <div className="card">
        <form onSubmit={submitForm}>
          <label>
            <span>Title</span>
            <input
              required
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Text</span>
            <input
              required
              type='text'
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </label>
          <label>
            <span>Priority</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
             >
              <option value='low'>Low priority</option>
              <option value='medium'>Medium priority</option>
              <option value='high'>High priority</option>
            </select>
          </label>
          <button disabled={isLoading}>
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add ticket</span>}
          </button>
        </form>
      </div>
    </main>
  )
}