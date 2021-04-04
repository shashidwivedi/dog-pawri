import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");

  return (
    <div className="searchparams">
      <form action="">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          name=""
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option value=""></option>
          {ANIMALS.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
