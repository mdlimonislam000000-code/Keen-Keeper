'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const NotFoundPage = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6 py-12">
            <div className="text-center">
                
                <p className="text-sm font-semibold text-[#134e4a] uppercase tracking-widest">
                    404 Error
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for. <br className="hidden md:block" />
                    Maybe your friend moved to another link!
                </p>

                
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto rounded-xl bg-[#134e4a] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0f3f3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#134e4a] transition-all"
                    >
                        Go back home
                    </Link>

                    <button
                        onClick={() => router.back()}
                        className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                    >
                        Go back
                    </button>
                </div>


                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-sm text-gray-500">
                        Lost? <Link href="/timeline" className="text-[#134e4a] font-medium hover:underline">Check your timeline</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;