import React, { useState } from 'react';

interface IBookmarkFormProps {
  onHandleClick: any;
}

export const BookmarkForm = ({
  onHandleClick,
}: IBookmarkFormProps): JSX.Element => {
  const [newBookmark, setNewBookmark] = useState('');

  const handleOnChange = (event: any) => {
    setNewBookmark(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onHandleClick(newBookmark);
    setNewBookmark('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">add a bookmark</h2>
        <div className="form-input">
          <input
            type="text"
            value={newBookmark}
            onChange={handleOnChange}
            minLength={1}
            maxLength={60}
            placeholder="Enter your link"
          />
        </div>
        <div className="form-button my-3">
          <button type="submit">add bookmark</button>
        </div>
      </form>
    </div>
  );
};
