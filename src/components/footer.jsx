import React, { useEffect, useState } from "react";

const Footer = () => {
  const [version, setVersion] = useState("");

  const fetchVersion = async () => {
    try {
      const resp = await fetch("version.json");
      const data = await resp.json();
      setVersion(data);
    } catch (error) {
      setVersion({ version: "unknown", commit: "unknown" });
    }
  };

  useEffect(() => {
    fetchVersion();
  });
  return (
    <footer>
      {`The Latest version is: ${version.version}  and commit hash is: ${version.commit}`}
    </footer>
  );
};

export default Footer;
