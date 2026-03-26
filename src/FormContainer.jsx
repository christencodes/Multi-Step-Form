export default function FormContainer({ children, stepDisplay }) {
  return (
    <div
      className="max-w-85.75 self-center w-full flex flex-col bg-white px-6 py-8 rounded-[10px] lg:h-full md:h-full h-fit 
     | md:flex-row md:justify-start md:items-center md:max-w-171.5 md:max-h-150 md:px-4 md:py-4 md:gap-8 z-10 "
    >
      <div className="bg-[url(/images/bg-sidebar-desktop.svg)] rounded-[10px] w-full h-full md:max-h-142 md:max-w-51.5 bg-no-repeat bg-cover bg-center lg:flex md:flex justify-center items-start px-6 py-10 hidden ">
        {stepDisplay}
      </div>
      <div className="self-start flex flex-col h-full justify-aroundgap-8 ">
        {children}
      </div>
    </div>
  );
}
