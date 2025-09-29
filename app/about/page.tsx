import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="content-grid">
      <article className="content-small m-5 gap-5 grid grid-cols-1 md:grid-cols-2">
        <Image
          src={"/about.jpg"}
          alt={"All four employees on AW in the snow"}
          width={500}
          height={400}
          className="rounded-lg object-cover shadow-lg bg-light place-self-center"
        />
        <div className="flex flex-col gap-5">
          <h2>About CompanyName</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            officia, non rerum pariatur ipsam sed ex quam! Porro impedit fugiat
            dicta quasi, ex reprehenderit deleniti repellat harum veniam error
            aliquid?
          </p>
        </div>
      </article>
    </main>
  );
}
