# Roll-the-dice
[Play from here]https://hemanandinikanna006-dev.github.io/Roll-the-dice/

A high-energy, neon-themed dice game built with Vanilla JavaScript. 
This project uses mathematical randomization to determine a winner between two users, featuring a vibrant linear gradient background and glowing UI elements.

# Features
1.Randomized Duel: Every page load triggers a fresh "battle" between User 1 and User 2 using Math.random().
2.Dynamic DOM Manipulation: JavaScript automatically updates the dice images (src attributes) and the winner's heading (h1) based on the roll.
3.Neon Aesthetic: Uses a custom color palette (--clr-neon) and text-shadow to create a glowing effect on the refresh button.
4.Modern Background: A smooth linear-gradient transition from Blue to Pink for a modern look.

## How it Works
- The Math: The game calculates two random integers between 1 and 6 using the formula:Math.floor(Math.random() * 6) + 1
- The Update: The script selects the <img> elements and swaps their assets to match the generated numbers.
- The Result: * If User 1 rolls higher -> "The winner is user 1"
  If User 2 rolls higher -> "The winner is user 2
  "If equal -> "It's a tie/draw!!".
# Technologies Used
1.HTML5: Basic structure using wrapper and dice-area classes.
2.CSS3: Custom variables, flexbox-style alignment, and neon-style borders.
3.JavaScript: Logic for randomization and conditional rendering of the winner's name.
## Project Structure
```
Plaintext
├── index.html     # Page structure
├── style.css      # Neon variables & linear-gradient styles
├── script.js      # Randomization & image logic<img width="1901" height="903" alt="p2" src="https://github.com/user-attachments/assets/6adafff2-4e84-4d3c-8bcd-ed35a7b61b5b" />
<img width="1896" height="903" alt="p3" src="https://github.com/user-attachments/assets/51a4115d-b09e-4dc3-8090-1460062b2042" />
<img width="1901" height="903" alt="p2" src="https://github.com/user-attachments/assets/571024b9-5d86-4f0b-82e3-27cad9e75685" />

└── assets/        # Folder containing dice1.png through dice6.png
```
# A Glimpse of the Game:
<img width="1901" height="903" alt="p2" src="https://github.com/user-attachments/assets/35d6bc70-5aaf-4f72-85e0-6be74aea7983" />
<img width="1896" height="903" alt="p3" src="https://github.com/user-attachments/assets/292a2114-23b7-4bae-a916-4078a972c2b6" />
<img width="1894" height="905" alt="p1" src="https://github.com/user-attachments/assets/55690449-6971-427a-bf99-cf5e6138955d" />
