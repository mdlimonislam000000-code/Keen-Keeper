import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div>
            <p className="text-center text-4xl mt-72">This page is not found</p>
            <Link href="/">
            <button className=" ml-96  text-4xl mt-72">go to home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;