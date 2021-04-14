import { useState, useEffect } from "react";

const DataFetching = () => {
  const [characters, setCharacters] = useState([]);
  //
  useEffect(() => {
    //async/await method
    const fetchData = async () => {
      const result = await fetch(
        `https://www.breakingbadapi.com/api/characters`
      );
      const characters = await result.json();
      // console.log(characters);
      setCharacters(characters);
    };
    fetchData();

    //then/catch method
    // fetch(`https://www.breakingbadapi.com/api/`)
    //   .then((data) => data.json())
    //   .then((characters) => setCharacter(characters))
    //   .catch((err) => console.log(err));
  }, [characters]);

  return (
    <div>
      <h1>Fetching for Breaking Bad Characters' Data</h1>

      <h2>Character's Credentials</h2>

      {characters.map((character, i) => (
        <div key={i}>
          <p>
            <strong>Character's ID :</strong> {character.char_id}
          </p>
          <p>
            <strong>Name :</strong> {character.name}
          </p>
          <p>
            <strong>Birthday :</strong> {character.birthday}
          </p>
          <p>
            <strong>Occupation :</strong> {character.occupation}
          </p>
          <p>
            <img src={character.img} alt="" />
          </p>
          <p>
            <strong>Status :</strong> {character.status}
          </p>
          <p>
            <strong>Appearance :</strong> {character.appearance}
          </p>
          <p>
            <strong>Nickname :</strong> {character.nickname}
          </p>
          <p>
            <strong>Portrayed :</strong> {character.portrayed}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DataFetching;
