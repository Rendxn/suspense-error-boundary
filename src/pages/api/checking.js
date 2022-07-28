// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const promise = new Promise((resolve, reject) => {
    // simulate delay
    setTimeout(() => {
      return resolve({
        stat: "$8,027",
        change: "$678",
        changeType: "increase",
      });
    }, 1000);
  });
  const checking = await promise;

  return res.status(200).json(checking);
}
