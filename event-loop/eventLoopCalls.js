(async () => {
  setTimeout(() => {
    console.log(2);
  }, 30);
  console.log(1);
  const res = await new Promise((res, rej) => {
    res(100);
  })
  console.log(res);
  const res2 = await new Promise((res, rej) => {
    // setTimeout(() => {
      res(101);
    // }, 50);
  });
  console.log(res2);
})();

// Output
// 1
// 100
// 101
// 2
