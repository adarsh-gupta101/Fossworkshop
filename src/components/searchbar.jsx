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
            Origin: "https://colleges-india.herokuapp.com",
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
    <div className='bg-gray-100' style={{width:"fit-content",margin:"auto",background: "radial-gradient(#bb6b6b, transparent)"}}>
      <div
        className='flex justify-center -mt-20 bg-white w-4/6 m-auto  
      '>
        <div className='flex-row bg-white p-2 font-bold hover:bg-gray-50 ease-linear duration-100 '>
          <p>State</p>
          <input
            type='text'
            placeholder='Preferred State'
            style={{ outlineWidth: 0 }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>{" "}
        <div className='flex-row bg-white p-2 font-bold'>
        <div className='bg-black rounded p-2 flex justify-center'>
          {" "}
          <button
            onClick={() => {
              fetchstate();
            }}>
            <SearchIcon className='text-white' />
          </button>{" "}
        </div>{" "}</div>
        <div className='flex-row font-bold bg-white p-2'>
          <p>District</p>
          <input
            type='text'
            placeholder='Preferred State'
            style={{ outlineWidth: 0 }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>{" "}
        <div className='flex-row bg-white p-2 font-bold'>
        <div className='bg-black rounded p-2 flex justify-center'>
          {" "}
          <button
            onClick={() => {
              fetchdis();
            }}>
            <SearchIcon className='text-white' />
          </button>{" "}
        </div>{" "}</div>
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
          <div className='bg-black rounded p-2'>
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
      <div className='flex flex-wrap' style={{width:"70vw",margin:"auto"}}>
        {fetchKeyword?.map((item, index) => {
          return (
            <div key={index} className='flex-col flex-wrap mt-10'>
              
              <div
                className='bg-black text-green-200 p-4 m-1 shadow hover:shadow-2xl ease-linear duration-200  text-center'
                style={{ width: "20vw" }}>
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80" alt="" className="w-full m-auto p-0"/>
                <p>{item[0]}</p>{" "}
                <p className='font-bold text-white'>{item[1]}</p>{" "}
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
