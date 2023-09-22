
export default function Loading(){
    const arr = Array.from({length: 20});
    return(
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                Carregando
            </h1>
        </section>
    );
}