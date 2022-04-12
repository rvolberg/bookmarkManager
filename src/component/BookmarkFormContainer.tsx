import React, { useState } from 'react';
import { BookmarkForm } from './BookmarkForm';
import { Bookmark, Properties } from './BookmarkManagerContainer';

interface ISaveBookmarkContainerProps {
  onAddBookmark: any;
}

export const SaveBookmarkContainer = ({
  onAddBookmark,
}: ISaveBookmarkContainerProps) => {
  // const [bookmarkInfo, setBookmarkInfo] = useState({});

  const fetchBookmarkInfo = async (url: string) => {
    const apiUrl = 'https://noembed.com/embed?url=';
    const enteredUrl = url.replace('https:', 'http%3A');
    const response = await fetch(apiUrl + enteredUrl);
    const body = await response.json();
    return body;
  };

  const onHandleClick = async (enteredUrl: string) => {
    const bookmarkInfo: Properties = await fetchBookmarkInfo(enteredUrl);
    console.log('TEST', bookmarkInfo);
    const bookmark: Bookmark = {
      properties: { ...(bookmarkInfo as Properties) },
      id: Math.random().toString(),
      creationDate: new Date(),
    };
    onAddBookmark(bookmark);
  };
  return <BookmarkForm onHandleClick={onHandleClick} />;
};
