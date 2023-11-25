import { motion as m } from "framer-motion";

const transition = { delay: 0.25, duration: 0.5, ease: "easeOut" };

function PortModel(props) {
  return (
    <>
      <m.p
        className="p1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        {props.title}
      </m.p>
      <div
        className="blk-background"
        style={{
          height: "36vw",
          width: "56vw",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
        }}
      >
        <m.div
          className="img-ang"
          initial={{ x: "-200px" }}
          animate={{ x: "0px" }}
          exit={{ x: "-200px" }}
          transition={transition}
        >
          <img
            src={props.img}
            alt="1st Angular"
            style={{ height: "26vw", width: "46vw" }}
          />
        </m.div>
      </div>
      <m.p
        className="p1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        {props.title1}
      </m.p>
      <div
        className="blk-background"
        style={{
          height: "36vw",
          width: "56vw",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
        }}
      >
        <m.div
          className="img-ang"
          initial={{ x: "-200px" }}
          animate={{ x: "0px" }}
          exit={{ x: "-200px" }}
          transition={transition}
        >
          <img
            src={props.img1}
            alt="1st Angular"
            style={{ height: "36vw", width: "26vw" }}
          />
        </m.div>
      </div>
    </>
  );
}

export default PortModel;
