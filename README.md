# Bot Battle

## Phase 2 : Week 2 Code Challenge

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


## Introduction

Bot Battle is a React mini web app built as part of Phase 2: Week 2 code challenge to practice on components, props, state, events, and data fetching in React.

This application displays a list of available bots, among other features

## Features

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.
- Choose if I want to enlist a bot into my army or just see their data. Clicking
  on the card should instead display a show view (`BotSpecs`) for that bot,
  which should replace `BotsCollection`. BotSpecs should have two buttons: one
  to go back to the list view and another to enlist that bot.

## Dependencies

### Prerequisites

Before running this app, make sure you have the following installed on your system:

- Node.js (v18.15.0 or later)
- npm (v9.6.7 or later)

#### Front-end Dependencies

- React (v18.2.0)
- React DOM (v18.2.0)
- React Scripts (v5.0.1)

## Project Setup

### 1. Clone the repository

```
git clone https://github.com/Nganga-A/React-Wk2-Code-Challenge-Bot-Battlr
```

### 2. Navigate to the project directory

```
cd phase2/react-wk2-code-challenge-bot-battlr
```

### 3. Install required dependencies

In the project directory, install the required dependencies

```
npm install
```

### 4. Install and start JSON server

#### Install JSON server

```
npm install -g json-server
```

#### Start JSON Server

```
json-server --watch db.json
```

- **Note:** Running this command will instruct `json-server` to use the `db.json` file in the terminal's current directory, so make sure to run this command from the same directory as this project.

#### Test the server by visiting this route in the browser

```
http://localhost:8001/transactions
```

Sample:

```json
{
  "bots": [
    {
      "id": 133,
      "name": "ed-84",
      "health": 54,
      "damage": 22,
      "armor": 93,
      "bot_class": "Defender",
      "catchphrase": "01111001010100000000111111110110100",
      "avatar_url": "https://robohash.org/vitaeutporro.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:11.501Z",
      "updated_at": "2018-10-02T19:55:11.501Z"
    },
    {
      "id": 134,
      "name": "xG-91",
      "health": 40,
      "damage": 33,
      "armor": 81,
      "bot_class": "Defender",
      "catchphrase": "11101000001100011110000010000111101",
      "avatar_url": "https://robohash.org/oditdoloresullam.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:11.528Z",
      "updated_at": "2018-10-02T19:55:11.528Z"
    }, 
]
}
```

### 5. Start the development server

```
npm start
```

This runs the app in the development mode.

### 6. Open your browser and interact with the app

The app will open on your default browser automatically when `npm start` is run, but if it doesn't, open [http://localhost:3000](http://localhost:3000) to view it.

You may also see any lint errors or logs in the console.

### Tree view of the component parent-child structure

```text
└── App
    ├── YourBotArmy
    |  ├── BotCard
    ├── BotCollection
    |  ├── BotCard
    
```

## Code Challenge Deliverables

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

## Bonus Deliverables

- Choose if I want to enlist a bot into my army or just see their data. Clicking
  on the card should instead display a show view (`BotSpecs`) for that bot,
  which should replace `BotsCollection`. BotSpecs should have two buttons: one
  to go back to the list view and another to enlist that bot. Your app could
  look like the following:
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added
  to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component,
  `SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are
  `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## Author & License

Authored by [Abed Nganga](https://github.com/Nganga-A).

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.