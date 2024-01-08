import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import icon from "../public/assets/404.jpeg";
import { Button } from "@/components/ui/button";

const Custom404 = () => {
  return (
    <div className={styles.not_found}>
      <Image src={icon} alt="404-not found" height={400} width={750} />
      <Link href="/">
        <Button>Go back to the home page</Button>
      </Link>
    </div>
  );
};

export default Custom404;
