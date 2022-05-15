// import { useNavigate } from "react-router-dom";
import { useAuth, useNote } from "../../context";
import axios from "axios";
import { toast } from "react-toastify";

const date = new Date().toLocaleString("en-In", "Asia-Kolkata").split(",")[0];

export const useHandler = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    allNoteDispatch,
    noteState,
    updateNote,
    noteDispatch,
    updateDispatch,
  } = useNote();

  //const { setToast, setLoading } = useToast();
  // const navigate = useNavigate();

  // this function handle all the api calls

  const serverCalls = async (
    method,
    url,
    type,
    message,
    property = null,
    body = null,
  ) => {
    const headers = { authorization: token };
    try {
      // setLoading(true);
      const { data } = await axios({
        method: method,
        url: url,
        data: body,
        headers: headers,
      });
      allNoteDispatch({ type, payload: property ? data[property] : data });
      toast.success(message);
    } catch ({
      response: {
        data: { errors },
        status,
      },
    }) {
      toast.error(errors[0]);
      console.log(errors[0]);
    }
  };

  // this is add to like handler.
  // it do the operation of adding any video into like section.

  const addNote = () => {
    serverCalls(
      "post",
      "/api/notes",
      "ADD_NOTE_INTO_NOTES",
      "Note Added",
      "notes",

      {
        note: noteState,
      },
    ).then(() => noteDispatch({ type: "RESET_NOTE", date: date }));
  };

  const editNote = () => {
    serverCalls(
      "post",
      `/api/notes/${updateNote._id}`,
      "ADD_NOTE_INTO_NOTES",
      "Note Updated",
      "notes",

      {
        note: updateNote,
      },
    ).then(() => updateDispatch({ type: "RESET_NOTE", date: date }));
  };

  // delete note from Notes

  const deleteNote = (id) => {
    serverCalls(
      "delete",
      `/api/notes/${id}`,
      "ADD_NOTE_INTO_NOTES",
      "Note Deleted",
      "notes",
    );
  };

  // Add note into archive

  const addArchive = (note) => {
    serverCalls(
      "post",
      `/api/notes/archives/${note._id}`,
      "ADD_NOTE_INTO_ARCHIVE",
      "Noted Added To Archive",
      null,
      {
        note: note,
      },
    );
  };

  // Restore note from archive

  const restoreFromArchives = (note) => {
    serverCalls(
      "post",
      `/api/archives/restore/${note._id}`,
      "ADD_NOTE_INTO_ARCHIVE",
      "Note Restored From Archive",
    );
  };

  // Add note into archive

  const addTrash = (note) => {
    serverCalls(
      "post",
      `/api/notes/trash/${note._id}`,
      "ADD_NOTE_INTO_TRASH",
      "Note Added To Trash",

      null,
      {
        note: note,
      },
    );
  };

  // Restore note from Trash

  const restoreFromTrash = (note) => {
    serverCalls(
      "post",
      `/api/trash/restore/${note._id}`,
      "ADD_NOTE_INTO_TRASH",
      "Note Restored From Trash",
    );
  };

  const handlers = {
    addNote,
    editNote,
    deleteNote,
    addArchive,
    restoreFromArchives,
    addTrash,
    restoreFromTrash,
  };

  return [handlers];
};
