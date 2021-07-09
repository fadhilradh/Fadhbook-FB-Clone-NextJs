import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { getSession } from "next-auth/client";
import Login from "./login";

export default function Home({ session }) {
    if (!session) return <Login />;
    return (
        <div className="h-screen bg-gray-100 overflow-hidden">
            <Head>
                <title>Facebook App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header session={session} />
            <main className="flex">
                <Sidebar />
                <Feed session={session} />
                <Widgets />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    // Get the user
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}
