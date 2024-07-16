# Dockerfile

# ベースイメージ
FROM node:20

# 作業ディレクトリの設定
WORKDIR /app

# 必要なファイルをコピー
COPY frontend/package*.json ./

# COPY frontend/.env.development ./.env
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# 依存関係をインストール
RUN npm install


# serve をグローバルにインストール
RUN npm install -g serve

# ソースコードをコピー
COPY frontend/ .

# ビルド
RUN npm run build

# サーバーを起動
CMD ["serve", "-s", "build"]