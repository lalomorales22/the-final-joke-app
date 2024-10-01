const comedyComponents = [
  { icon: '🏠', name: 'Home' },
  { icon: '🎭', name: 'Joke Types' },
  { icon: '🎯', name: 'Punchline Crafting' },
  { icon: '🧠', name: 'Brainstorming' },
  { icon: '🎨', name: 'Wordplay Generator' },
  { icon: '🕰️', name: 'Timing Techniques' },
  { icon: '👥', name: 'Character Development' },
  { icon: '🌍', name: 'Cultural References' },
  { icon: '📚', name: 'Comedy Theory' },
  { icon: '🎤', name: 'Stand-up Structures' },
  { icon: '📝', name: 'Sketch Writing' },
  { icon: '🤔', name: 'Observational Humor' },
  { icon: '😂', name: 'Meme Creation' },
  { icon: '🔍', name: 'Joke Analysis' },
  { icon: '🏋️', name: 'Comedy Exercises' },
  { icon: '🎭', name: 'Improv Techniques' },
  { icon: '🎯', name: 'Audience Targeting' },
  { icon: '🔄', name: 'Joke Revision' },
  { icon: '📈', name: 'Comedy Trends' },
  { icon: '🦸', name: 'Persona Building' },
  { icon: '🌈', name: 'Visual Humor' },
  { icon: '🗣️', name: 'Delivery Styles' },
  { icon: '📊', name: 'Joke Structure' },
  { icon: '🧪', name: 'Experimental Comedy' },
  { icon: '📊', name: 'Analytics' },
];

const jokeTypes = [
  {
    icon: '🎭',
    name: 'One-liners',
    description: 'Short, punchy jokes that deliver a quick laugh',
    characteristics: ['Brevity', 'Unexpected twist', 'Wordplay'],
    examples: [
      "I used to be addicted to soap, but I'm clean now.",
      "I'm friends with all electricians. We have great current-cy.",
    ],
    tips: [
      'Keep it concise, ideally under 20 words',
      'End with the punchline for maximum impact',
      'Use misdirection to surprise the audience',
    ],
    famousComedians: ['Mitch Hedberg', 'Steven Wright', 'Jimmy Carr'],
  },
  {
    icon: '🔄',
    name: 'Callbacks',
    description: 'References to earlier jokes in a set, building layers of humor',
    characteristics: ['Repetition', 'Builds on previous context', 'Rewards attentive listeners'],
    examples: [
      "Earlier joke: 'I'm afraid of elevators, so I'm taking steps to avoid them.'",
      "Callback: 'I finally conquered my fear of escalators. It was a step in the right direction.'",
    ],
    tips: [
      'Plant seeds early in your set for later callbacks',
      'Vary the callback frequency to keep the audience engaged',
      'Use callbacks to tie different parts of your set together',
    ],
    famousComedians: ['Bill Burr', 'Dave Chappelle', 'John Mulaney'],
  },
  {
    icon: '',
    name: 'Wordplay',
    description: 'Clever use of multiple meanings, puns, or similar-sounding words',
    characteristics: ['Double entendres', 'Puns', 'Homophones'],
    examples: [
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "Why don't scientists trust atoms? Because they make up everything!",
    ],
    tips: [
      'Build a strong vocabulary and knowledge of idioms',
      'Practice finding multiple meanings for words',
      'Use context to set up the wordplay effectively',
    ],
    famousComedians: ['Tim Vine', 'Stewart Francis', 'Zach Galifianakis'],
  },
  {
    icon: '😮',
    name: 'Shock Humor',
    description: 'Jokes that surprise or even offend to elicit laughter',
    characteristics: ['Taboo subjects', 'Unexpected punchlines', 'Pushes boundaries'],
    examples: [
      "I have a lot of growing up to do. I realized that the other day inside my fort.",
      "I used to think I was indecisive. But now I'm not so sure.",
    ],
    tips: [
      'Know your audience and their limits',
      'Balance shock value with genuine humor',
      'Be prepared for potential backlash',
    ],
    famousComedians: ['Anthony Jeselnik', 'Sarah Silverman', 'Frankie Boyle'],
  },
  {
    icon: '🏃',
    name: 'Physical Comedy',
    description: 'Using body language, facial expressions, and movements for humor',
    characteristics: ['Exaggerated movements', 'Pratfalls', 'Visual gags'],
    examples: [
      "Charlie Chaplin's bread roll dance in 'The Gold Rush'",
      "Rowan Atkinson's Mr. Bean character",
    ],
    tips: [
      'Practice your timing and coordination',
      'Use your whole body to express the joke',
      'Combine physical comedy with verbal humor for added effect',
    ],
    famousComedians: ['Jim Carrey', 'Lucille Ball', 'Rowan Atkinson'],
  },
  {
    icon: '🎨',
    name: 'Observational',
    description: 'Humor derived from everyday life and common experiences',
    characteristics: ['Relatable content', 'Insightful observations', 'Often begins with "Have you ever noticed..."'],
    examples: [
      "What's the deal with airplane food?",
      "Why do we drive on parkways and park on driveways?",
    ],
    tips: [
      'Keep a journal of funny observations',
      'Look for the absurd in the mundane',
      'Use specific details to make observations more vivid',
    ],
    famousComedians: ['Jerry Seinfeld', 'Ellen DeGeneres', 'George Carlin'],
  },
  {
    icon: '🖼️',
    name: 'Anecdotal',
    description: 'Humorous stories based on personal experiences',
    characteristics: ['Storytelling', 'Personal touch', 'Build-up and punchline'],
    examples: [
      "The time I accidentally wore my shirt inside out all day at work",
      "My disastrous attempt at cooking a Thanksgiving turkey",
    ],
    tips: [
      'Focus on the funny parts and trim unnecessary details',
      'Use vivid descriptions to paint a picture',
      'Practice your delivery and timing',
    ],
    famousComedians: ['Mike Birbiglia', 'Hannibal Buress', 'Ali Wong'],
  },
  {
    icon: '🌍',
    name: 'Topical',
    description: 'Jokes about current events, pop culture, and trending topics',
    characteristics: ['Timely references', 'Often political or celebrity-focused', 'Requires staying up-to-date'],
    examples: [
      "A joke about a recent political gaffe",
      "Commentary on the latest viral internet trend",
    ],
    tips: [
      'Stay informed about current events and pop culture',
      'Be prepared to update your material frequently',
      'Find unique angles on widely-discussed topics',
    ],
    famousComedians: ['Trevor Noah', 'John Oliver', 'Samantha Bee'],
  },
  {
    icon: '🎭',
    name: 'Character-based',
    description: 'Humor derived from portraying unique, often exaggerated personalities',
    characteristics: ['Distinct voices or mannerisms', 'Consistent quirks', 'Often involves impressions'],
    examples: [
      "Borat by Sacha Baron Cohen",
      "The Church Lady from Saturday Night Live",
    ],
    tips: [
      'Develop a strong backstory for your characters',
      'Practice voices and mannerisms',
      'Use character quirks to drive the humor',
    ],
    famousComedians: ['Kate McKinnon', 'Melissa McCarthy', 'Will Ferrell'],
  },
  {
    icon: '🔍',
    name: 'Anti-jokes',
    description: 'Subverting expectations by delivering an underwhelming punchline',
    characteristics: ['Deliberate lack of humor', 'Plays with joke structure', 'Often deadpan delivery'],
    examples: [
      "Why did the scarecrow win an award? He was outstanding in his field.",
      "What's brown and sticky? A stick.",
    ],
    tips: [
      'Set up the joke like a traditional one',
      'Deliver the anti-punchline with confidence',
      'Use anti-jokes sparingly for maximum effect',
    ],
    famousComedians: ['Norm Macdonald', 'Andy Kaufman', 'Bo Burnham'],
  },
];

// Add this function to render the sidebar
function renderComedyComponents() {
  const preferencesList = document.getElementById('preferencesList');
  preferencesList.innerHTML = ''; // Clear existing content
  comedyComponents.forEach(comp => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${comp.icon}</span> ${comp.name}`;
    div.addEventListener('click', () => loadComponentContent(comp));
    preferencesList.appendChild(div);
  });
}

// Modify the loadComponentContent function
function loadComponentContent(component) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `
    <div class="content-header">
      <div class="icon">${component.icon}</div>
      <div class="header-text">
        <h2>${component.name}</h2>
        <p>This is the ${component.name} component.</p>
      </div>
    </div>
    <div id="specific-component-content"></div>
  `;

  switch (component.name) {
    case 'Home':
      loadHomePage();
      break;
    case 'Joke Types':
      loadJokeTypesContent();
      break;
    case 'Punchline Crafting':
      loadPunchlineCraftingContent();
      break;
    case 'Brainstorming':
      loadBrainstormingContent();
      break;
    case 'Wordplay Generator':
      loadWordplayGeneratorContent();
      break;
    case 'Timing Techniques':
      loadTimingTechniquesContent();
      break;
    case 'Character Development':
      loadCharacterDevelopmentContent();
      break;
    case 'Cultural References':
      loadCulturalReferencesContent();
      break;
    case 'Comedy Theory':
      loadComedyTheoryContent();
      break;
    case 'Stand-up Structures':
      loadStandupStructuresContent();
      break;
    case 'Sketch Writing':
      loadSketchWritingContent();
      break;
    case 'Observational Humor':
      loadObservationalHumorContent();
      break;
    case 'Meme Creation':
      loadMemeCreationContent();
      break;
    case 'Joke Analysis':
      loadJokeAnalysisContent();
      break;
    case 'Comedy Exercises':
      loadComedyExercisesContent();
      break;
    case 'Improv Techniques':
      loadImprovTechniquesContent();
      break;
    case 'Audience Targeting':
      loadAudienceTargetingContent();
      break;
    case 'Joke Revision':
      loadJokeRevisionContent();
      break;
    case 'Comedy Trends':
      loadComedyTrendsContent();
      break;
    case 'Persona Building':
      loadPersonaBuildingContent();
      break;
    case 'Visual Humor':
      loadVisualHumorContent();
      break;
    case 'Delivery Styles':
      loadDeliveryStylesContent();
      break;
    case 'Joke Structure':
      loadJokeStructureContent();
      break;
    case 'Experimental Comedy':
      loadExperimentalComedyContent();
      break;
    case 'Analytics':
      loadAnalyticsContent();
      break;
    default:
      console.error(`No content loader found for ${component.name}`);
  }
}

// Add this function to initialize the app
function initApp() {
  renderComedyComponents();
  // Load the home page by default
  loadComponentContent(comedyComponents[0]);
}

// Call initApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

function loadHomePage() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="home-page">
      <h2>Welcome to the Comedy Writing App</h2>
      <p>This is the home page. Select a component from the sidebar to get started.</p>
    </div>
  `;
}

function loadJokeTypesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="joke-types-list">
      ${jokeTypes.map(type => `
        <div class="joke-type">
          <h3><span>${type.icon}</span> ${type.name}</h3>
          <p>${type.description}</p>
          <h4>Characteristics:</h4>
          <ul>
            ${type.characteristics.map(char => `<li>${char}</li>`).join('')}
          </ul>
          <h4>Examples:</h4>
          <ul>
            ${type.examples.map(example => `<li>"${example}"</li>`).join('')}
          </ul>
          <h4>Tips:</h4>
          <ul>
            ${type.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
          <h4>Famous Comedians:</h4>
          <p>${type.famousComedians.join(', ')}</p>
        </div>
      `).join('')}
    </div>
    <div class="joke-type-analyzer">
      <h3>AI Joke Type Analyzer</h3>
      <p>Enter your joke below and our AI will analyze its type and structure:</p>
      <textarea id="jokeInput" rows="4" placeholder="Enter your joke here..."></textarea>
      <button id="analyzeJoke">Analyze Joke</button>
      <div id="jokeAnalysis"></div>
    </div>
  `;

  document.getElementById('analyzeJoke').addEventListener('click', analyzeJokeType);
}

async function analyzeJokeType() {
  const jokeInput = document.getElementById('jokeInput').value;
  const analysisDiv = document.getElementById('jokeAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing joke...</p>';

  const prompt = `Analyze the following joke and determine its type, structure, and key elements. Provide a brief explanation of why it fits that category:

Joke: "${jokeInput}"

Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);

    if (!data.response) {
      throw new Error('No response in data');
    }

    analysisDiv.innerHTML = `
      <h4>AI Joke Analysis:</h4>
      <p>${data.response.trim()}</p>
    `;
  } catch (error) {
    console.error('Error details:', error);
    analysisDiv.innerHTML = `<p>Error analyzing joke: ${error.message}. Please try again.</p>`;
  }
}

function loadPunchlineCraftingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="punchline-crafting">
      <section>
        <h3>1. Introduction to Punchlines</h3>
        <p>A punchline is the final part of a joke that delivers the humor and provokes laughter. It's the climax of the joke that subverts expectations set up by the setup.</p>
      </section>

      <section>
        <h3>2. Types of Punchlines</h3>
        <ul>
          <li><strong>Twist Ending:</strong> Unexpected conclusion that contradicts the setup.</li>
          <li><strong>Play on Words:</strong> Utilizes multiple meanings or similar-sounding words.</li>
          <li><strong>Callback:</strong> References an earlier joke or setup.</li>
          <li><strong>Rule of Three:</strong> Uses a pattern of three with the third item breaking the pattern.</li>
          <li><strong>Anticlimax:</strong> Deliberately underwhelming conclusion for comedic effect.</li>
        </ul>
      </section>

      <section>
        <h3>3. Punchline Structure</h3>
        <p>A good punchline often follows this structure:</p>
        <ol>
          <li><strong>Setup:</strong> Establishes the context and expectations.</li>
          <li><strong>Pivot:</strong> The turning point that shifts the perspective.</li>
          <li><strong>Payoff:</strong> The final reveal that delivers the laugh.</li>
        </ol>
      </section>

      <section>
        <h3>4. Techniques for Crafting Punchlines</h3>
        <ul>
          <li><strong>Misdirection:</strong> Lead the audience in one direction, then surprise them.</li>
          <li><strong>Exaggeration:</strong> Amplify an aspect of the setup to absurd levels.</li>
          <li><strong>Understatement:</strong> Downplay a significant aspect for comedic effect.</li>
          <li><strong>Reversal:</strong> Flip the expected outcome or roles in the joke.</li>
          <li><strong>Comparison:</strong> Draw unexpected parallels between dissimilar things.</li>
        </ul>
      </section>

      <section>
        <h3>5. Common Mistakes to Avoid</h3>
        <ul>
          <li>Telegraphing the punchline too early</li>
          <li>Overexplaining the joke</li>
          <li>Using clichéd or predictable punchlines</li>
          <li>Failing to properly set up the joke</li>
          <li>Relying too heavily on shock value without substance</li>
        </ul>
      </section>

      <section>
        <h3>6. Punchline Timing</h3>
        <p>Timing is crucial for punchline delivery:</p>
        <ul>
          <li>Use pauses effectively to build anticipation</li>
          <li>Practice varying your pace for emphasis</li>
          <li>Consider the rhythm of your words</li>
          <li>Adjust timing based on audience reactions</li>
        </ul>
      </section>

      <section>
        <h3>7. Practice Exercises</h3>
        <div class="exercise">
          <h4>Exercise 1: Finish the Joke</h4>
          <p>Complete these setups with your own punchlines:</p>
          <ul>
            <li>"Why did the chicken cross the playground?"</li>
            <li>"A horse walks into a bar, and the bartender says..."</li>
            <li>"What do you call a bear with no teeth?"</li>
          </ul>
        </div>
        <div class="exercise">
          <h4>Exercise 2: Reverse Engineer</h4>
          <p>Given these punchlines, create setups that lead to them:</p>
          <ul>
            <li>"...and that's why I'm no longer allowed in the library."</li>
            <li>"...turns out it was just a mirror."</li>
            <li>"...but only on Tuesdays."</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>8. Famous Punchlines Analysis</h3>
        <div class="famous-punchline">
          <p><strong>Joke:</strong> "I used to be indecisive. Now I'm not so sure."</p>
          <p><strong>Comedian:</strong> Woody Allen</p>
          <p><strong>Analysis:</strong> This punchline works by contradicting itself. The speaker claims to no longer be indecisive but then expresses uncertainty, perfectly illustrating the very indecisiveness they claim to have overcome.</p>
        </div>
        <div class="famous-punchline">
          <p><strong>Joke:</strong> "I have a lot of growing up to do. I realized that the other day inside my fort."</p>
          <p><strong>Comedian:</strong> Zach Galifianakis</p>
          <p><strong>Analysis:</strong> The punchline here creates a juxtaposition between the mature realization of needing to grow up and the childish behavior of being in a fort, highlighting the irony and delivering the laugh.</p>
        </div>
      </section>

      <section>
        <h3>9. AI Punchline Generator</h3>
        <p>Enter a few words or a setup, and our AI will generate a punchline for you!</p>
        <textarea id="punchlineSetup" rows="3" placeholder="Enter your setup or keywords here..."></textarea>
        <button id="generateAIPunchline">Generate AI Punchline</button>
        <div id="aiPunchline"></div>
      </section>
    </div>
  `;

  // Add event listener for the punchline generator button
  document.getElementById('generateAIPunchline').addEventListener('click', generateAIPunchline);
}

async function generateAIPunchline() {
  const setup = document.getElementById('punchlineSetup').value;
  const punchlineDiv = document.getElementById('aiPunchline');
  punchlineDiv.innerHTML = '<p>Generating punchline...</p>';

  const prompt = `Generate a clever and funny punchline for the following setup or keywords: "${setup}". The punchline should be concise and unexpected.`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);

    if (!data.response) {
      throw new Error('No response in data');
    }

    punchlineDiv.innerHTML = `
      <h4>AI Generated Punchline:</h4>
      <p>${data.response.trim()}</p>
    `;
  } catch (error) {
    console.error('Error details:', error);
    punchlineDiv.innerHTML = `<p>Error generating punchline: ${error.message}. Please try again.</p>`;
  }
}

function loadBrainstormingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="brainstorming">
      <section>
        <h3>Brainstorming Techniques for Comedy</h3>
        <ul>
          <li><strong>Mind Mapping:</strong> Start with a central idea and branch out with related concepts.</li>
          <li><strong>Free Writing:</strong> Write non-stop for a set time without judging or editing.</li>
          <li><strong>Word Association:</strong> List words related to your topic and find unexpected connections.</li>
          <li><strong>Reverse Thinking:</strong> Approach your topic from an opposite or unexpected angle.</li>
          <li><strong>SCAMPER Technique:</strong> Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.</li>
        </ul>
      </section>
      
      <section>
        <h3>AI-Powered Brainstorming Assistant</h3>
        <p>Enter your joke idea or topic, and our AI will generate brainstorming suggestions:</p>
        <textarea id="jokeInput" rows="4" placeholder="Enter your joke idea or topic here..."></textarea>
        <button id="generateIdeas">Generate Ideas</button>
        <div id="aiSuggestions"></div>
      </section>
    </div>
  `;

  document.getElementById('generateIdeas').addEventListener('click', generateBrainstormingIdeas);
}

async function generateBrainstormingIdeas() {
  const jokeInput = document.getElementById('jokeInput').value;
  const suggestionsDiv = document.getElementById('aiSuggestions');
  suggestionsDiv.innerHTML = '<p>Generating ideas...</p>';

  const systemPrompt = "You are a comedy writing assistant. Your task is to provide creative and unique brainstorming ideas for joke topics or premises.";
  const prompt = `${systemPrompt}\n\nHuman: Provide 5 creative brainstorming ideas or angles for the following joke topic or premise: "${jokeInput}". Be concise and focus on unique perspectives or unexpected twists.\n\nAssistant:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);  // Log the received data

    if (!data.response) {
      throw new Error('No response in data');
    }

    const ideas = data.response.split('\n').filter(idea => idea.trim() !== '');

    suggestionsDiv.innerHTML = `
      <h4>AI Suggestions:</h4>
      <ul>
        ${ideas.map(idea => `<li>${idea}</li>`).join('')}
      </ul>
    `;
  } catch (error) {
    console.error('Error details:', error);
    suggestionsDiv.innerHTML = `<p>Error generating ideas: ${error.message}. Please try again.</p>`;
  }
}

function loadWordplayGeneratorContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="wordplay-generator">
      <section>
        <h3>Wordplay Generator</h3>
        <p>Enter words or phrases (one per line) and our AI will generate various wordplay options:</p>
        <textarea id="wordplayInput" rows="5" placeholder="Enter words or phrases, one per line..."></textarea>
        <button id="generateWordplay">Generate Wordplay</button>
      </section>
      <section id="wordplayResult">
        <h4>Generated Wordplay:</h4>
        <div id="generatedWordplay"></div>
      </section>
    </div>
  `;

  document.getElementById('generateWordplay').addEventListener('click', generateWordplay);
}

async function generateWordplay() {
  const input = document.getElementById('wordplayInput').value;
  const resultDiv = document.getElementById('generatedWordplay');
  resultDiv.innerHTML = '<p>Generating wordplay...</p>';

  const prompt = `As a comedy writing assistant, generate various wordplay options using the following words or phrases:

${input}

Please provide:
1. Puns or plays on words
2. Rhymes or near-rhymes
3. Alliterations
4. Portmanteaus (blended words)
5. Homophones or homonyms
6. Anagrams
7. Spoonerisms
8. Any other clever wordplay you can think of

Be creative and try to incorporate as many of the input words/phrases as possible. Explain each wordplay briefly.`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    resultDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    resultDiv.innerHTML = `<p>Error generating wordplay: ${error.message}</p>`;
  }
}

async function explainWordplay() {
  const input = document.getElementById('wordplayInput').value;
  const type = document.getElementById('wordplayType').value;
  const generatedWordplay = document.getElementById('generatedWordplay').textContent;
  const explanationDiv = document.getElementById('wordplayExplanation');

  explanationDiv.textContent = 'Generating explanation...';

  const prompt = `Explain the following ${type} based on the original input "${input}": "${generatedWordplay}". Provide a brief explanation of how the wordplay works and why it's clever or funny.`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    explanationDiv.textContent = data.response.trim();
  } catch (error) {
    console.error('Error:', error);
    explanationDiv.textContent = `Error generating explanation: ${error.message}`;
  }
}

function loadTimingTechniquesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="timing-techniques">
      <section>
        <h3>Understanding Comedy Timing</h3>
        <p>Timing in comedy is the art of delivering jokes and punchlines at the perfect moment for maximum impact. It involves pacing, pauses, and rhythm in your delivery.</p>
      </section>
      
      <section>
        <h3>Key Timing Techniques</h3>
        <ul>
          <li><strong>The Pause:</strong> A brief silence before the punchline to build anticipation.</li>
          <li><strong>The Rush:</strong> Delivering a series of jokes rapidly to overwhelm the audience with humor.</li>
          <li><strong>The Slow Burn:</strong> Gradually building up to a big punchline over time.</li>
          <li><strong>The Callback:</strong> Referencing an earlier joke at an unexpected moment.</li>
          <li><strong>The Interruption:</strong> Cutting off a thought or sentence for comedic effect.</li>
          <li><strong>The Double Take:</strong> Reacting to your own joke as if just realizing what you said.</li>
        </ul>
      </section>
      
      <section>
        <h3>Timing Exercise</h3>
        <p>Try reading this joke aloud, experimenting with different pauses:</p>
        <blockquote>
          "I used to play piano by ear...<br>
          [PAUSE]<br>
          but now I use my hands."
        </blockquote>
        <p>Adjust the length of the pause and notice how it affects the joke's impact.</p>
      </section>
      
      <section>
        <h3>AI Timing Assistant</h3>
        <p>Enter a joke or comedic scenario, and our AI will suggest timing techniques and improvements:</p>
        <textarea id="timingInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeTiming">Analyze Timing</button>
      </section>
      <section id="timingResult">
        <h4>Timing Analysis:</h4>
        <div id="timingAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeTiming').addEventListener('click', analyzeTimingTechniques);
}

async function analyzeTimingTechniques() {
  const input = document.getElementById('timingInput').value;
  const resultDiv = document.getElementById('timingAnalysis');
  resultDiv.innerHTML = '<p>Analyzing timing...</p>';

  const prompt = `As a comedy timing expert, analyze the following joke or comedic scenario and provide advice on timing techniques:

"${input}"

Please provide:
1. Identification of potential timing techniques that could be applied
2. Suggestions for pauses, pacing, or rhythm adjustments
3. Ideas for how to maximize the comedic impact through timing
4. Potential pitfalls to avoid in the delivery
5. An example of how the joke or scenario could be delivered with optimal timing

Timing Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    resultDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    resultDiv.innerHTML = `<p>Error analyzing timing: ${error.message}</p>`;
  }
}

function loadAudienceTargetingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="audience-targeting">
      <section>
        <h3>Audience Targeting</h3>
        <p>Tailoring your comedy to specific audiences can greatly enhance its impact. This section helps you analyze and target different audience demographics.</p>
      </section>
      
      <section>
        <h3>AI Audience Analyzer</h3>
        <p>Enter a joke and target audience, and our AI will analyze its suitability:</p>
        <textarea id="jokeInput" rows="4" placeholder="Enter your joke here..."></textarea>
        <input type="text" id="audienceInput" placeholder="Enter target audience (e.g., millennials, parents, office workers)">
        <button id="analyzeAudience">Analyze for Audience</button>
        <div id="audienceAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeAudience').addEventListener('click', analyzeAudienceTarget);
}

async function analyzeAudienceTarget() {
  const joke = document.getElementById('jokeInput').value;
  const audience = document.getElementById('audienceInput').value;
  const analysisDiv = document.getElementById('audienceAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing joke for audience...</p>';

  const prompt = `Analyze the following joke for its suitability for the target audience:
  
  Joke: "${joke}"
  Target Audience: ${audience}
  
  Provide:
  1. An assessment of the joke's suitability for the target audience
  2. Potential areas of improvement to better target the audience
  3. Any potential risks or sensitivities to be aware of
  4. Suggestions for alternative punchlines or setups that might resonate better with the audience`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3.2', prompt: prompt, stream: false })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    analysisDiv.innerHTML = `<h4>Audience Analysis:</h4><p>${data.response.trim().replace(/\n/g, '<br>')}</p>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing joke for audience: ${error.message}. Please try again.</p>`;
  }
}

function loadJokeRevisionContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="joke-revision">
      <section>
        <h3>Joke Revision</h3>
        <p>Refining and improving your jokes is a crucial part of comedy writing. This section helps you revise and enhance your jokes.</p>
      </section>
      
      <section>
        <h3>AI Joke Reviser</h3>
        <p>Enter a joke and revision goal, and our AI will suggest improvements:</p>
        <textarea id="jokeInput" rows="4" placeholder="Enter your joke here..."></textarea>
        <input type="text" id="revisionGoal" placeholder="Enter revision goal (e.g., make it shorter, add wordplay)">
        <button id="reviseJoke">Revise Joke</button>
        <div id="jokeRevision"></div>
      </section>
    </div>
  `;

  document.getElementById('reviseJoke').addEventListener('click', reviseJoke);
}

async function reviseJoke() {
  const joke = document.getElementById('jokeInput').value;
  const goal = document.getElementById('revisionGoal').value;
  const revisionDiv = document.getElementById('jokeRevision');
  revisionDiv.innerHTML = '<p>Revising joke...</p>';

  const prompt = `Revise the following joke based on the given goal:
  
  Joke: "${joke}"
  Revision Goal: ${goal}
  
  Provide:
  1. A revised version of the joke
  2. An explanation of the changes made
  3. How the revision addresses the given goal
  4. Any additional suggestions for further improvement`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3.2', prompt: prompt, stream: false })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    revisionDiv.innerHTML = `<h4>Revised Joke:</h4><p>${data.response.trim().replace(/\n/g, '<br>')}</p>`;
  } catch (error) {
    console.error('Error:', error);
    revisionDiv.innerHTML = `<p>Error revising joke: ${error.message}. Please try again.</p>`;
  }
}

function loadDeliveryStylesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="delivery-styles">
      <section>
        <h3>Delivery Styles</h3>
        <p>Different delivery styles can greatly enhance the impact of your comedy. This section helps you explore and practice various delivery techniques.</p>
      </section>
      
      <section>
        <h3>AI Delivery Style Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its delivery style and suggest improvements:</p>
        <textarea id="deliveryInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeDelivery">Analyze Delivery</button>
        <div id="deliveryAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeDelivery').addEventListener('click', analyzeDeliveryStyles);
}

async function analyzeDeliveryStyles() {
  const input = document.getElementById('deliveryInput').value;
  const analysisDiv = document.getElementById('deliveryAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing delivery...</p>';

  const prompt = `As a comedy delivery expert, analyze the following joke or comedic scenario and provide advice on delivery styles:

"${input}"

Please provide:
1. Identification of the current delivery style
2. Suggestions for alternative delivery styles that could enhance the comedic impact
3. Techniques for practicing and refining the delivery
4. Potential pitfalls to avoid in the delivery
5. An example of how the joke or scenario could be delivered with an alternative style

Delivery Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing delivery: ${error.message}</p>`;
  }
}

function loadComedyTrendsContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="comedy-trends">
      <section>
        <h3>Comedy Trends</h3>
        <p>Staying up-to-date with current comedy trends can help you create fresh and relevant material. This section provides insights into popular comedy styles and topics.</p>
      </section>
      
      <section>
        <h3>AI Comedy Trend Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its relevance to current comedy trends:</p>
        <textarea id="trendInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeTrends">Analyze Trends</button>
        <div id="trendAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeTrends').addEventListener('click', analyzeComedyTrends);
}

async function analyzeComedyTrends() {
  const input = document.getElementById('trendInput').value;
  const analysisDiv = document.getElementById('trendAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing trends...</p>';

  const prompt = `As a comedy trend analyst, analyze the following joke or comedic scenario and provide insights into its relevance to current comedy trends:

"${input}"

Please provide:
1. Identification of any comedy trends or styles present in the joke or scenario
2. Assessment of how well the joke or scenario aligns with current comedy trends
3. Suggestions for how to update or adapt the material to better fit current trends
4. Examples of popular comedy trends and how they could be incorporated into the joke or scenario

Trend Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing trends: ${error.message}</p>`;
  }
}

function loadPersonaBuildingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="persona-building">
      <section>
        <h3>Persona Building</h3>
        <p>Creating compelling and relatable characters is essential for effective comedy writing. This section helps you develop and refine character personas.</p>
      </section>
      
      <section>
        <h3>AI Persona Builder</h3>
        <p>Enter a character description or scenario, and our AI will suggest ways to build and enhance the character's persona:</p>
        <textarea id="personaInput" rows="4" placeholder="Enter your character description or scenario here..."></textarea>
        <button id="buildPersona">Build Persona</button>
        <div id="personaSuggestions"></div>
      </section>
    </div>
  `;

  document.getElementById('buildPersona').addEventListener('click', buildPersona);
}

async function buildPersona() {
  const input = document.getElementById('personaInput').value;
  const suggestionsDiv = document.getElementById('personaSuggestions');
  suggestionsDiv.innerHTML = '<p>Building persona...</p>';

  const prompt = `As a comedy persona builder, analyze the following character description or scenario and provide suggestions for building and enhancing the character's persona:

"${input}"

Please provide:
1. Identification of key character traits and qualities
2. Suggestions for expanding or refining the character's background, motivations, and goals
3. Techniques for creating a more compelling and relatable persona
4. Examples of famous comedy characters and how their personas were developed

Persona Building Suggestions:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    suggestionsDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    suggestionsDiv.innerHTML = `<p>Error building persona: ${error.message}</p>`;
  }
}

function loadVisualHumorContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="visual-humor">
      <section>
        <h3>Visual Humor</h3>
        <p>Incorporating visual elements into your comedy can add depth and complexity. This section helps you explore and practice visual humor techniques.</p>
      </section>
      
      <section>
        <h3>AI Visual Humor Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its potential for visual humor and suggest improvements:</p>
        <textarea id="visualInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeVisual">Analyze Visual Humor</button>
        <div id="visualAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeVisual').addEventListener('click', analyzeVisualHumor);
}

async function analyzeVisualHumor() {
  const input = document.getElementById('visualInput').value;
  const analysisDiv = document.getElementById('visualAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing visual humor...</p>';

  const prompt = `As a visual humor expert, analyze the following joke or comedic scenario and provide advice on incorporating visual elements:

"${input}"

Please provide:
1. Identification of opportunities for visual humor
2. Suggestions for how to enhance the joke or scenario with visual elements
3. Techniques for practicing and refining visual humor delivery
4. Potential pitfalls to avoid when using visual humor
5. Examples of famous visual comedy sketches and how they work

Visual Humor Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing visual humor: ${error.message}</p>`;
  }
}

function loadJokeStructureContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="joke-structure">
      <section>
        <h3>Joke Structure</h3>
        <p>Understanding joke structure is crucial for crafting effective and engaging comedy. This section helps you analyze and refine your joke structures.</p>
      </section>
      
      <section>
        <h3>AI Joke Structure Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its structure and suggest improvements:</p>
        <textarea id="structureInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeStructure">Analyze Structure</button>
        <div id="structureAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeStructure').addEventListener('click', analyzeJokeStructure);
}

async function analyzeJokeStructure() {
  const input = document.getElementById('structureInput').value;
  const analysisDiv = document.getElementById('structureAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing joke structure...</p>';

  const prompt = `As a joke structure expert, analyze the following joke or comedic scenario and provide advice on refining its structure:

"${input}"

Please provide:
1. Identification of the current joke structure
2. Suggestions for alternative joke structures that could enhance the comedic impact
3. Techniques for practicing and refining the joke structure
4. Potential pitfalls to avoid in the current structure
5. Examples of famous jokes and how their structures work

Joke Structure Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing joke structure: ${error.message}</p>`;
  }
}

function loadExperimentalComedyContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="experimental-comedy">
      <section>
        <h3>Experimental Comedy</h3>
        <p>Pushing the boundaries of comedy can lead to fresh and innovative material. This section helps you explore and practice experimental comedy techniques.</p>
      </section>
      
      <section>
        <h3>AI Experimental Comedy Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its potential for experimental comedy and suggest improvements:</p>
        <textarea id="experimentalInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeExperimental">Analyze Experimental Comedy</button>
        <div id="experimentalAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeExperimental').addEventListener('click', analyzeExperimentalComedy);
}

async function analyzeExperimentalComedy() {
  const input = document.getElementById('experimentalInput').value;
  const analysisDiv = document.getElementById('experimentalAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing experimental comedy...</p>';

  const prompt = `As an experimental comedy expert, analyze the following joke or comedic scenario and provide advice on incorporating experimental elements:

"${input}"

Please provide:
1. Identification of opportunities for experimental comedy
2. Suggestions for how to enhance the joke or scenario with experimental elements
3. Techniques for practicing and refining experimental comedy delivery
4. Potential pitfalls to avoid when using experimental comedy
5. Examples of famous experimental comedy sketches and how they work

Experimental Comedy Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing experimental comedy: ${error.message}</p>`;
  }
}

function loadCharacterDevelopmentContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="character-development">
      <section>
        <h3>Character Development</h3>
        <p>Creating compelling and well-rounded characters is essential for effective comedy writing. This section helps you develop and refine character arcs.</p>
      </section>
      
      <section>
        <h3>AI Character Arc Builder</h3>
        <p>Enter a character description or scenario, and our AI will suggest ways to build and enhance the character's arc:</p>
        <textarea id="characterInput" rows="4" placeholder="Enter your character description or scenario here..."></textarea>
        <button id="buildCharacter">Build Character Arc</button>
        <div id="characterSuggestions"></div>
      </section>
    </div>
  `;

  document.getElementById('buildCharacter').addEventListener('click', buildCharacterArc);
}

async function buildCharacterArc() {
  const input = document.getElementById('characterInput').value;
  const suggestionsDiv = document.getElementById('characterSuggestions');
  suggestionsDiv.innerHTML = '<p>Building character arc...</p>';

  const prompt = `As a comedy character arc builder, analyze the following character description or scenario and provide suggestions for building and enhancing the character's arc:

"${input}"

Please provide:
1. Identification of key character traits and qualities
2. Suggestions for expanding or refining the character's background, motivations, and goals
3. Techniques for creating a compelling and well-rounded character arc
4. Examples of famous comedy characters and how their arcs were developed

Character Arc Building Suggestions:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    suggestionsDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    suggestionsDiv.innerHTML = `<p>Error building character arc: ${error.message}</p>`;
  }
}

function loadCulturalReferencesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="cultural-references">
      <section>
        <h3>Cultural References</h3>
        <p>Incorporating cultural references into your comedy can add depth and relevance. This section helps you explore and practice cultural humor techniques.</p>
      </section>
      
      <section>
        <h3>AI Cultural References Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its potential for cultural references and suggest improvements:</p>
        <textarea id="culturalInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeCultural">Analyze Cultural References</button>
        <div id="culturalAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeCultural').addEventListener('click', analyzeCulturalReferences);
}

async function analyzeCulturalReferences() {
  const input = document.getElementById('culturalInput').value;
  const analysisDiv = document.getElementById('culturalAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing cultural references...</p>';

  const prompt = `As a cultural references expert, analyze the following joke or comedic scenario and provide advice on incorporating cultural elements:

"${input}"

Please provide:
1. Identification of opportunities for cultural references
2. Suggestions for how to enhance the joke or scenario with cultural elements
3. Techniques for practicing and refining cultural humor delivery
4. Potential pitfalls to avoid when using cultural references
5. Examples of famous cultural comedy sketches and how they work

Cultural References Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing cultural references: ${error.message}</p>`;
  }
}

function loadComedyTheoryContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="comedy-theory">
      <section>
        <h3>Comedy Theory</h3>
        <p>Understanding the principles of comedy theory can help you craft more effective and engaging material. This section provides insights into key comedy concepts.</p>
      </section>
      
      <section>
        <h3>AI Comedy Theory Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its alignment with comedy theory principles and suggest improvements:</p>
        <textarea id="theoryInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeTheory">Analyze Comedy Theory</button>
        <div id="theoryAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeTheory').addEventListener('click', analyzeComedyTheory);
}

async function analyzeComedyTheory() {
  const input = document.getElementById('theoryInput').value;
  const analysisDiv = document.getElementById('theoryAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing comedy theory...</p>';

  const prompt = `As a comedy theory expert, analyze the following joke or comedic scenario and provide advice on aligning it with comedy theory principles:

"${input}"

Please provide:
1. Identification of comedy theory principles present in the joke or scenario
2. Assessment of how well the joke or scenario aligns with these principles
3. Suggestions for how to enhance the joke or scenario's alignment with comedy theory
4. Examples of famous comedy sketches that exemplify key comedy theory concepts

Comedy Theory Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing comedy theory: ${error.message}</p>`;
  }
}

function loadStandupStructuresContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="standup-structures">
      <section>
        <h3>Stand-up Structures</h3>
        <p>Mastering stand-up structures can help you create more cohesive and engaging performances. This section helps you explore and practice various stand-up structures.</p>
      </section>
      
      <section>
        <h3>AI Stand-up Structure Analyzer</h3>
        <p>Enter a stand-up routine or performance, and our AI will analyze its structure and suggest improvements:</p>
        <textarea id="standupInput" rows="4" placeholder="Enter your stand-up routine or performance here..."></textarea>
        <button id="analyzeStandup">Analyze Stand-up Structure</button>
        <div id="standupAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeStandup').addEventListener('click', analyzeStandupStructures);
}

async function analyzeStandupStructures() {
  const input = document.getElementById('standupInput').value;
  const analysisDiv = document.getElementById('standupAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing stand-up structure...</p>';

  const prompt = `As a stand-up structure expert, analyze the following stand-up routine or performance and provide advice on refining its structure:

"${input}"

Please provide:
1. Identification of the current stand-up structure
2. Suggestions for alternative stand-up structures that could enhance the performance
3. Techniques for practicing and refining the stand-up structure
4. Potential pitfalls to avoid in the current structure
5. Examples of famous stand-up routines and how their structures work

Stand-up Structure Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing stand-up structure: ${error.message}</p>`;
  }
}

function loadSketchWritingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="sketch-writing">
      <section>
        <h3>Sketch Writing</h3>
        <p>Crafting compelling and well-structured sketches is essential for effective comedy writing. This section helps you develop and refine your sketch writing skills.</p>
      </section>
      
      <section>
        <h3>AI Sketch Writer</h3>
        <p>Enter a sketch description or scenario, and our AI will suggest ways to build and enhance the sketch:</p>
        <textarea id="sketchInput" rows="4" placeholder="Enter your sketch description or scenario here..."></textarea>
        <button id="writeSketch">Write Sketch</button>
        <div id="sketchSuggestions"></div>
      </section>
    </div>
  `;

  document.getElementById('writeSketch').addEventListener('click', writeSketch);
}

async function writeSketch() {
  const input = document.getElementById('sketchInput').value;
  const suggestionsDiv = document.getElementById('sketchSuggestions');
  suggestionsDiv.innerHTML = '<p>Writing sketch...</p>';

  const prompt = `As a sketch writer, analyze the following sketch description or scenario and provide suggestions for building and enhancing the sketch:

"${input}"

Please provide:
1. Identification of key sketch elements and concepts
2. Suggestions for expanding or refining the sketch's characters, plot, and dialogue
3. Techniques for creating a compelling and well-structured sketch
4. Examples of famous comedy sketches and how they were developed

Sketch Writing Suggestions:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    suggestionsDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    suggestionsDiv.innerHTML = `<p>Error writing sketch: ${error.message}</p>`;
  }
}

function loadObservationalHumorContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="observational-humor">
      <section>
        <h3>Observational Humor</h3>
        <p>Drawing humor from everyday observations can lead to fresh and relatable material. This section helps you explore and practice observational humor techniques.</p>
      </section>
      
      <section>
        <h3>AI Observational Humor Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its potential for observational humor and suggest improvements:</p>
        <textarea id="observationalInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeObservational">Analyze Observational Humor</button>
        <div id="observationalAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeObservational').addEventListener('click', analyzeObservationalHumor);
}

async function analyzeObservationalHumor() {
  const input = document.getElementById('observationalInput').value;
  const analysisDiv = document.getElementById('observationalAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing observational humor...</p>';

  const prompt = `As an observational humor expert, analyze the following joke or comedic scenario and provide advice on incorporating observational elements:

"${input}"

Please provide:
1. Identification of opportunities for observational humor
2. Suggestions for how to enhance the joke or scenario with observational elements
3. Techniques for practicing and refining observational humor delivery
4. Potential pitfalls to avoid when using observational humor
5. Examples of famous observational comedy sketches and how they work

Observational Humor Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing observational humor: ${error.message}</p>`;
  }
}

function loadMemeCreationContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="meme-creation">
      <section>
        <h3>Meme Creation</h3>
        <p>Creating viral memes can be a fun and effective way to share comedy. This section helps you explore and practice meme creation techniques.</p>
      </section>
      
      <section>
        <h3>AI Meme Generator</h3>
        <p>Enter a meme idea or scenario, and our AI will suggest ways to create a viral meme:</p>
        <textarea id="memeInput" rows="4" placeholder="Enter your meme idea or scenario here..."></textarea>
        <button id="generateMeme">Generate Meme</button>
        <div id="memeSuggestions"></div>
      </section>
    </div>
  `;

  document.getElementById('generateMeme').addEventListener('click', generateMeme);
}

async function generateMeme() {
  const input = document.getElementById('memeInput').value;
  const suggestionsDiv = document.getElementById('memeSuggestions');
  suggestionsDiv.innerHTML = '<p>Generating meme...</p>';

  const prompt = `As a meme generator, analyze the following meme idea or scenario and provide suggestions for creating a viral meme:

"${input}"

Please provide:
1. Identification of key meme elements and concepts
2. Suggestions for expanding or refining the meme's visuals, text, and humor
3. Techniques for creating a shareable and engaging meme
4. Examples of popular meme formats and how they can be adapted

Meme Generation Suggestions:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    suggestionsDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    suggestionsDiv.innerHTML = `<p>Error generating meme: ${error.message}</p>`;
  }
}

function loadJokeAnalysisContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="joke-analysis">
      <section>
        <h3>Joke Analysis</h3>
        <p>Analyzing jokes can help you understand their structure and humor. This section helps you explore and practice joke analysis techniques.</p>
      </section>
      
      <section>
        <h3>AI Joke Analyzer</h3>
        <p>Enter a joke or comedic scenario, and our AI will analyze its structure and humor:</p>
        <textarea id="jokeAnalysisInput" rows="4" placeholder="Enter your joke or comedic scenario here..."></textarea>
        <button id="analyzeJoke">Analyze Joke</button>
        <div id="jokeAnalysisResult"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeJoke').addEventListener('click', analyzeJoke);
}

async function analyzeJoke() {
  const input = document.getElementById('jokeAnalysisInput').value;
  const analysisDiv = document.getElementById('jokeAnalysisResult');
  analysisDiv.innerHTML = '<p>Analyzing joke...</p>';

  const prompt = `As a joke analyzer, analyze the following joke or comedic scenario and provide insights into its structure and humor:

"${input}"

Please provide:
1. Identification of the joke's structure and type
2. Explanation of how the joke works and delivers humor
3. Analysis of the joke's setup, delivery, and punchline
4. Comparison to famous jokes and their analysis

Joke Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing joke: ${error.message}</p>`;
  }
}

function loadComedyExercisesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="comedy-exercises">
      <section>
        <h3>Comedy Exercises</h3>
        <p>Practicing comedy exercises can help you improve your skills and creativity. This section provides a variety of exercises to enhance your comedy writing abilities.</p>
      </section>
      
      <section>
        <h3>AI Comedy Exercise Generator</h3>
        <p>Select a comedy exercise category, and our AI will generate a custom exercise for you:</p>
        <select id="exerciseCategory">
          <option value="wordplay">Wordplay</option>
          <option value="timing">Timing</option>
          <option value="character">Character Development</option>
          <option value="structure">Joke Structure</option>
          <option value="delivery">Delivery Styles</option>
        </select>
        <button id="generateExercise">Generate Exercise</button>
        <div id="exerciseSuggestion"></div>
      </section>
    </div>
  `;

  document.getElementById('generateExercise').addEventListener('click', generateComedyExercise);
}

async function generateComedyExercise() {
  const category = document.getElementById('exerciseCategory').value;
  const suggestionDiv = document.getElementById('exerciseSuggestion');
  suggestionDiv.innerHTML = '<p>Generating exercise...</p>';

  const prompt = `As a comedy exercise generator, generate a custom exercise for the following category:

Category: ${category}

Please provide:
1. A description of the exercise and its objectives
2. Instructions on how to complete the exercise
3. Tips and suggestions for mastering the exercise
4. Examples of exercises from this category

Comedy Exercise:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    suggestionDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    suggestionDiv.innerHTML = `<p>Error generating exercise: ${error.message}</p>`;
  }
}

function loadImprovTechniquesContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="improv-techniques">
      <section>
        <h3>Improv Techniques</h3>
        <p>Incorporating improv techniques into your comedy can lead to more spontaneous and engaging performances. This section helps you explore and practice improv techniques.</p>
      </section>
      
      <section>
        <h3>AI Improv Technique Analyzer</h3>
        <p>Enter a comedic scenario or performance, and our AI will analyze its potential for improv techniques and suggest improvements:</p>
        <textarea id="improvInput" rows="4" placeholder="Enter your comedic scenario or performance here..."></textarea>
        <button id="analyzeImprov">Analyze Improv Techniques</button>
        <div id="improvAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeImprov').addEventListener('click', analyzeImprovTechniques);
}

async function analyzeImprovTechniques() {
  const input = document.getElementById('improvInput').value;
  const analysisDiv = document.getElementById('improvAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing improv techniques...</p>';

  const prompt = `As an improv technique expert, analyze the following comedic scenario or performance and provide advice on incorporating improv elements:

"${input}"

Please provide:
1. Identification of opportunities for improv techniques
2. Suggestions for how to enhance the scenario or performance with improv elements
3. Techniques for practicing and refining improv delivery
4. Potential pitfalls to avoid when using improv techniques
5. Examples of famous improv comedy sketches and how they work

Improv Techniques Analysis:`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: prompt,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    analysisDiv.innerHTML = `<pre>${data.response.trim()}</pre>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing improv techniques: ${error.message}</p>`;
  }
}

function loadAudienceTargetingContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="audience-targeting">
      <section>
        <h3>Audience Targeting</h3>
        <p>Tailoring your comedy to specific audiences can greatly enhance its impact. This section helps you analyze and target different audience demographics.</p>
      </section>
      
      <section>
        <h3>AI Audience Analyzer</h3>
        <p>Enter a joke and target audience, and our AI will analyze its suitability:</p>
        <textarea id="jokeInput" rows="4" placeholder="Enter your joke here..."></textarea>
        <input type="text" id="audienceInput" placeholder="Enter target audience (e.g., millennials, parents, office workers)">
        <button id="analyzeAudience">Analyze for Audience</button>
        <div id="audienceAnalysis"></div>
      </section>
    </div>
  `;

  document.getElementById('analyzeAudience').addEventListener('click', analyzeAudienceTarget);
}

async function analyzeAudienceTarget() {
  const joke = document.getElementById('jokeInput').value;
  const audience = document.getElementById('audienceInput').value;
  const analysisDiv = document.getElementById('audienceAnalysis');
  analysisDiv.innerHTML = '<p>Analyzing joke for audience...</p>';

  const prompt = `Analyze the following joke for its suitability for the target audience:
  
  Joke: "${joke}"
  Target Audience: ${audience}
  
  Provide:
  1. An assessment of the joke's suitability for the target audience
  2. Potential areas of improvement to better target the audience
  3. Any potential risks or sensitivities to be aware of
  4. Suggestions for alternative punchlines or setups that might resonate better with the audience`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3.2', prompt: prompt, stream: false })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    analysisDiv.innerHTML = `<h4>Audience Analysis:</h4><p>${data.response.trim().replace(/\n/g, '<br>')}</p>`;
  } catch (error) {
    console.error('Error:', error);
    analysisDiv.innerHTML = `<p>Error analyzing joke for audience: ${error.message}. Please try again.</p>`;
  }
}

function loadJokeRevisionContent() {
  const specificComponentContent = document.getElementById('specific-component-content');
  specificComponentContent.innerHTML = `
    <div class="joke-revision">
      <section>
        <h3>Joke Revision</h3>
        <p>Refining and improving your jokes is a crucial part of comedy writing. This section helps you revise and enhance your jokes.</p>
      </section>
      
      <section>
        <h3>AI Joke Reviser</h3>
        <p>Enter a joke and revision goal, and our AI will suggest improvements:</p>
        <textarea id="jokeInput" rows="4" placeholder="Enter your joke here..."></textarea>
        <input type="text" id="revisionGoal" placeholder="Enter revision goal (e.g., make it shorter, add wordplay)">
        <button id="reviseJoke">Revise Joke</button>
        <div id="jokeRevision"></div>
      </section>
    </div>
  `;

  document.getElementById('reviseJoke').addEventListener('click', reviseJoke);
}

async function reviseJoke() {
  const joke = document.getElementById('jokeInput').value;
  const goal = document.getElementById('revisionGoal').value;
  const revisionDiv = document.getElementById('jokeRevision');
  revisionDiv.innerHTML = '<p>Revising joke...</p>';

  const prompt = `Revise the following joke based on the given goal:
  
  Joke: "${joke}"
  Revision Goal: ${goal}
  
  Provide:
  1. A revised version of the joke
  2. An explanation of the changes made
  3. How the revision addresses the given goal
  4. Any additional suggestions for further improvement`;

  try {
    const response = await fetch("/proxy/generate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3.2', prompt: prompt, stream: false })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    sketchIdeaDiv.innerHTML = `<h4>Generated Sketch Idea:</h4><p>${data.response.trim().replace(/\n/g, '<br>')}</p>`;
  } catch (error) {
    console.error('Error:', error);
    sketchIdeaDiv.innerHTML = `<p>Error generating sketch idea: ${error.message}. Please try again.</p>`;
  }
}
