import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";

import ClientOnlyPortal from "../../common/ClientOnlyPortal";

export default function SubpagesSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ClientOnlyPortal selector="#subpages-sidebar">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        forceRender={true}
        className="subpages-sidebar-main"
        width={445}
      >
        <Button onClick={showDrawer} className="subpages-sidebar-opener">
          <i className="fas fa-cog fa-spin" />
        </Button>
        <h2>
          <span>2</span>
          Demo
        </h2>
        <p>You can easily combine various features from different demos.</p>
        <div className="subpages-homepages-group">
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home1.png"
                }
                alt="Homepage 01"
              />
              <span>Homepage Demo 1</span>
            </a>
          </Link>
          <Link href={process.env.PUBLIC_URL + "/homepage3"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home3.png"
                }
                alt="Homepage 03"
              />
              <span>Homepage Demo 2</span>
            </a>
          </Link>
        </div>
      </Drawer>
    </ClientOnlyPortal>
  );
}
