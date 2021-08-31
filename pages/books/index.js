import Link from "next/link"
import Image from "next/image";

export const getStaticProps = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const images = await fetch("https://jsonplaceholder.typicode.com/photos");
    const dataUsers = await users.json();
    const dataImages = await images.json();

    return {
        props: { books: dataImages }
    }
}

const BookPage = ({ books }) => {
    return (
        <div className="p-8">
            <h1 className="text-center text-2xl">All Books</h1>
            <hr className="mb-3" />
            <div className="grid grid-cols-3 gap-5">
                {books.slice(0, 9).map(book => (
                    <div key={book.id} className="shadow rounded-lg p-3">
                        <Image className="rounded-lg" src={book.url} alt="Random Images" width="600" height="600" />
                        <Link Link href={'/books/' + book.id}>
                            <a className="text-center">
                                <div className="p-5 my-3 rounded-lg shadow-lg hover:bg-green-100">
                                    {book.title}
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default BookPage;