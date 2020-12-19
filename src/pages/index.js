import { Link } from "gatsby";
import * as React from "react";
import Boop from "../components/Boop";

// markup
const IndexPage = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div style={{ marginTop: "5rem" }}>
        <Boop rotation={20} timing={200}>
          <button>
            <Link to="/about"> About Page</Link>
          </button>
        </Boop>
      </div>
    </div>
  );
};

export default IndexPage;
