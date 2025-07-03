import React from "react";
import './App.css'
import Message from "./message.jsx";
import ListOfCourses from "./listofCourses.jsx";
import Courses from "./courses.jsx";
// class App extends React.Component {
//   render() {
//     return (
//     <div>
//       <Message msg="HEllo"/>
//       <Message msg="World"/>
//       <Message msg="Hey"/> 
//     </div>
     
//     );
//   }
// }


class App extends React.Component {
  render() {
    return (
      ListOfCourses
    );
  }
}
export default App;