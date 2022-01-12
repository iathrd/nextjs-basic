import Head from "next/head";
import Footer from "../components/Footer";

function About(){
    return (
        <>
        <Head>
            <title>About Iqbal Athorid</title>
            <meta name="description" content="About iqbal" ></meta>
        </Head>
    <h1 className="content">About Page</h1>
    </>
    )
}

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
        {page}
        <Footer/>
        </>
    )
}