import { Eye, EyeSlash } from "@phosphor-icons/react"
import { useState } from "react"

const LoginPage = () => {

  const [hidePassword, setHidePassword] = useState<boolean>(true)

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg">
        <h1 className="text-5xl font-bold">Hello,</h1>
        <div className=" bg-white p-6 mt-3 rounded-xl shadow-xl">
          <div className="mb-3">
            <label htmlFor="" className="text-sm block mb-1">Email</label>
            <input type="text" className="w-full rounded-lg border border-gray-200 p-2" placeholder="Your email" />
          </div>
          <div className="mb-2">
            <label htmlFor="" className="text-sm block mb-1">Password</label>
            <div className="relative mt-1 rounded-lg border border-gray-200">
              <input type={hidePassword ? 'password' : 'text'} className="block w-full rounded-lg border-0 py-2 pl-2 pr-20 text-gray-900" placeholder="Your password" />
              <div className="absolute inset-y-0 right-3 flex items-center">
                {
                  hidePassword ? (
                    <EyeSlash
                      className="cursor-pointer text-gray-500 hover:text-primary text-lg"
                      onClick={() => setHidePassword(false)}
                    />
                  ) : (
                    <Eye
                      className="cursor-pointer text-gray-500 hover:text-primary text-lg"
                      onClick={() => setHidePassword(true)}
                    />
                  )
                }
              </div>
            </div>
          </div>

          <div className="mt-3">
            <button className="w-full rounded-lg bg-primary hover:bg-secondary text-light py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage