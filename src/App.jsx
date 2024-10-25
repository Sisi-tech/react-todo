import React from 'react';

const lists = [
  {
    title: "Apply course - Ruby on Rails",
    url: "https://codethedream.org/apply/",
    due: "October 6, 2024",
    id: 0,
  },
  {
    title: "Work on assignment 1 - Project Setup and React Basics",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=1&lesson=Learning+to+Learn",
    due: "November 5, 2024",
    id: 1,
  },
  {
    title: "Work on assignment 2 - React DOM And Components",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=2&lesson=React+DOM+and+Components",
    due: "November 12, 2024",
    id: 2,
  },
  {
    title: "Work on assignment 3 - Props State And Handlers",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=3&lesson=Props+State+and+Handlers",
    due: "November 19, 2024",
    id: 3,
  },
  {
    title: "Work on assignment 4 - Lifting State And Props Handling",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=4&lesson=Lifting+State+and+Props+Handling",
    due: "November 26, 2024",
    id: 4,
  },
  {
    title: "Work on assignment 5 - Hooks And Fragments",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=6&lesson=Hooks+and+Fragments",
    due: "December 10, 2024",
    id: 5,
  },
  {
    title: "Work on assignment 6 - Reusable Components Imperative React",
    url: "https://classes.codethedream.org/course/react-v2.1/ibis?week=7&lesson=Reusable+Components+Imperative+React",
    due: "December 17, 2024",
    id: 6,
  }
];

function List() {
  return (
    <ul className='flex flex-col gap-2 text-lg'>
      {
        lists.map(function(item) {
          return (
            <li key={item.id} className="hover:shadow-xl shadow-gray-400 p-2">
              <span>{item.id + 1}. </span>
              <a href={item.url} alt={item.title} className="font-bold">{item.title}</a>
              <span> -- due {item.due}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

function App() {

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl'>Todo List</h2>
      <List />
    </div>
  )
}

export default App
