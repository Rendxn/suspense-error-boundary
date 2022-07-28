export default async function handler(req, res) {
  const promise = new Promise((resolve, reject) => {
    // simulate delay
    setTimeout(() => {
      return resolve({
        stat: "$4,181",
        change: "$412",
        changeType: "increase",
      });
    }, 1000);
  });

  const credit = await promise;

  return res.status(200).json(credit);
}
