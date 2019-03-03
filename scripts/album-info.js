{
  $("#album-title").text(album.title);
  $("img#album-cover-art").attr("src", album.albumArtUrl);
  $("div.album-details").find(".artist").text(album.artist);
  $("#release-info").text(album.releaseInfo);
}
