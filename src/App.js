import { useState } from "react";

const obj1 = [
  {
    id: 1,
    name: "Anuj",
    desig: "Senior-2"
  },
  {
    id: 2,
    name: "Sachin",
    desig: "Senior-2"
  },
  {
    id: 3,
    name: "Deepak",
    desig: "Senior-3"
  }
];

function MyButton() {
  const [count, currState] = useState(0);
  const [count1, currState1] = useState(0);
  return (
    <>
      <input type="text" className="inp" />
      <button onClick={() => currState(count + 1)} className="bg">
        Like {count}
      </button>
      <button onClick={() => currState1(count1 + 1)} className="bg">
        Comments {count1}
      </button>
    </>
  );
}

function Table() {
  return (
    <table className="table">
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Designation</th>
      </tr>

      {obj1.map((tab) => (
        <>
          <tr>
            <td>{tab.id}</td>
            <td>{tab.name}</td>
            <td>{tab.desig}</td>
          </tr>
        </>
      ))}
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my first react app</h1>
      <MyButton />
      <Table />
    </div>
  );
}
