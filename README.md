# liverpool-homepage


## Installation

```bash
git clone https://github.com/CyberKL/liverpool-homepage.git
cd liverpool-homepage
npm install
```

## Setting up the news api key

### Obtaining a key
First you need to obatin an api key by registering at `https://newsapi.org/`

### Setting the key env variable

#### For Linux/MacOS or Git Bash
``` bash
export VITE_NEWS_API_KEY=your_api_key
```

#### For Windows (command prompt)
``` batch
set VITE_NEWS_API_KEY=your_api_key
```

#### For Windows (PowerShell)
``` PowerShell
$env:VITE_NEWS_API_KEY=your_api_key
```

## Running the project

```bash
npm run dev
```

After following the steps above you can visit `http://localhost:5173` on your browser to view the website