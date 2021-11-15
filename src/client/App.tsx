import React, { useState, useEffect } from "react";
import Chirp from "./components/Chirp";
import Header from "./components/Header";
import Post from "./components/Post";
import Username from "./components/Username";

import moment from "moment";

import { BsFillPersonFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";

const App = () => {
  const [usernameInput, setuserNameInput] = useState("");
  const [userpostInput, setuserPostInput] = useState("");

  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    fetch("/api/chirps")
      .then((res) => {
        return res.json();
      })
      .then((chirp) => {
        console.log(chirp);
        setChirps([...chirp]);
      });
  }, []);

  console.log(chirps);

  const getUsername = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setuserNameInput(e.target.value);
  };

  const getUserpost = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setuserPostInput(e.target.value);
  };

  const addNewChirp = () => {
    let addedChirp = {
      id: 0,
      name: usernameInput,
      content: userpostInput,
      _created: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };

    setChirps([...chirps, addedChirp]);
    setuserNameInput("");
    setuserPostInput("");
  };

  const sendChirps = chirps.map((chirp) => {
    return (
      <div key={chirp.id} className="chrp">
        <Chirp>
          <div className="left-chirp d-flex flex-column justify-content-center align-items-center">
            <Username username={chirp.name} />
          </div>
          <div className="right-chirp mx-2">
            <Post post={chirp.content} />
          </div>
        </Chirp>
      </div>
    );
  });

  return (
    <div className="chirper mb-5">
      <Header account={usernameInput} />
      <div className="container d-flex flex-column justify-content-start align-items-start mt-4">
        <div className="chirper-body">
          <div className="post-title-direction">
            <h4 className="post-title justify-content-end">Chirp Something!</h4>
          </div>
          <div id="chirp-submission">
            <div className="input-group username-area mb-3 w-100">
              <span
                className="input-group-text username-icon"
                id="basic-addon1"
              >
                <BsFillPersonFill />
              </span>
              <input
                type="text"
                className="form-control username-input"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={getUsername}
              />
            </div>

            <div className="input-group message-area">
              <span className="input-group-text message-icon">
                <BsChatTextFill />
              </span>
              <textarea
                className="form-control"
                placeholder="Write your chirp"
                aria-label="With textarea"
                onChange={getUserpost}
              ></textarea>
            </div>
            <div className="submit-btn-area d-flex justify-content-center align-items-center">
              <button
                onClick={addNewChirp}
                value="Send Chirp"
                className="btn btn-lg chirp-btn mt-2"
              >
                Send Chirp
              </button>
            </div>
          </div>

          {sendChirps}
        </div>
      </div>
    </div>
  );
};

export default App;
