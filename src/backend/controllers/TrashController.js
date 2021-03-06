import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Archives are present here.
 *  These are Privately accessible routes.
 * */

/**
 * This handler handles gets all archived notes in the db.
 * send GET Request at /api/archives
 * */

export const getAllTrashNotesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      },
    );
  }
  return new Response(200, {}, { trash: user.trash });
};

/**
 * This handler handles deletes note from archive.
 * send DELETE Request at /api/archives/delete/:noteId
 * */

export const deleteFromTrashHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      },
    );
  }
  const { noteId } = request.params;
  user.trash = user.trash.filter((note) => note._id !== noteId);
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, { trash: user.trash });
};

/**
 * This handler handles restoring the archived notes to user notes.
 * send POST Request at /api/archives/restore/:noteId
 * */

export const restoreFromTrashHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      },
    );
  }
  const { noteId } = request.params;
  const restoredNote = user.trash.filter((note) => note._id === noteId)[0];
  user.trash = user.trash.filter((note) => note._id !== noteId);
  user.notes.push({ ...restoredNote });
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, { trash: user.trash, notes: user.notes });
};
