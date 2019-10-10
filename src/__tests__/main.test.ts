import Store from "../store";

describe("Store Test", () => {
  const store = Store;
  it("Should not add song to playlist", () => {
    const result = store.addSongToCurrentPlaylist({
      id: "",
      title: "",
      artist: "",
      url: "",
      video_id: ""
    });
    expect(result).toBe(false);
  });
  it("should not add song to playlist if its not a youtube url", () => {
    const result = store.addSongToCurrentPlaylist({
      id: "",
      title: "Test Title",
      artist: "Test Artist",
      url: "Lorem Ipsum",
      video_id: ""
    });
    expect(result).toBe(false);
  });
});
