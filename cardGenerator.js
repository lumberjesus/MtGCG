// Function to generate card text
function generateCardText(color, type, effect) {
  const adjectives = ['mystical', 'ancient', 'powerful', 'enigmatic', 'arcane', 'ethereal', 'celestial', 'ominous', 'radiant', 'shadowy'];
  const verbs = ['controls', 'manipulates', 'unleashes', 'summons', 'conjures', 'dominates', 'transforms', 'shapes', 'commands', 'wields'];
  const phrases = [
    'with a touch of magic',
    'from the depths of the unknown',
    'that bends reality',
    'with unparalleled might',
    'that defies logic',
    'with an aura of mystery',
    'from the ancient realms',
    'that transcends time',
    'with a whisper of power',
    'from the shadows of legend'
  ];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  const name = `${color.charAt(0).toUpperCase() + color.slice(1)} ${type}`;
  const text = `This ${randomAdjective} ${color} ${type} ${randomVerb} ${effect} ${randomPhrase}.`;
  const flavorText = `A ${randomAdjective} ${color} force that ${randomVerb} ${randomPhrase}.`;

  return {
    name,
    type,
    text,
    flavorText
  };
}

// Function to generate card image using OpenAI's DALL·E
async function generateCardImage(cardText) {
  const description = `A Magic the Gathering card featuring a ${cardText.type} that ${cardText.text}`;
  const apiKey = process.env.OPENAI_API_KEY; // Ensure you set this environment variable

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: description,
        n: 1,
        size: '1024x1024'
      })
    });

    if (!response.ok) {
      throw new Error('Image generation failed');
    }

    const data = await response.json();
    return data.data[0].url; // Returns the generated image URL

  } catch (error) {
    console.error('Error generating image:', error);
    return 'https://via.placeholder.com/1024?text=Image+Unavailable';
  }
}

export default { generateCardText, generateCardImage };