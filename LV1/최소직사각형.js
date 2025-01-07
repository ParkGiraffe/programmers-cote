function solution(sizes) {
  let width = 0;
  let height = 0;

  sizes.forEach((e) => {
    const [w, h] = resolve(e);
    width = w > width ? w : width;
    height = h > height ? h : height;

    console.log(width, height);
  });

  return width * height;
}

const resolve = (size) => {
  const [w, h] = size;

  let big;
  let small;

  if (w >= h) {
    big = w;
    small = h;
  } else {
    big = h;
    small = w;
  }

  return [big, small];
};
