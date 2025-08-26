"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RegistrationConfirmation() {
  const router = useRouter()

  const handleContinueToLogin = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md space-y-10">
        {/* SUCCESS Section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-slide-up">Registration Successful!</h1>
          <p className="text-gray-600 animate-slide-up animation-delay-100">
            Welcome aboard! Your account has been created successfully and you're ready to get started.
          </p>
        </div>

        {/* CONFIRMATION DETAILS */}
        <div className="bg-white backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 animate-slide-up animation-delay-200 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">Account Details</h2>

          {/* Success Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-800">Account Created</p>
                <p className="text-sm text-blue-700">You can now access all features of your account.</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinueToLogin}
            className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Continue to Login
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  )
}
