import { motion as m } from "framer-motion";

const transition = { delay: 0.25, duration: 0.5, ease: "easeOut" };

function ModelOne(props) {
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
        className="paragraph"
        initial={{ y: "100px" }}
        animate={{ y: "0px" }}
        exit={{ y: "100px" }}
        transition={transition}
      >
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <p>{props.paragraph3}</p>
        <p>{props.paragraph4}</p>
        <p>{props.paragraph5}</p>
        <p>{props.paragraph6}</p>
      </m.div>
    </m.div>
  );
}

export default ModelOne;
