import { motion as m } from "framer-motion";

const transition = { delay: 0.25, duration: 0.5, ease: "easeOut" };

function Model(props) {
  return (
    <m.div
      className="Model"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <m.div
        className="title"
        initial={{ y: "-100px" }}
        animate={{ y: "0px" }}
        exit={{ y: "-100px" }}
        transition={transition}
      >
        {props.title}
      </m.div>
      <m.div
        className="img-container"
        initial={{ x: "-200px" }}
        animate={{ x: "0px" }}
        exit={{ x: "-200px" }}
        transition={transition}
      >
        <p>{props.paragraph}</p>
        <img src={props.img} alt="me" className="reggie" />
        <m.div
          className="square"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: -90 }}
          transition={transition}
        ></m.div>
      </m.div>
      <m.div
        className="paragraph"
        initial={{ y: "100px" }}
        animate={{ y: "0px" }}
        exit={{ y: "100px" }}
        transition={transition}
      >
        <p>{props.paragraph1}</p>
        <br />
        <p>{props.paragraph2}</p>
      </m.div>
    </m.div>
  );
}

export default Model;
