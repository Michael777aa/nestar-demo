"use client";
import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/LayoutBasic";

const Community: NextPage = () => {
  const [title, setTitle] = useState<String>("Hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello Mit")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
