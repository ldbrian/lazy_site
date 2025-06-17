import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-green-600">Lazy Excel Toolkit</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Download
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}