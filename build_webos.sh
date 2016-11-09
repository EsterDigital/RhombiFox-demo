# Build index.html & app.json
zb build webos

# Copy assets
BUILD_DIR="dist/$(ls dist | tail -n 1)/webos/"
cp assets/* $BUILD_DIR

# Create .ipk file
/usr/local/share/webOS_TV_SDK/CLI/bin/ares-package $BUILD_DIR
