import express from 'express';
import cors from 'cors';
const app = express();

app.set('trust proxy', true)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: '*'
}));

app.get('/get-ip', (req, res) => {
  console.log(req.ip);
  res.status(200);
  res.send("Your IP address is " + req.ip);
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})