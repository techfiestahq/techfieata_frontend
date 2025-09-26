import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
}

const styles = {
  parentContainer: "w-full h-auto overflow-x-hidden md:overflow-x-auto",
  container: "2xl:container 2xl:mx-auto",
  chiefCenter:
    "max-w-[1440px] w-full py-16 px-4 md:px-6 2xl:px-0 mx-auto overflow-x-hidden ",
} as const;

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default ContainerLayout;
