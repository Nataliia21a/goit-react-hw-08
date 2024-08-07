import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectContactsState = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoader = (state) => state.contacts.loader;

export const selectVisibleContacts = createSelector(
  [selectContactsState, selectFilterName],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
