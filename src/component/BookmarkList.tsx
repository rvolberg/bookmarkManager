import React from 'react';
import { Bookmark } from './BookmarkManagerContainer';
import './bookmarkList.css';
import { BookmarkCard } from './BookmarkCard';

interface IBookmarkListProps {
  setBookmarks: any;
  bookmarks: Bookmark[];
}

export const BookmarkList = ({
  bookmarks,
  setBookmarks,
}: IBookmarkListProps): JSX.Element => {
  const onDeleteBookmarkHandler = (bookmark: Bookmark) => {
    setBookmarks(bookmarks.filter((item) => item.id !== bookmark.id));
    console.log('CLICKED');
  };

  return (
    <div className="bookmark-list-container">
      <h2 className="bookmarl-list-container-title">Bookmark List</h2>

      {bookmarks.map((bookmark: Bookmark) => (
        <div key={bookmark.id} className="card-container">
          <BookmarkCard bookmark={bookmark} />
          <div className="my-2">
            <button
              onClick={() => {
                onDeleteBookmarkHandler(bookmark);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
