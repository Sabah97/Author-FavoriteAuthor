import Head from "next/head";
import Image from "next/image";

import Sidebar from "../components/Sidebar";
import Author from "../components/Author";
import Link from "next/link";
import FavoriteAuthor from "../components/FavoriteAuthor";
export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>
        <Author />
        <FavoriteAuthor />
      </div>
    </div>
  );
}
