import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import FMessage from "../functional/message.functional";
import Counter from "../functional/counter";
import Posts from "../posts/posts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Courses </Link> |<Link to="/posts"> Posts </Link> |
      <Link to="/counter"> Counter </Link>
      <Routes>
        <Route path="/" Component={ListOfCourses} />
        <Route path="/posts" Component={Posts} />
        <Route path="/counter" Component={Counter} />
        <Route
          path="*"
          element={
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*QOZm9X5er1Y0r5-t" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     return (
//       <div>
//         <FMessage msg="Hello" />
//         <FMessage msg="Hey" />
//         <FMessage msg="Hola" />
//       </div>
//     );
//   }
// }

export default App;