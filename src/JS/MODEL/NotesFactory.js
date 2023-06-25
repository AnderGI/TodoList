export const NoteFactory = (briefDescription) => {
  const note = {
    description: briefDescription,
    checked: false,
  };

  return note;
};
