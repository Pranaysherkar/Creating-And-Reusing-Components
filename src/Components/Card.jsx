import React from "react";

function Card() {
  const arr = [
    {
      url: "https://images.unsplash.com/photo-1706612527282-1e7004678ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      label: "First",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit  Necessitatibus cum a quod accusantium at. Repudiandae dignissimost",
      instock: true,
    },
    {
      url: "https://images.unsplash.com/photo-1706147095818-88771b00f509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
      label: "Second",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit  Necessitatibus cum a quod accusantium at. Repudiandae dignissimost",
      instock: false,
    },
    {
      url: "https://images.unsplash.com/photo-1706560382811-dd7d0282c904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
      label: "Third",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit  Necessitatibus cum a quod accusantium at. Repudiandae dignissimost",
      instock: true,
    },
    {
      url: "https://images.unsplash.com/photo-1705917662505-f33a37211d74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",
      label: "Fourth",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit  Necessitatibus cum a quod accusantium at. Repudiandae dignissimost",
      instock: false,
    },
  ];

  const eventHandle = () => {
    alert("it is workx");
  };

  return (
    <div className="m-0 p-0 bg-grey-200 h-screen w-full gap-10 flex items-center justify-center">
      {arr.map((elem, index) => (
        <div key={index} className="w-1/5 h-2/4 bg-zinc-200 rounded-xl p-2">
          <div className="w-full h-1/2 rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover object-center"
              src={elem.url}
            />
          </div>
          <div className="w-full h-1/2 py-4">
            <h1 className=" text-3xl font-semibold text-center text-black ">
              {elem.label}
            </h1>
            <p className="text-base pt-3 px-1 text-center leading-5">
              {elem.description}
            </p>
            <button
              onMouseUpCapture={eventHandle}
              className={`${
                elem.instock ? `bg-sky-200` : `bg-red-300`
              } py-1 px-4 rounded-full `}
            >
              {elem.instock ? "instock" : "out of stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
