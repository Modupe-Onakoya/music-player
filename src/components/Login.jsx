import asset from "../assets/asset"

function Login() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-zinc-950 transition-colors">
            <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl dark:bg-gradient-to-b from-black via-purple-900 to-black border-gray-100 dark:border-zinc-800">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                        Please enter your details to sign in
                    </p>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300">Email</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300">Password</label>
                            <span className="text-xs text-blue-600 cursor-pointer hover:underline dark:text-blue-400">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        />
                    </div>

                    <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]">
                        Sign in
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
                        <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase">Or</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
                    </div>

                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                        Continue with Google
                    </button>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-zinc-500">
                    Don't have an account?{' '}
                    <span className="font-medium text-blue-600 cursor-pointer hover:underline dark:text-blue-400">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login