![TheUnnix](https://img.shields.io/badge/theunnix-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)
![SHPETIMALIU](https://img.shields.io/badge/SHPETIM-ALIU-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)

# Netflix Clone

![Netflix Clone](https://raw.githubusercontent.com/shpetimaliu/netflix-app/master/public/netflix.svg)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)

## Introduction

Netflix Clone is a project developed in ReactJS. This project serves as a demonstration to clone the Netflix web interface.

## Technologies Used

- ReactJS
- Axios for API requests
- Firebase for authentication
- React Router for navigation
- Redux for state management

## Features

### Home Screen

The `HomeScreen` component displays the main Netflix-style page with the following sections:

- Netflix Originals
- Top Rated
- Trending
- Action Movies
- Comedies
- Horror Movies
- Romantic Movies
- Documentaries

### Sign-in and Sign-up

The project includes authentication features with a sign-in screen (`LoginScreen`) and a sign-up screen (`SignUpScreen`) for user registration.

### User Profile

Users can view their profile (`ProfileScreen`), including their email address and subscription plans. They can also log out of their account.

### `HomeScreen` (Main Screen)

The main screen is the primary component of the project's homepage and includes several important functions:

- `Banner`: This component displays a rotating banner with information about a Netflix movie or TV show. It uses `axios` to make API requests and `useState` to store movie information.

- `Nav`: The navigation component displays the Netflix logo and a user profile icon. It also tracks window scrolling to change the background color when the user scrolls.

- `Row`: This component is used to display rows of movies in different categories. It uses `axios` to request movies for each category and `useState` to manage movie lists.

### `LoginScreen`

The `LoginScreen` is responsible for managing the login process and interacting with the registration screen (`SignUpScreen`). It uses `useState` to control login and registration data.

### `SignUpScreen`

`SignUpScreen` allows users to create a new account. It uses `useRef` to retrieve email and password values, then uses `auth.createUserWithEmailAndPassword` to create the account in Firebase. It also uses `auth.signInWithEmailAndPassword` to log users in.

### `ProfileScreen`

`ProfileScreen` displays user information such as their email and subscription plans. It also provides a button to log out using `auth.signOut()` and a button to return to the Home screen.

### `Banner`

`Banner` displays a rotating background banner with the title and summary of a Netflix movie or TV show. It uses `useState` to store movie information and `useEffect` to make API requests.

### `Nav` (Navigation)

`Nav` is the navigation component that provides three elements (Logo / Sign-In Button / Avatar): The logo has a link to return to the main page / The Sign-In button redirects to the login or registration page, and the avatar is displayed after logging in with a link that takes you to the /profile section. Nav also uses `useState` to change the background color when the user scrolls.

### `Plans`

`Plans` displays the list of Netflix subscription plans. It has a red color on the button if not selected and turns gold when the user selects a subscription.

### `Row`

`Row` is the component that displays a row of movie or TV show posters. It uses `axios` to request movie information and `useState` to manage the list of movies. To display movie posters, it uses `map` to process each individual movie.

### API Functions (requests.js)

`requests.js` is a separate file that contains functions for fetching data from the themoviedb.org API. Some of the available functions are:

- `fetchTrading`: Retrieves data about the week's trends in the world of movies and TV shows.
- `fetchNetflixOriginals`: Retrieves data about Netflix's original productions.
- `fetchTopRated`: Retrieves data about the highest-rated movies.
- `fetchActionMovies`: Retrieves data about action genre movies.
- `fetchComedyMovies`: Retrieves data about comedy genre movies.
- `fetchHorrorMovies`: Retrieves data about horror genre movies.
- `fetchRomanceMovies`: Retrieves data about romantic genre movies.
- `fetchDocumentariesMovies`: Retrieves data about documentary genre movies.

These functions use the API key (`API_KEY`) to make requests to themoviedb.org and return the received data.

### Redux - `userSlice`

`userSlice` is a part of state management in the project, created with Redux Toolkit. This slice is used to manage user information and includes two main reducers:

- `login`: This reducer is used to store user information in the application state when logging in.
- `logout`: This reducer is used to remove user information from the application state when logging out.

To use these functions in the project, use `dispatch` to send their actions. For example, to log in a user, use `dispatch(login({ uid: userAuth.uid, email: userAuth.email }))`, where `userData` is the user information you want to store. To log out, I have used `dispatch(logout())`.

## Project Structure

The project is organized into the following main components:

- `HomeScreen`: The main component of the homepage.
- `LoginScreen` and `SignUpScreen`: Authentication screens.
- `ProfileScreen`: User profile screen.
- `Banner`: Dynamic banner component.
- `Nav`: Navigation component.
- `Plans`: Subscription plan component.
- `Row`: Component for displaying rows of movie posters.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/shpetimaliu/netflix-app
```

2. Navigate to the project directory:

```bash
cd netflix-app-master
```

3. Install project dependencies:

```bash
npm install
```

4. Configure Firebase Authentication:

   - Create a Firebase project and configure it with your Firebase credentials.
   - Replace the Firebase configuration in the project with yours, change the name from .env.example to .env, and also update the credentials in .env.

5. Start the server:

```bash
npm start
```

## Usage

- Access the application by opening a web browser and navigating to `http://localhost:3000`.

## Contribute

Contributions to this project are welcome! If you wish to contribute, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.

Thank you!

---

# Netflix Clone (🇦🇱)

# Netflix Clone

![Netflix Clone](netflix.svg)

## Tabela e Përmbajtjes

- [Introduksioni](#introduksioni)

- [Teknologjitë e Përdorura](#teknologjitë-e-përdorura)

- [Karakteristikat](#karakteristikat)

- [Struktura e Projektit](#struktura-e-projektit)

- [Instalimi](#instalimi)

- [Përdorimi](#përdorimi)

- [Kontribo](#kontribo)

## Introduksioni

Netflix Clone është një projekt i zhvilluar në ReactJS. Ky projekt shërben si një demonstrim per te klonuar webin e Netflix.

## Teknologjitë e Përdorura

- ReactJS

- Axios për kërkesat e API

- Firebase për autentifikimin

- React Router për navigimin

- Redux për menaxhimin e gjendjes

## Karakteristikat

### Home Screen (Home Screen)

Komponenti `HomeScreen` shfaq faqen kryesore në stilin e Netflix me seksionet e mëposhtme:

- Netflix Originals

- Më të vlerësuarat

- Trending

- Filmat Aksion

- Filmat komedi

- Filmat horror

- Filmat romantikë

- Filmat dokumentarë

### Kyçja dhe Regjistrimi

Projekti përfshin veçoritë e autentifikimit me një ekran kyçje (`LoginScreen`) dhe një ekran regjistrimi (`SignUpScreen`) për regjistrimin e përdoruesve.

### Profili i Përdoruesit

Përdoruesit mund të shikojnë profilin e tyre (`ProfileScreen`), përfshirë adresën e tyre email dhe planet e abonimit. Ata gjithashtu mund të dalin nga llogaria e tyre.

### `HomeScreen` (Ekrani Kryesor)

Ekrani kryesor është komponenti kryesor i faqes së fillimit të projektit dhe përfshin disa funksione të rëndësishme:

- `Banner`: Ky komponent shfaq një banner të ndryshueshëm me informacion mbi një film ose shfaqje televizive nga Netflix. Përdoret `axios` për të bërë kërkesa në API dhe `useState` për të ruajtur informacionin e filmave.

- `Nav`: Komponenti i navigimit shfaq logon e Netflix dhe një ikonë për profillin e përdoruesit. Po ashtu, ndjek scroll-in e window për të ndryshuar ngjyrën e sfondit kur përdoruesi bën scroll.

- `Row`: Ky komponent përdoret për të shfaqur rreshta të filmave në kategoritë e ndryshme. Përdor `axios` për të kërkuar filmat për secilën kategori dhe `useState` për të menaxhuar listat e filmave.

### `LoginScreen` (Ekrani i Kyçjes)

- `LoginScreen` është përgjegjës për menaxhimin e procesit të kyçjes dhe ndërveprimin me ekranin e regjistrimit (`SignUpScreen`). Përdor `useState` për të kontrolluar të dhënat e kyçjes dhe regjistrimit.

### `SignUpScreen` (Ekrani i Regjistrimit)

- `SignUpScreen` ofron përdoruesve mundësinë për të krijuar një llogari të re. Përdor `useRef` për të marrë vlerat e email dhe fjalëkalimit, pastaj përdor `auth.createUserWithEmailAndPassword` për të krijuar llogarinë në Firebase. Po ashtu, përdor `auth.signInWithEmailAndPassword` për të kyçur përdoruesit.

### `ProfileScreen` (Ekrani i Profilit të Përdoruesit)

- `ProfileScreen` shfaq informacionin e përdoruesit si email-in dhe planet e abonimit të tyre. Po ashtu, ofron një buton për të dalë nga llogaria duke përdorur `auth.signOut()` si dhe nje buton për tu kthyer perseri ne Home.

### `Banner` (Banner)

- `Banner` shfaq një banner të ndryshueshëm në sfond me titullin dhe përmbledhjen e një filmi ose shfaqjeje televizive nga Netflix. Përdor `useState` për të mbajtur informacionin e filmit dhe `useEffect` për të bërë kërkesën në API.

### `Nav` (Navigimi)

- `Nav` është komponenti i navigimit që ofron 3 karaktere (Logo / Button SignIn / Avatrin): Logo ka nje lidhje për kthimin në faqen kryesore / Butoni Signin te ridrejton tek faqja per kyqje ose regjistrim si dhe avatari shfaqet pasi te jeni loguar ajo ka nje lidhje dhe te dergon tek pjesa /profile. Nav gjithashtu përdor `useState` për të ndryshuar ngjyrën e sfondit kur përdoruesi bën scroll.

### `Plans` (Planet e Abonimit)

- `Plans` shfaq listën e planeve të abonimit të Netflix, ajo posedon gjyr te kuqe ne button nese nuk esht e selektuar dhe ngjyr hiri kur perdoruesi eka selektuar at abonim.

### `Row` (Rreshti)

- `Row` është komponenti që shfaq rreshtin e posteve të filmit ose të shfaqjes televizive. Përdor `axios` për të kërkuar informacionin e filmeve dhe `useState` për të menaxhuar listën e filmave. Për shfaqjen e posterave të filmave, përdor `map` për të përpunuar secilin film individual.

### API Funksionet (requests.js)

`requests.js` është një skedar i veçantë që përmban funksionet për të kërkuar të dhëna nga API i themoviedb.org. Këto janë disa nga funksionet e disponueshme:

- `fetchTrading`: Kthen të dhënat mbi trendin e javës në botën e filmave dhe serialeve.

- `fetchNetflixOriginals`: Kthen të dhënat mbi produksionet origjinale të Netflix.

- `fetchTopRated`: Kthen të dhënat mbi filmat më të vlerësuar.

- `fetchActionMovies`: Kthen të dhënat mbi filmat e zhanrit aksion.

- `fetchComedyMovies`: Kthen të dhënat mbi filmat e zhanrit komedi.

- `fetchHorrorMovies`: Kthen të dhënat mbi filmat e zhanrit horror.

- `fetchRomanceMovies`: Kthen të dhënat mbi filmat e zhanrit romantik.

- `fetchDocumentariesMovies`: Kthen të dhënat mbi filmat dokumentarë.

Këto funksione përdorin çelësin API (`API_KEY`) për të bërë kërkesa ndaj themoviedb.org dhe kthejnë të dhënat e marrura.

### Redux - `userSlice`

`userSlice` është një pjesë e menaxhimit të gjendjes në projekt, e krijuar me Redux Toolkit. Ky slice përdoret për menaxhimin e informacionit të përdoruesit dhe përfshin dy reducers kryesore:

- `login`: Ky reducer përdoret për të ruajtur informacionin e përdoruesit në gjendjen e aplikacionit kur kyçet.

- `logout`: Ky reducer përdoret për të fshirë informacionin e përdoruesit nga gjendja e aplikacionit kur dilni nga llogaria.

Për të përdorur këto funksione në projekt, përdorni `dispatch` për të dërguar veprimet e tyre. Për shembull, për të kyçur një përdorues, përdorni `dispatch(login({ uid: userAuth.uid, email: userAuth.email,}))`, ku `userData` është informacioni i përdoruesit që dëshironi të ruani. Për të dalë nga llogaria kam përdorur `dispatch(logout())`.

## Struktura e Projektit

Projekti është i organizuar në këto komponentë kryesore:

- `HomeScreen`: Komponenti kryesor i faqes kryesore.

- `LoginScreen` dhe `SignUpScreen`: Ekranet e autentifikimit.

- `ProfileScreen`: Ekran i profilit të përdoruesit.

- `Banner`: Komponent dinamik i bannerit.

- `Nav`: Komponenti i navigimit.

- `Plans`: Komponenti i planit të abonimit.

- `Row`: Komponent për shfaqjen e rreshtit të posterave të filmit.

## Instalimi

Për të ekzekutuar këtë projekt lokalë, ndiqni hapat e mëposhtëm:

1. Klononi repozitorinë:

```bash

git clone https://github.com/shpetimaliu/netflix-app

```

2. Shkoni në direktorinë e projektit:

```bash

cd netflix-app-master

```

3. Instaloni ndërtesat e projektit:

```bash

npm install

```

4. Konfiguroni Autentifikimin Firebase:

- Krijoni një projekt Firebase dhe konfiguroni atë me kredencialet tuaja të Firebase.

- Zëvendësoni konfigurimin Firebase në projekt me të tuat, ndryshoni emrin nga .env.example ne .env dhe gjithashtu ndryshoni kredincialet e .env

5. Nisni serverin:

```bash

npm start

```

## Përdorimi

- Hyni në aplikacion duke hapur një shfletues web dhe duke naviguar në `http://localhost:3000`.

## Kontribo

Kontributet në këtë projekt janë të mirëpritura! Nëse dëshironi të kontribuoni, ju lutemi të ndiqni këto udhëzime:

- Bëni fork ne repozitor.

- Krijoni një degë të re për veçorinë ose ndreqjen e gabimit tim.

- Bëni ndryshimet tuaja dhe regjistrohuni me mesazhe komiti të përshkrueshme.

Faleminderit/.

SCREENSHOT:

![Home](https://github.com/shpetimaliu/netflix-app/blob/master/screenshots/Screenshot%202023-09-25%20at%202.08.56%20PM.png?raw=true)
![SignIn/Signup](https://github.com/shpetimaliu/netflix-app/blob/master/screenshots/Screenshot%202023-09-25%20at%202.09.15%20PM.png?raw=true)
![Movies](https://github.com/shpetimaliu/netflix-app/blob/master/screenshots/Screenshot%202023-09-25%20at%202.09.33%20PM.png?raw=true)
![Profile](https://github.com/shpetimaliu/netflix-app/blob/master/screenshots/Screenshot%202023-09-25%20at%202.09.53%20PM.png?raw=true)
