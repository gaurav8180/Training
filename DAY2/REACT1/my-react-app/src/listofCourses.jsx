import React from "react";

class ListOfCourses extends React.Component {
  render() {
    return (
        var Courses=[
            {
              name:"Javascript",
              id:1,
              rating=3,
              price=2000
            },
            {
              name:"React",
              id:2,
              rating=4,
              price=3000
            },
            {
              name:"Node",
              id:3,
              rating=5,
              price=4000
            }
          ];
          return (
            <div>
                {Courses.map((course)=>{
                  return(
                    <div>
                      <h1>{course.name}</h1>
                      <p>Rating:{course.rating}</p>
                      <p>Price:{course.price}</p>
                    </div>
                  )
                })}
            </div>
          );
        );
      return (
        <div>
            {Courses.map((course)=>{
              return(
                <div>
                  <h1>{course.name}</h1>
                  <p>Rating:{course.rating}</p>
                  <p>Price:{course.price}</p>
                </div>
              )
            })}
        </div>
      );
    );
  }
}

export default ListOfCourses;