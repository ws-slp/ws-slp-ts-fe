// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const hello = (req, res) => {
  res.status(200).json({name: 'John Doe'});
};

export default hello;
