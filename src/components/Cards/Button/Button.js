import { useLocation } from "react-router-dom";
import { Archive, Delete, Edit } from "../../../assets";

export function Button({ handlers, note, editNote }) {
  const { pathname } = useLocation();
  if (pathname === "/labels" || pathname === "/home") {
    return (
      <>
        <button
          title='Add To Trash'
          onClick={() => handlers.addTrash(note)}
          className='btn btn-icon'>
          <img src={Delete} alt='add to trash' />
        </button>
        <button
          title='Add To Archive'
          onClick={() => handlers.addArchive(note)}
          className='btn btn-icon'>
          <img src={Archive} alt='add to trash' />
        </button>
        <button title='Edit Note' onClick={editNote} className='btn btn-icon'>
          <img src={Edit} alt='add to trash' />
        </button>
      </>
    );
  }
  if (pathname === "/trash") {
    return (
      <div className='flex flex-gap'>
        <button
          title='Restore Note'
          onClick={() => handlers.restoreFromTrash(note)}
          className='btn btn-primary'>
          Restore
        </button>
        <button
          title='Delete Note'
          onClick={() => handlers.deleteNote(note._id)}
          className='btn btn-error'>
          Delete
        </button>
      </div>
    );
  }
  if (pathname === "/archive") {
    return (
      <div className='flex flex-gap'>
        <button
          title='Restore Note'
          onClick={() => handlers.restoreFromArchives(note)}
          className='btn btn-primary'>
          Restore
        </button>
        <button
          title='Delete Note'
          onClick={() => handlers.deleteNote(note._id)}
          className='btn btn-error'>
          Delete
        </button>
      </div>
    );
  }
}
