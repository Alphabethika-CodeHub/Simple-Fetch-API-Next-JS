import Image from "next/dist/client/image";

export const getStaticPaths = async () => {
    const images = await fetch("https://jsonplaceholder.typicode.com/photos");
    const dataImages = await images.json();

    const paths = dataImages.slice(0, 9).map(data => {
        return {
            params: { id: data.id.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const images = await fetch("https://jsonplaceholder.typicode.com/photos/" + id);
    const dataImages = await images.json();
    return {
        props: { book: dataImages }
    }
}

const Details = ({ book }) => {
    return (
        <div>
            <Image src={book.url} width="600" height="600" alt="Random Images" />
            <h1>{book.title}</h1>
        </div>
    );
}

export default Details;