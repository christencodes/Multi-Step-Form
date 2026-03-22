export default function YourInfo() {
  return (
    <div
      className="flex flex-col gap-6 |
    md:max-w-87 md:gap-8 md:self-start md:pt-8 "
    >
      <div className="header flex flex-col gap-2">
        <p className="text-preset-2 text-blue950 md:text-preset-1">
          Personal info
        </p>
        <p className="text-grey500">
          Please provide your name, email, address, and phone number.
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-4 md:gap-6" action="">
          <div className="flex flex-col gap-2">
            {" "}
            <label
              className="text-blue950 text-preset-5 md:text-preset-4r"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2  border border-purple200 focus:outline-0 text-grey500 text-preset-4m rounded-sm md:text-preset-3m md:h-12"
              type="text"
              id="name"
              placeholder="John Smith"
            />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <label
              className="text-blue950 text-preset-5 md:text-preset-4r"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border border-purple200 focus:outline-0 text-grey500 text-preset-4m rounded-sm md:text-preset-3m md:h-12"
              type="email"
              id="email"
              placeholder="email@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-blue950 text-preset-5 md:text-preset-4r"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="w-full px-4 py-2 border border-purple200 focus:outline-0 text-grey500 text-preset-4m rounded-sm md:text-preset-3m md:h-12"
              type="text"
              id="phoneNumber"
              placeholder="123-1234-1234"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
