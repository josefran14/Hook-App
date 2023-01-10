import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Card } from "./Card";
import { Loading } from "./Loading.jsx";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter();
  const { data, isLoading, hasError } = useFetch(`https://thronesapi.com/api/v2/Characters/${counter}`);
  const { fullName, family, title, imageUrl } = !isLoading && data;

  return (
    <>
      <h1 style={{display: "flex", justifyContent: "center"}}>Game Of Thrones Characters</h1>
      <hr />

      {isLoading ? 
        <Loading/>
      : 
        <Card fullName={fullName} family={family} title={title} image={imageUrl}/>
      }

      <div style={{display: "flex", justifyContent: "center", alingItem: "Center", marginTop: "10px"}}>
      <button
        className="btn btn-danger"
        disabled={isLoading}
        onClick={decrement}>
       <i className="bi bi-arrow-left"></i> Last Character 
      </button>

      <button
        className="btn btn-success"
        disabled={isLoading}
        onClick={increment}>
        Next Character <i className="bi bi-arrow-right"></i>
      </button>
      </div>
    </>
  );
};
