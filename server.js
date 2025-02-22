const OpenAI = require('openai');


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { generateCardText } = require('./cardGenerator').default;
const { generateCardImage } = require('./dalleeartcreation');  

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

// Route to generate a card based on user input
app.post('/generate-card', async (req, res) => {

  
  console.log("requesting image now!!!!")
  const openai = new OpenAI({
    apiKey: 'sk-proj-NG9Wa5pGN02bOXu9U-NvJQ6JvTKPCJFE3ipJPkbC7wET282y_X8KQ0B0LKYLWzHBsTnPq1lE_pT3BlbkFJvvG_cir0xnjXf2zbdeYop8JAuhHGjIouXtKZadWKEgwXUwswiSZUyMhaRj32z3rXmhOU_h7iIA-proj-3CL617Y8D4a9hPqUD0xFhe910x-CvVOmnOrCm3dVTMmayhCRYxlGZqrXI2ajPzfpZzBCM23jYdT3BlbkFJUGlaa61AtCPf9AZz-Bi67jy5N4Rpn2Ykc7DuTqxD8Z_Wsq9UOhZ2zmUZ1Ih1gq2HfSEuVcLL4A'
  });

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  size: "1024x1024",
});
console.log(response)
console.log('done!')

console.log(response.data[0].url);

  const { color, type, effect } = req.body;

  // Generate card text
  const cardText = generateCardText(color, type, effect);

  // Generate card image
  const imageUrl = await generateCardImage(cardText);

  // Log the generated card data to the console to check if everything is correct
  console.log("Generated card data:", {
    name: cardText.name,
    type: cardText.type,
    text: cardText.text,
    flavorText: cardText.flavorText,
    imageUrl: imageUrl
  });

  // Send the full card object as a response
  res.json({
    name: cardText.name,
    type: cardText.type,
    text: cardText.text,
    flavorText: cardText.flavorText,
    imageUrl: imageUrl
  });
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'MtGcardapp.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));