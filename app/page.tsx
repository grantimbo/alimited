export default function CorporateContact() {
  return (
    <div className=" bg-white text-[#111111] font-sans flex flex-col justify-between selection:bg-neutral-200">
      
      {/* Top Banner / Header Container */}
      <header className="w-full bg-[#f2f2f2] border-b border-neutral-200/60 px-8 py-6 md:px-16 md:py-7">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase">
            Audunsson Limited
          </h1>
        </div>
      </header>

      {/* Main Corporate Contact Profile Matrix */}
      <main className="flex-grow w-full px-8 py-12 md:px-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-3">
          
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight text-neutral-800">
            Contact Information:
          </h2>
          
          {/* Address Block */}
          <div className="text-lg md:text-xl text-neutral-800 leading-tight font-normal ">
            <p>14 Floor China Hong Kong Tower</p>
            <p>8 Hennessy Road</p>
            <p>Wanchai</p>
            <p>Hong Kong</p>
          </div>

          {/* Electronic Correspondence Route */}
          <div className="pt-4">
            <a 
              href="mailto:support@audunsson.com" 
              className="text-lg text-neutral-800 hover:text-neutral-400  decoration-neutral-400 transition-colors"
            >
              support@audunsson.com
            </a>
          </div>

        </div>
      </main>

      {/* Standard Legal Matrix Footer */}
      <footer className="mt-30 w-full px-8 py-10 md:px-16 md:py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-wide">
            ©2024 Audunsson.com
          </p>
        </div>
      </footer>

    </div>
  );
}