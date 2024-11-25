import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myprojects = [
  {
    biggie: "React",
    category: ["React"],
    title:" E-Commerce Built with React and MUI, online shopping.",
    img: "./img/pexels-n-voitkevich-6214474.jpg",
    link: "ecommerce-93cac.firebaseapp.com",
  },
  {
    biggie: "MUI",
    category: ["bootstrap"],
    title:" E-Commerce Built with React and MUI, online shopping.",
    img: "./img/pexels-n-voitkevich-6214474.jpg",
    link: "ecommerce-93cac.firebaseapp.com",
  },
];

const Main = () => {
  function handle(handle) {
    setSelect(handle);
    const array = myprojects.filter((item) => {
      const array2 = item.category.filter((item) => {
        return item === handle;
      });
      return array2[0] === handle;
    });

    setShow(array);
  }

  const [select, setSelect] = useState("all-project");

  const [show, setShow] = useState(myprojects);
  return (
    <main className="flex">
      <section className="   left-section flex ">
        <button
          onClick={() => {
            setSelect("all-project");

            setShow(myprojects);
          }}
          className={select === "all-project" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handle("React");
          }}
          className={select === "React" ? "active" : null}
        >
          {" "}
          React
        </button>

        <button
          onClick={() => {
            handle("html-css");
          }}
          className={select === "html-css" ? "active" : null}
        >
          HTML & CSS{" "}
        </button>

        <button
          onClick={() => {
            handle("bootstrap");
          }}
          className={select === "bootstrap" ? "active" : null}
        >
          {" "}
          MUI{" "}
        </button>
      </section>

      <section className=" flex right-section ">
        <AnimatePresence>
          {show.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 60 }}
                key={item.img}
                className="card"
              >
                <img width={230} src={item.img} alt="" />

                <div style={{ width: "230px" }} className="box ">
                  <h1 className="title">{item.biggie}</h1>
                  <p className="subtitle">{item.title}</p>
                  <div className="flex icons ">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <div>
                      <a target="_blank" className="link flex" href={item.link}>
                        View the project
                        <span
                          style={{
                            alignSelf: "end",
                            marginLeft: "5px",
                            fontSize: "17px",
                          }}
                          className="icon-arrow-right-thick"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
