import express from 'express';
import cors from 'cors';
const app = express();

app.set('trust proxy', true)

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  console.log(req.ip);
  res.send(req.ip);
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})