import { useState } from "react";
import { CgMenu, CgSidebar } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";
import SignOut from './signout'
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
 const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div>
      <div className=" relative">
          <AiOutlineMenu  onClick={toggleDrawer} className="w-6 relative h-6"/>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        style={{
          background: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "2",
          padding: "30px",
          
        }}
        size='245px'
        overlayColor='#D9D9D9'
        direction="left"
      >
        <div className=' flex '>              
              <SignOut/>
            </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu