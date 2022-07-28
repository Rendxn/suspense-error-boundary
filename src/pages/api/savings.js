export default async function handler(req, res) {
  const promise = new Promise((resolve, reject) => {
    // simulate delay
    setTimeout(() => {
      return resolve({
        stat: "$24,581",
        change: "$1,167",
        changeType: "decrease",
      });
    }, 1000);
  });
  const savings = await promise;

  return res.status(200).json(savings);
}
