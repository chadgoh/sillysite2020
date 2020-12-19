import { Link } from "gatsby";
import * as React from "react";
import Boop from "../components/Boop";
import Scream from "../components/Scream";

// markup
const IndexPage = () => {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B5EAD7",
      }}>
      <div style={{ marginTop: "5rem" }}>
        <Boop rotation={20} timing={200}>
          <button>
            <Link to="/about"> About Page</Link>
          </button>
        </Boop>
        <Scream />
      </div>
    </div>
  );
};

export default IndexPage;
