# Lazy Excel Toolkit

## 项目文件夹结构说明

```
项目根目录/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── src/
│   ├── App.tsx
│   ├── components/  # 所有组件
│   ├── data/       # 数据文件 
│   ├── hooks/      # 自定义Hook
│   ├── lib/        # 工具函数
│   ├── locales/    # 多语言文件
│   ├── pages/      # 页面组件
│   └── ...其他文件
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 如何打包上传

1. 右键点击项目根文件夹
2. 选择"发送到" > "压缩(zipped)文件夹"
3. 排除以下目录：
   - node_modules/
   - dist/
4. 将生成的ZIP文件上传到GitHub

## GitHub上传指南

1. 访问GitHub网站并登录
2. 点击"New repository"创建新仓库
3. 在仓库页面点击"Add file" > "Upload files"
4. 拖拽ZIP文件或选择文件上传
