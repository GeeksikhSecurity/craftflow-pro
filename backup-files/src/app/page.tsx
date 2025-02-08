export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Welcome to CraftFlow Pro
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-5xl font-bold text-center">
          Streamline Your Workflow
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Efficient
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Optimize your workflow with our powerful tools.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Collaborative
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Work together seamlessly with your team.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Professional
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Enterprise-grade tools for professional results.
          </p>
        </div>
      </div>
    </main>
  );
}
