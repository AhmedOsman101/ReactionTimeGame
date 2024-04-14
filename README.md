<!-- documentation for the Reaction Time game made with vue3 composition api and tailwind css -->

# Reaction Time Game

This is a simple game that measures how fast your reactions and reflexes are.

## Game idea

- The game starts when the player clicks the Start Game button.
- After that the game shows a green box to the player after a random amount of time.
- The player has to click on the box as fast as possible in order for him to achieve a high score

## Technologies Used

I used [Tailwind CSS](https://tailwindcss.com/) for styling. <br>
**[Vite](https://vitejs.dev/)** for asset bundling. <br>
**[Vue](https://vuejs.org/)**
3 [Composition API](https://vuejs.org/api/composition-api-setup.html#composition-api-setup) for the game logic and UI reactivity.

## Game Logic

When the player open up the game we track five things:

1. Is it the first game or not?
    - based on that we show a custom message to start the new game and also it's used to set the score back to 0 after each new game.

2. The toggle state of the box
    - In order for our green box to show we need a condition to show and hide this box.
    - In our case I made the toggle a `boolean` that's `false` by default therefor the box is hidden.
    - When the player starts the game the function `ButtonClick()` is invoked to

## Project setup

1. Installing frontend assets

```bash
npm install
```

2. Running the app

```bash
npm run dev
```

3. Open the game in the browser from **[Here](https://ahmedosman101.github.io/ReactionTimeGame/)**
