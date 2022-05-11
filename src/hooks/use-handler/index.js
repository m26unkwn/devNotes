// import { useNavigate } from "react-router-dom";
import { useAuth, useNote } from "../../context";
import axios from "axios";

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
      //   setToast({
      //     toastVarient: "success",
      //     message: message,
      //     toast: true,
      //   });
      // setLoading(false);
    } catch (error) {
      //   setToast({
      //     toast: true,
      //     toastVarient: "failure",
      //     message: "Something went wrong!!",
      //   });
      console.log("errror", error);
      //setLoading(false);
    }
  };

  // this is add to like handler.
  // it do the operation of adding any video into like section.

  const addNote = () => {
    serverCalls(
      "post",
      "/api/notes",
      "ADD_NOTE_INTO_NOTES",
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
      "notes",

      {
        note: updateNote,
      },
    ).then(() => updateDispatch({ type: "RESET_NOTE", date: date }));
  };

  // delete note from Notes

  const deleteNote = (id) => {
    serverCalls("delete", `/api/notes/${id}`, "ADD_NOTE_INTO_NOTES", "notes");
  };

  // Add note into archive

  const addArchive = (note) => {
    serverCalls(
      "post",
      `/api/notes/archives/${note._id}`,
      "ADD_VIDEO_INTO_ARCHIVE",
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
      "ADD_VIDEO_INTO_ARCHIVE",
    );
  };

  // Add note into archive

  const addTrash = (note) => {
    serverCalls(
      "post",
      `/api/notes/trash/${note._id}`,
      "ADD_VIDEO_INTO_TRASH",
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
      "ADD_VIDEO_INTO_TRASH",
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
