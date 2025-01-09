function solution(genres, plays) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < genres.length; i++) {
    if (map.has(genres[i])) {
      map.get(genres[i]).list.push([plays[i], i]);
      map.get(genres[i]).total += plays[i];
      // map.get(genres[i]).list.sort((a, b) => b[0] - a[0]);
    } else {
      map.set(genres[i], { list: [[plays[i], i]], total: plays[i] });
    }
  }

  const sortedGenres = [...map.entries()].sort(
    (a, b) => b[1].total - a[1].total
  );
  // console.log(sortedGenres);

  for (let [genre, { list: songs }] of sortedGenres) {
    // console.log(genre, songs)
    songs.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    });

    result.push(songs[0][1]);
    if (songs.length > 1) {
      result.push(songs[1][1]);
    }
  }

  return result;
}
