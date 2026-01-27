import asset from "../assets/asset"

function SignUp() {


    return (
        <main className="grid min-h-screen place-items-center bg-gray-50 px-4 py-12 transition-colors dark:bg-zinc-950">
            <section className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Create account
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                        Join us and start your 30-day free trial.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400">First Name</label>
                            <input
                                type="text"
                                placeholder="Jane"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Email</label>
                        <input
                            type="email"
                            placeholder="jane@example.com"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        />
                        <p className="mt-1 text-[10px] text-gray-500">Must be at least 8 characters.</p>
                    </div>

                    <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 active:scale-[0.98]">
                        Create Account
                    </button>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
                        <span className="mx-4 flex-shrink text-[10px] font-bold uppercase tracking-widest text-gray-400">Or sign up with</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-zinc-700"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                            GitHub
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600 dark:text-zinc-500">
                    Already have an account?{' '}
                    <span className="cursor-pointer font-semibold text-blue-600 hover:underline dark:text-blue-400">
                        Log in
                    </span>
                </p>
            </section>
        </main>
    )

}

export default SignUp
