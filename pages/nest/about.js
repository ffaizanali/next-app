import React from "react";
import Styles from "../../styles/Home.module.css";

const about = () => {
  return (
    <div>
      <style jsx>
        {`
          .about {
            background: red;
            color:yellow
          }
        `}
      </style>
    

      <h2 className="bg-red-500">ima a nest about page</h2>
      <p className={Styles.container}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fuga
        ipsam accusantium nemo deserunt iure soluta quibusdam vitae veritatis
        ipsa sit mollitia, modi fugiat qui rem architecto voluptate obcaecati
        eum.
      </p>
      <p className="text-lg bg-yellow-500 ">
        wioa Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        dignissimos a provident nesciunt. Animi, velit non veniam recusandae
        voluptatum dignissimos ad porro, consequuntur magni placeat, libero hic
        inventore soluta ab.
      </p>
      <nav className={Styles.nav}>
        <ul>
          <li>home</li>
          <li className="about">about</li>
          <li>about</li>
          <li>about</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  );
};

export default about;
