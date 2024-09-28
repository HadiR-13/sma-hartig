import { JSX } from 'react';

export default function Page(): JSX.Element {
  return (
    <main className="">
      {/* Header */}
      <header className="flex flex-col overflow-x-hidden py-[30px]">
        <div className="container flex flex-col items-center justify-center gap-y-[20px] py-10 px-5 xl:px-10">
          <div className="text-center font-bold gap-y-2 flex flex-col">
            <h3 className="uppercase text-xl lg:text-2xl text-primary-600">galeri kami</h3>
            <h1 className="uppercase text-2xl lg:text-4xl">sma harapan 3 delitua</h1>
          </div>
          <p className="text-justify lg:text-center w-full lg:w-[80%] text-secondary leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt mollitia eos quibusdam necessitatibus dolores voluptates. Reiciendis doloribus, animi repellendus labore aspernatur cum aliquid enim, ipsa modi deserunt quam?
          </p>
        </div>
      </header>
    </main>
  );
}
