const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    reject("Error While Communicating");
  }, 2000);
});
pobj1
  .then((rollno) => {
    console.log(rollno);
  })
  .catch((erroe) => {
    console.log(error);
  });
