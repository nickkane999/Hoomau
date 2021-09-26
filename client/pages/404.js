import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFount = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>This page could not be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFount;
