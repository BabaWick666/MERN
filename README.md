
# verbHub- My first backend development project




## What is it about?
Welcome to verbHub, the ultimate playground for backend adventurers! 🎉 In this thrilling project, we embark on an exciting journey to explore the magical world of word-meaning pairs stored in a MongoDB database. Get ready to unleash your creativity as we showcase the power of CRUD operations using Express.js, all while having a ton of fun!
## Tech Stack 🛠️
Node.js,
Express.js and
MongoDB.


## API Endpoints
Explore the world of verbHub using these magical endpoints:

- GET /words: Discover all the words and their mysterious meanings.
- POST /words: Create a new word and give it a meaning of your choice! (Request Body: { "word": "example", "meaning": "a representative form or pattern" })
- GET /words/findWord: search meaning for a specific word
- PUT /words/:id: Rewrite the meaning of a word and change its destiny! (Request Body: { "meaning": "new meaning" })
- DELETE /words/:id: Erase a word and its meaning from the realm by providing its ID.
## MVC Framework - Your Path to Creativity 🎨
The verbHub project follows the whimsical MVC (Model-View-Controller) design pattern, unlocking the gates to your creative freedom!

- Models(models): Meet the "dictionary" model, the master of word-meaning pairs. With the help of Mongoose, it communicates with the magical MongoDB database, keeping the secrets safe.

- Views(routes): In this adventure, views take a different form. JSON responses will guide you on your journey.

- Controllers(controllers): Behold the "verController," your loyal companion. It bridges the gap between the "Word" model and the enchanted routes, paving the way for your extraordinary creations!
## Middleware Magic ✨
The mystical middleware is omnipresent, protecting and guiding the requests across the kingdom of verbHub.
## Conclusion 🌟
Congratulations! You've completed the thrilling backend adventure in verbHub, and now you're equipped with the knowledge of MongoDB CRUD and Express.js magic! But the story doesn't end here. It's time to embark on an exciting new journey and bring your backend powers to the enchanting world of frontend development with React!