import LandingPage from "@/components/layouts/LandingPage";
import Head from "next/head";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sederhana - Landing Page</title>
        <meta
          name="description"
          content="Simple frontend website using nextjs+tailwindcss"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-7xl">
        <LandingPage />
      </main>
    </>
  );
}
