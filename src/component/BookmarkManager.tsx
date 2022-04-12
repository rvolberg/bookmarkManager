import React from 'react';
import { BookmarkList } from './BookmarkList';
import { Bookmark } from './BookmarkManagerContainer';
import { SaveBookmarkContainer } from './BookmarkFormContainer';
import './bookmarkManager.css';

interface IBookmarkManagerProps {
  bookmarks: Bookmark[];
  onAddBookmark: any;
  setBookmarks: any;
}

export const BookmarkManager = ({
  bookmarks,
  setBookmarks,
  onAddBookmark,
}: IBookmarkManagerProps): JSX.Element => {
  return (
    <div className="container-fluid">
      <div className="text-center my-5">
        <h1>Bookmark Manager</h1>
      </div>
      <div className="row">
        <div className="col-md-4 bookmark-form">
          <SaveBookmarkContainer onAddBookmark={onAddBookmark} />
        </div>
        <div className="col-md-8 bookmark-list">
          <BookmarkList bookmarks={bookmarks} setBookmarks={setBookmarks} />
        </div>
      </div>
    </div>
  );
};
