import express from 'express';
import bodyParser from 'body-parser';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
const csrfProtection = csurf({ cookie: true });


// Route to get CSRF token
app.get('/get-cookie', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// POST route that requires CSRF token validation
app.post('/make-prediction', csrfProtection, (req, res) => {
  // Your business logic here. If this code runs, CSRF token is valid.
  const {photo_person_name, photo_clothing_name, photo_person, photo_clothing} = req.body;
  console.log(`get request: photo_person_name: ${photo_person_name} photo_clothing_name: ${photo_clothing_name}`)
  const data = fs.readFileSync("./src/photo/img2.png");
  const base64ImageData = Buffer.from(data).toString('base64');
  res.json({ photo_prediction: base64ImageData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
