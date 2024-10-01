require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
const MODEL = "llama-3.2-3b-preview";  // Corrected model name

app.post('/proxy/generate', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    const { prompt } = req.body;

    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: MODEL,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 60000 // 60 seconds timeout
    });

    console.log('Groq response:', response.data);
    
    if (!response.data || !response.data.choices || !response.data.choices[0].message) {
      throw new Error('Invalid response from Groq API');
    }
    
    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error details:', error);
    let errorMessage = 'An error occurred while processing your request.';
    if (error.response) {
      console.error('Error response:', error.response.data);
      errorMessage += ` Status: ${error.response.status}. ${JSON.stringify(error.response.data)}`;
    } else if (error.request) {
      console.error('No response received:', error.request);
      errorMessage += ' No response received from Groq API.';
    } else {
      console.error('Error message:', error.message);
      errorMessage += ` ${error.message}`;
    }
    res.status(500).json({ error: errorMessage });
  }
});

app.post('/generate-meme', async (req, res) => {
  try {
    const { prompt } = req.body;

    // First, generate an optimized meme prompt using Groq API
    const aiResponse = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: MODEL,
      messages: [
        { role: "system", content: "You are a creative meme prompt generator. Create a concise and creative meme prompt based on the given idea. The prompt should be optimized for image generation." },
        { role: "user", content: prompt }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000 // 30 seconds timeout
    });

    const optimizedPrompt = aiResponse.data.choices[0].message.content.trim();
    console.log('Optimized prompt:', optimizedPrompt);

    // Now, use the optimized prompt to generate an image with Stability AI
    const formData = new FormData();
    formData.append('prompt', optimizedPrompt);
    formData.append('cfg_scale', '7');
    formData.append('steps', '30');
    formData.append('style_preset', 'photographic');
    formData.append('output_format', 'png');

    const imageResponse = await axios.post('https://api.stability.ai/v2beta/stable-image/generate/core', formData, {
      headers: {
        'Authorization': `Bearer ${STABILITY_API_KEY}`,
        'Accept': 'image/*',
        ...formData.getHeaders()
      },
      responseType: 'arraybuffer'
    });

    const base64Image = Buffer.from(imageResponse.data, 'binary').toString('base64');
    res.json({ image: `data:image/png;base64,${base64Image}`, optimizedPrompt });
  } catch (error) {
    console.error('Error details:', error);
    let errorMessage = 'An error occurred while generating the meme.';
    if (error.response) {
      console.error('Error response:', error.response.data);
      errorMessage += ` Status: ${error.response.status}. ${JSON.stringify(error.response.data)}`;
    } else if (error.request) {
      console.error('No response received:', error.request);
      errorMessage += ' No response received from the API.';
    } else {
      console.error('Error message:', error.message);
      errorMessage += ` ${error.message}`;
    }
    res.status(500).json({ error: errorMessage });
  }
});

app.use(express.static('.'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});