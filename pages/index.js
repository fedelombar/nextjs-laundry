import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h4 className="title">Which service(s) do you need?</h4>
      </div>

      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 12px;
          line-height: 1.15;
          font-size: 30px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
