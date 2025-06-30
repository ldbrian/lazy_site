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
             <div className="text-center text-xs text-gray-400 mt-2 space-y-1">
               <p>部署版本: {import.meta.env.VITE_BUILD_TIME || 'development'}</p>
               {import.meta.env.VERCEL_GIT_COMMIT_SHA && (
                 <>
                   <p>Commit: {import.meta.env.VERCEL_GIT_COMMIT_SHA.substring(0, 7)}</p>
                   <p>Branch: {import.meta.env.VERCEL_GIT_COMMIT_REF || 'main'}</p>
                   <p>Repo: {import.meta.env.VERCEL_GIT_REPO_OWNER}/{import.meta.env.VERCEL_GIT_REPO_SLUG}</p>
                   <p>Deploy ID: {import.meta.env.VERCEL_URL || 'local'}</p>
                 </>
               )}
               {import.meta.env.VERCEL_GIT_COMMIT_MESSAGE && (
                 <p>Message: {import.meta.env.VERCEL_GIT_COMMIT_MESSAGE}</p>
               )}
               {!import.meta.env.VERCEL_GIT_COMMIT_SHA && (
                 <p className="text-red-500">未检测到Vercel部署信息，请检查GitHub集成设置</p>
               )}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}