import ThreadsPlugin from "threads-plugin";

export default function babelPreset({ plugins }) {
    // Babel config that will be merged inside next/babel
    plugins.push(new ThreadsPlugin({globalObject: 'self'}))
}