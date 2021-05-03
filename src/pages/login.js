import React, { useState } from "react"
import Layout from "../components/layout"

const LoginPage = props => {
    
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const [errorMessage, setErrorMessage] = useState("")

  function handleSubmit() {}
  function handleInputChange() {}
  return (
      <Layout>
    <section className="mt-24">
      <div className=" w-full h-full">
        <div className="px-40 py-24 bg-yellow-500 mb-5 rounded-lg shadow-xl bg-transparent">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl w-full  font-bold text-dark flex justify-center mb-5 ">
              <span className="font-mono">Sign in</span>
            </h1>
            <label
              for="email"
              className="block text-s font-bold font-mono text-dark uppercase"
            >
              E-mail
            </label>
            <input
              value={formValues.email}
              required
              className="block rounded-lg w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              name="email"
              onChange={handleInputChange}
              placeholder="email"
              type="email"
            />
            <label
              for="password"
              className="block mt-2 font-mono text-s font-bold text-dark uppercase"
            >
              Password
            </label>
            <input
              value={formValues.password}
              required
              className="block rounded-lg w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              type="password"
            />
            {!!errorMessage && (
              <div>
                {" "}
                {/* <ErrorMessage errorMessage={errorMessage} />{" "} */}
              </div>
            )}
            <button
              className="w-full py-3 mt-6 font-medium tracking-widest rounded-md text-white uppercase bg-yellow-800 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default LoginPage
