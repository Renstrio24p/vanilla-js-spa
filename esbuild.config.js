import * as esbuild from 'esbuild';
import LiveServer from 'alive-server';
import imagePlugin from 'esbuild-plugin-inline-image';
import copy from 'esbuild-copy-static-files';
// import { tailwindPlugin } from 'esbuild-plugin-tailwindcss';

const Server = () => {
    const liveParams = { root: 'dist', port: 4600, host: 'localhost', file: 'index.html'};
    LiveServer.start(liveParams);
};

const EsbuildOptions = {
    entryPoints: ['src/index.js','src/**/*.js', 'index.html'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    splitting: true,
    format: 'esm',
    chunkNames: 'src/[name]-[hash]',
    // sourcemap: true,
    loader: {
        '.html': 'copy',
        '.png': 'copy',
        '.js': 'jsx',
        '.woff2': 'file',
        '.woff': 'file',
        '.eot': 'file',
        '.ttf': 'file',
        '.svg': 'file',
        '.css': 'css',
        '.json': 'json',
        '.webp': 'file',
        '.avif': 'file',
        '.jpg': 'file',
    },
    plugins: [
        imagePlugin(),
        copy({
            src: './src/images',
            dest: './dist',
            recursive: true,
        }),
        // tailwindPlugin({}), // enable tailwindcss
    ],
    external: ['/*.webp', '/*.avif', '/*.jpg','/*.png'],
    define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'), 'process.env': JSON.stringify(process.env) },
};

if (process.argv.includes('--build')) {
    await esbuild.build(EsbuildOptions).catch(() => {
        process.exit(1);
    });
} else {
    const ctx = await esbuild.context(EsbuildOptions).catch(() => {
        process.exit(1);
    });
    ctx.watch();
    ctx.rebuild();
    Server();
}
