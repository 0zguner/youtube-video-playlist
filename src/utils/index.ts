export const youtube_url_parser = (url: string) => {
  var video_id = url.split("v=")[1];
  var ampersandPosition = video_id.indexOf("&");
  console.log(video_id);
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);

    return video_id;
  }
};
