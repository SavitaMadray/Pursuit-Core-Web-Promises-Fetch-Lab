document.addEventListener("DOMContentLoaded", () => {
  loadRandomJoke();
  clickForRandom();
  clickForMany();
  clickForJkByType();
});

const clickForRandom = () => {
  let button = document.getElementById("random");
  button.addEventListener("click", () => {
    loadRandomJoke();
  });
};

const clickForMany = () => {
  let button = document.getElementById("many");
  button.addEventListener("click", () => {
    loadManyJokes();
  });
};

const clickForJkByType = () => {
  let button = document.querySelector("#typeBtn");
  button.addEventListener("click", () => {
    getJkByType();
  });
};

const loadRandomJoke = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      return response.json();
    })
    .then((joke) => {
      createSetupCard(joke);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createSetupCard = (joke) => {
  let previousJokeCard = document.querySelector("#jokeCard");
  let jokeCardContainer = document.querySelector("#jokeCardContainer");
  if (previousJokeCard) {
    jokeCardContainer.removeChild(previousJokeCard);
  }
  let jokeCard = document.createElement("div");
  jokeCard.id = "jokeCard";
  let setup = document.createElement("p");
  setup.id = "setup";
  setup.innerText = joke.setup;
  jokeCard.appendChild(setup);
  jokeCardContainer.appendChild(jokeCard);
  jokeCard.addEventListener("click", () => {
    revealPunchline(joke.punchline);
  });
};

const revealPunchline = (punchlineStm) => {
  let answer = document.querySelector("#answer");
  let jokeCard = document.querySelector("#jokeCard");
  if (!answer) {
    let answer = document.createElement("p");
    answer.id = "answer";
    answer.innerText = punchlineStm;
    jokeCard.appendChild(answer);
  }
};

const loadManyJokes = () => {
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((response) => {
      return response.json();
    })
    .then((jokes) => {
      createManyJokes(jokes);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createManyJokes = (jokes) => {
  let manyJokes = document.querySelector("#manyJokes");
  let previousJokeContainer = document.querySelector("#manyJokesContainer");
  if (previousJokeContainer) {
    manyJokes.removeChild(previousJokeContainer);
  }
  let manyJokesContainer = document.createElement("div");
  manyJokesContainer.id = "manyJokesContainer";
  manyJokes.appendChild(manyJokesContainer);
  for (joke of jokes) {
    let setup = document.createElement("p");
    let answer = document.createElement("p");
    setup.innerText = `Joke: ${joke.setup}`;
    answer.innerText = `Punchline: ${joke.punchline}`;
    manyJokesContainer.appendChild(setup);
    manyJokesContainer.appendChild(answer);
  }
};

const getJkByType = () => {
  let jkType = document.querySelector("select");
  let jkTypeVal = jkType.value;
  let url = `https://official-joke-api.appspot.com/jokes/${jkTypeVal}/random`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((joke) => {
      console.log(joke);
      createJkByType(joke);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createJkByType = (jokes) => {
  let previousJkeCard = document.querySelector("#jkeCard");
  let jkByType = document.querySelector("#jkByType");
  if (previousJkeCard) {
    jkByType.removeChild(previousJkeCard);
  }
  for (joke of jokes) {
    let jkeCard = document.createElement("div");
    jkeCard.id = "jkeCard";
    let setup2 = document.createElement("p");
    setup2.id = "setup2";
    setup2.innerText = joke.setup;
    console.log(joke.setup);
    jkeCard.appendChild(setup2);
    jkByType.appendChild(jkeCard);
    jkeCard.addEventListener("click", () => {
      revealPnchline(joke.punchline);
    });
  }
};

const revealPnchline = (punchlineStm) => {
  let answer = document.querySelector("#answer");
  let jkeCard = document.querySelector("#jkeCard");
  if (!answer) {
    let answer2 = document.createElement("p");
    answer2.id = "answer2";
    answer2.innerText = punchlineStm;
    jkeCard.appendChild(answer2);
  }
};
