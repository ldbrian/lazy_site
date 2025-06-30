export default function Footer() {
  const isProduction = import.meta.env.PROD;
  const commitSha = import.meta.env.VERCEL_GIT_COMMIT_SHA;
  const buildTime = import.meta.env.VITE_BUILD_TIME;
  
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
              <p>构建时间: {buildTime || 'development'}</p>
              {isProduction ? (
                commitSha ? (
                  <>
                    <p>部署状态: <span className="text-green-500">已同步</span></p>
                    <p>Commit: {commitSha.substring(0, 7)}</p>
                    <p>分支: {import.meta.env.VERCEL_GIT_COMMIT_REF || 'main'}</p>
                    <p>仓库: {import.meta.env.VERCEL_GIT_REPO_OWNER}/{import.meta.env.VERCEL_GIT_REPO_SLUG}</p>
                    {import.meta.env.VERCEL_GIT_COMMIT_MESSAGE && (
                      <p className="max-w-xs mx-auto truncate">更新: {import.meta.env.VERCEL_GIT_COMMIT_MESSAGE}</p>
                    )}
                  </>
                ) : (
                  <p className="text-red-500">GitHub集成异常，请检查Vercel项目设置</p>
                )
              ) : (
                <p>本地开发模式</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}