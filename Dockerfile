# Menggunakan image resmi Nginx versi terbaru
FROM nginx:latest
# Menghapus konfigurasi default Nginx
RUN rm -rf /usr/share/nginx/html/*
# Menyalin file website statis ke direktori default Nginx
COPY index.html /usr/share/nginx/html/index.html
# Mengekspose port 80 untuk akses HTTP
EXPOSE 80