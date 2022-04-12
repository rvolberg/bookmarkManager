import React, { useState } from 'react';
import { BookmarkManager } from './BookmarkManager';
import dataList from '../dataList.json';

export type Properties = {
  license_id: string;
  media_url: string;
  url: string;
  uri: string;
  upload_date: string;
  flickr_type: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url_with_play_button: string;
  author_name: string;
  author_url: string;
  account_type: string;
  type: string;
  provider_url: string;
  duration: string;
  height: number;
  web_page: string;
  license: string;
  license_url: string;
  version: string;
  provider_name: string;
  width: number;
  web_page_short_url: string;
  title: string;
  thumbnail_url: string;
  cache_age: number;
  html: string;
  is_plus: string;
  description: string;
  video_id: number;
};

export type Bookmark = {
  properties: Properties;
  id: string;
  creationDate: Date;
};

export const BookmarkManagerContainer = (): JSX.Element => {
  const [bookmarks, setBookmarks] = useState(dataList);

  const addBookmarkHandler = (bookmark: Bookmark) => {
    setBookmarks((prevBookmarks: Bookmark[]) => {
      return [bookmark, ...prevBookmarks];
    });
  };

  return (
    <div>
      <BookmarkManager
        onAddBookmark={addBookmarkHandler}
        setBookmarks={setBookmarks}
        bookmarks={bookmarks}
      />
    </div>
  );
};
