cd /var/www/html/persianas-web && \
rm -rf .next out && \
pnpm build && \
mkdir -p /var/www/react-app/villarreal_gallegos_daniel_proyecto_final && \
rm -rf /var/www/react-app/villarreal_gallegos_daniel_proyecto_final/* && \
cp -a out/. /var/www/react-app/villarreal_gallegos_daniel_proyecto_final/ && \
nginx -t && \
systemctl reload nginx