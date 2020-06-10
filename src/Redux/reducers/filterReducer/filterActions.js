export const Type = {
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
};

export const filterContact = (value) => ({
  type: Type.SET_VISIBILITY_FILTER,
  payload: value,
});
