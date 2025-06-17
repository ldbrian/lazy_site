export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-weixin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-qq"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-500">
              © 2025 Lazy Excel Toolkit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}