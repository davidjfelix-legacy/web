
import { v4 } from 'uuid';


const fakeDatabase = {
  videos: [{
    id: v4(),
  }, {
    id: v4(),
  }, {
    id: v4(),
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchVideos = () =>
  delay(500).then(() => {
    return fakeDatabase.videos;
  });

// GET /videos
export const indexVideos = () => {};

// GET /videos/:videoId
export const showVideo = (videoId) => {};

// POST /videos
export const createVideo = (text) =>
  delay(500).then(() => {
    const video = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.videos.push(todo);
    return video;
  });

// PATCH /videos/:videoId
export const partiallyUpdateVideo = () => {};

// PUT /videos/:videoId
export const updateVideo = () => {};

// DELETE /videos/:videoId
export const deleteVideo = () => {};
