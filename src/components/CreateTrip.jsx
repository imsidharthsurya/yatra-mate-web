import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import axios from "axios";

const CreateTrip = () => {
  const [placeName, setPlaceName] = useState("");
  const [suggestedPlace, setSuggestedPlace] = useState([]);
  const [noPlaceFound, setNoPlaceFound] = useState(false);
  const [skipSearch, setSkipSearch] = useState(false);
  useEffect(() => {
    if (skipSearch) {
      //reset skipsearch
      setSkipSearch(false);
      return;
    }
    const timer = setTimeout(() => {
      handleSuggestion();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [placeName]);
  const handleSuggestion = async () => {
    if (!placeName.trim()) {
      setSuggestedPlace([]);
      setNoPlaceFound(false);
      return;
    }
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/places",
      params: {
        namePrefix: placeName,
        limit: "5",
      },
      headers: {
        "x-rapidapi-key": "154448f625msh960e51537672276p1d1fa0jsn8064f034a869",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("suggested places are: ", response?.data?.data);
      setSuggestedPlace(response?.data?.data);
      if (response?.data?.data.length === 0) {
        setNoPlaceFound(true);
      } else {
        setNoPlaceFound(false);
      }
    } catch (error) {
      console.error(error);
      setSuggestedPlace([]);
    }
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-72 px-5 mt-10">
      <h2 className="text-3xl font-bold">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="text-xl text-gray-500 mt-3">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="relative mt-20">
        <p className=" text-2xl font-medium">What is destination of choice?</p>
        <Input
          type="text"
          value={placeName}
          placeholder="place name..."
          className="mt-3"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        {suggestedPlace.length > 0 && (
          <div className="absolute w-full border bg-white">
            {suggestedPlace.map((place) => {
              return (
                <div
                  key={place?.id}
                  className="border-b py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    const name = `${place?.name}, ${place?.region}, ${place?.country}`;
                    setPlaceName(name);
                    setSuggestedPlace([]);
                    setSkipSearch(true);
                  }}
                >
                  {place?.name}, {place?.region}, {place?.country}
                </div>
              );
            })}
          </div>
        )}
        {noPlaceFound === true && placeName !== "" && (
          <div className="absolute w-full border">
            <p className="px-3 py-2 font-semibold text-red-400">
              No Place Found with given name. please try something different
            </p>
          </div>
        )}

        <p className="mt-15 text-2xl font-medium">
          For how many days are you planning your trip?
        </p>
        <Input type="number" placeholder="Ex.3" className="mt-3" />
      </div>
    </div>
  );
};

export default CreateTrip;
