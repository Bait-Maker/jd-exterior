"use server";

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.YOUTUBE_CHANNEL_ID;
const apiURL = process.env.YOUTUBE_API_URL;

export const getYouTubeVideos = async () => {
  const request = `${apiURL}?key=${apiKey}&channelId=${channelId}&part=snippet&maxResults=1&order=date`;

  try {
    const data = await fetch(request);

    console.log(request);

    if (!data.ok) {
      throw Error("Failed to fetch video");
    }

    return await data.json();
  } catch (error) {
    throw new Error("An error occured while fetching the video");
  }
};
