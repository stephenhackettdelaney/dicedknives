import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="relative h-screen">
      <div className="absolute right-0 left-0 bottom-0 top-0 flex flex-col items-center justify-center p-8 bg-black/20">
        <section className="flex flex-col items-center bg-white rounded shadow-lg max-w-l max-w-2xl p-16">
          <img src="/diced_logo.png" alt="DICED logo" className="w-96" />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-gilroy-bold text-center">This is site is currently under construction</h2>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <p className="font-gilroy-medium text-center">But you can view our products by using the link below</p>
            <Link className="flex justify-center items-center px-6 h-10 bg-black text-white rounded font-gilroy-regular hover:bg-black/80" to="https://www.shopdicedknives.com/">Vist our store</Link>
          </div>
        </section>
      </div>
      <img src="/worker.jpg" alt="diced worker sharpening a knife" className="h-screen w-screen object-cover" />
    </div>
  );
}
