# Genshin Impact - Website for WIKI and QUIZ
This website allows user to get familiar with Genshin Character, and have a fun quiz to test their understanding, which allows them to challenge their freind on the Leaderboard.

## Design Process

### Target Audience
The website is designed for New Genshin Player who is not familiar with the gameplay and information, they can understand more about all characters from here.
### User Stories
- As a user, I want to be able to check the character details so that I can understand more about characters.
- As a user, I want to have a quick test about the game knowledge so that I know how well I am in this game.
- As a user, I want to have a leaderboard function so that my highscore can be shown and challenge my friend.
- As a user, I would like the website to incorporate elements from the game, such as Genshin music and imagery, to create a closer link to the gaming experience so that I can immerse more deeply in the content and feel connected to game environment.

### Existing Features

1. **Toggle Menu Functionality**: This function toggles the appearance of a menu icon and a dropdown content section when invoked, the menu icon's class is toggled to change its appearance, and the dropdown content's class is toggled to show or hide it.

2. **Media Autoplay**: The website plays home music automatically upon loading, enhancing the user experience with auditory elements.

3. **Character Data Retrieval and Filtering**: The code fetches character data from the provided API endpoint (https://genshin.jmp.blue/characters/all) using the Fetch API.
It then allows users to filter characters dynamically based on the input entered into the search field (searchInput).
Filtered characters are rendered based on the search criteria, updating the displayed characters in real-time.

4. **Exception Handling for Character Images**: The code handles exceptions for character images that may not match the standard URL format.
It checks for specific character names or conditions and constructs appropriate image URLs accordingly.
Exception handling ensures that character images are displayed correctly even in cases where the standard URL format doesn't apply.

5. **Initializing Quiz**: The website initializes various elements and variables needed for the quiz, such as question display, choices, score tracking, with the use of API to fetch the character data aysnchronously to populate the shuffled questions.

6. **Checking Answer**: Validates the user's selected choice against the correct answer.
It provides visual feedback by highlighting the correct and incorrect choices and updates the score accordingly.

7. **Quiz Time Limit**: Limit the time available for answering and progresses to the next question if no choice is selected.

8. **Leaderboard**: Display Top 5 players and store it to local storage.

9.  **Lottie Animation**: Incorporate Lottie animations into the quiz interface to enhance the visual experience for players during the quiz session, providing them with engaging visual elements.

### Features Left to Implement

**1. Lottie while fetching API in wiki.html**: This allows the fetched data to be shown right after the lottie so that user does not have to wait at the unloaded page.


**2. Fetching data for Weapon**: Only Character data is fetched, but Weapon is not.


**3. Reset Lottie Animation if a new quiz question is loaded**: Allow them to track their time left more easily.


**4. Fetch the Wishes Record using API achieved from the game**: Allow users to track their pulling records and store it locally, this provides conveniences to users, but seems to face some CORS issue and unable to solve.

### Technology Used
**1. HTML: The standard markup language for creating web pages.**

**2. CSS: The style sheet language used for designing the presentation of the HTML.**

**3. JavaScript: A programming language used for dynamic behavior on the website.**

**4. Google Fonts - Raleway: The Raleway font from Google Fonts is used for a visually appealing text presentation.**

## Testing

### Code tested and works on Chrome,Microsoft Edge & FireFox, media autoplay needs to be on to load the background music

### Updates for Leaderboard
**1. Go to the Leaderboard page after entering UNIQUE name, else, prompt for re-entering:**
   - Navigate to the 'Leaderboard' page.

**2. Cancel**
   - If users do not wish to be shown on Leaderboard, they have a cancel option.
   - Show a Thank You message.

**3. Maximum 5 Players shown on Leaderboard**
   - Players with the lowest score will be overwritten and no longer be shown on Leaderboard if Leaderboard exceeds 5 players.

**4. Display the Leaderboard in Descending Order and Store it in LocalStorage so it can be seen all the time**
   - Rank from Highest score to lowest score.
   - Data remains when running Leaderboard.html.

### Browser and Screen Testing

The code has been tested on Mobile layout (Iphone 14 Max Pro)
- The dropdown content have a responsive design to ensure usability on different devices.
- Ensure that users can see the content clearly using mobile layout.
## Credit

API : https://github.com/genshindev/api


#Media & Music
Chevreuse.png: https://static.wikia.nocookie.net/gensin-impact/images/6/65/Chevreuse_Card.png/revision/latest?cb=20231106101142

Genshin Impact.svg: https://logowik.com/genshin-impact-logo-vector-svg-pdf-ai-eps-cdr-free-download-12203.html

background.jpg:https://i.pinimg.com/originals/71/de/86/71de863e48b9f3c25419ae7f3ad3e5e7.jpg

homepagebackground.png: https://i.redd.it/66ic9c791ih61.png

template color references: https://en.moegirl.org.cn/Template:Genshincolor

quiz background: https://i.pinimg.com/originals/c4/19/7d/c4197d1cf950efbd2f69b477aa5354d0.jpg

leaderboard background: https://moewalls.com/wp-content/uploads/2023/02/sumeru-genshin-impact-thumb.jpg

All background music from: https://www.youtube.com/watch?v=rg6fQMLB8Tk&t=9998s

Youtube to MP3 converter: https://ytmp3.nu/AFqB/