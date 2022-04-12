import React, { useState, useEffect } from 'react';
import { Bookmark } from './BookmarkManagerContainer';

interface IBookmarkCardProps {
  bookmark: Bookmark;
}

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

export const BookmarkCard = ({ bookmark }: IBookmarkCardProps): JSX.Element => {
  const [currentDate, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 5 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getDuration = (timeAgoInSeconds: number) => {
    for (let [name, seconds] of epochs) {
      const interval = Math.floor(timeAgoInSeconds / seconds);
      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name,
        };
      }
    }
  };
  const timeAgo = (currentDate: Date, creationDate: Date) => {
    const timeAgoInSeconds = Math.floor(
      (new Date(currentDate) - new Date(creationDate)) / 1000
    );

    if (timeAgoInSeconds <= 0) {
      return `just now`;
    }

    const { interval, epoch } = getDuration(timeAgoInSeconds);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
  };

  const secondsToHms = (seconds: number): string => {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return hDisplay + mDisplay + sDisplay;
  };

  return (
    <div>
      {bookmark.properties.provider_name === 'Flickr' && (
        <div className="row">
          <div className="col-md-5">
            <img
              src={bookmark.properties.thumbnail_url}
              alt={bookmark.properties.title}
            />
          </div>
          <div className="col-md-6">
            <a href={bookmark.properties.url}>{bookmark.properties.url}</a>
            <div>{bookmark.properties.title}</div>
            <div>by {bookmark.properties.author_name}</div>
            <div>created {timeAgo(currentDate, bookmark.creationDate)}</div>
            <div>
              size : {bookmark.properties.width}x{bookmark.properties.height}
            </div>
          </div>
        </div>
      )}
      {bookmark.properties.provider_name === 'Vimeo' && (
        <div className="row">
          <div className="col-md-5">
            <img
              src={bookmark.properties.thumbnail_url}
              alt={bookmark.properties.title}
            />
          </div>
          <div className="col-md-6">
            <a href={bookmark.properties.url}>{bookmark.properties.url}</a>
            <div>{bookmark.properties.title}</div>
            <div>by {bookmark.properties.author_name}</div>
            <div>created {timeAgo(currentDate, bookmark.creationDate)}</div>
            <div>
              published{' '}
              {new Date(bookmark.properties.upload_date).toLocaleDateString(
                undefined,
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </div>
            <div>
              duration : {secondsToHms(parseInt(bookmark.properties.duration))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
