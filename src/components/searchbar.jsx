import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
function Searchbar() {
  const [Keyword, setKeyword] = React.useState("");
  const [fetchKeyword, setfetchKeyword] = React.useState([]);

  console.log(Keyword);
  const fetchkey = async () => {
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://colleges-india.herokuapp.com/colleges/search",
        { john: "cena" },
        {
          headers: {
            Keyword: Keyword,
            Origin: "application/json",
          },
        }
      )
      .then((res) => {
        // setKeyword(res.data);
        setfetchKeyword(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchstate = async () => {
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://colleges-india.herokuapp.com/colleges/state",
        { john: "cena" },
        {
          headers: {
            State: Keyword,
            Offset: 50,

            Origin: "application/json",
          },
        }
      )
      .then((res) => {
        // setKeyword(res.data);
        setfetchKeyword(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchdis = async () => {
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://colleges-india.herokuapp.com/colleges/district",
        { john: "cena" },
        {
          headers: {
            District: Keyword,
            Offset: 0,
            Origin: "application/json",
          },
        }
      )
      .then((res) => {
        // setKeyword(res.data);
        setfetchKeyword(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='bg-white'>
      <div
        className='flex justify-center -mt-20 bg-white w-4/6 m-auto  
      '>
        <div className='flex-row bg-white p-2 font-bold'>
          <p>State</p>
          <input
            type='text'
            placeholder='Preferred State'
            style={{ outlineWidth: 0 }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>{" "}
        <div className='bg-black rounded-xl p-2 flex justify-center'>
          {" "}
          <button
            onClick={() => {
              fetchstate();
            }}>
            <SearchIcon className='text-white' />
          </button>{" "}
        </div>{" "}
        <div className='flex-row font-bold bg-white p-2'>
          <p>District</p>
          <input
            type='text'
            placeholder='Preferred State'
            style={{ outlineWidth: 0 }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>{" "}
        <div className='bg-black rounded-xl p-2 flex justify-center'>
          {" "}
          <button
            onClick={() => {
              fetchdis();
            }}>
            <SearchIcon className='text-white' />
          </button>{" "}
        </div>{" "}
        <div className='flex-row bg-white p-2 font-bold'>
          <p>Keyword</p>
          <input
            type='text'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='search colleges'
            style={{ outlineWidth: 0 }}
          />
        </div>{" "}
        <div className='flex-row bg-white p-2 font-bold'>
          <div className='bg-black rounded-xl p-2'>
            {" "}
            <button
              onClick={() => {
                fetchkey();
              }}>
              <SearchIcon className='text-white' />
            </button>{" "}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {fetchKeyword?.map((item, index) => {
          return (
            <div key={index} className='flex-col flex-wrap mt-10'>
              <div
                className='bg-black text-white p-4 m-1 shadow-2xl  text-center'
                style={{ width: "fit-content" }}>
                <p>{item[0]}</p>{" "}
                <p className='font-bold text-green-400'>{item[1]}</p>{" "}
                <p>{item[2]}</p> <p>{item[3]}</p> <p>{item[4]}</p>
                <p>{item[5]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searchbar;
