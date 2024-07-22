import React, { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'

// Import Components
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import Notes from './pages/Notes'

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <main className='bg-zinc-900'>
      <Routes>
        <Route path='/' element={<Notes notes={notes} />} />
        <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
        <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </main>
  )
}

export default App