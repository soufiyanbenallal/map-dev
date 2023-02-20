/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter() {
    return (
      <div className="bg-gradient-to-l from-slate-100 ">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 flex-col flex md:flex-row justify-between items-center">
            <div className="flex-1">
                <h2 className="inline text-sm font-extralight tracking-widest text-gray-900 sm:block sm:text-base">
                    Want application news and new updates?
                </h2>
                <p className="inline text-3xl font-bold tracking-tight text-rose-600 sm:block sm:text-3xl">
                    Sign up for our newsletter.
                </p>
            </div>
          <form className="sm:flex flex-1">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-rose-500 focus:ring-rose-500 "
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  