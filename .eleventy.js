import eleventyPluginVite from '@11ty/eleventy-plugin-vite';

export default async function (eleventyConfig) {
  // Добавляем плагин Vite
  eleventyConfig.addPlugin(eleventyPluginVite, {
    viteOptions: {
      root: 'src',
      css: {
        devSourcemap: true
      }
    }
  });

  // Копируем статические файлы
  eleventyConfig.addPassthroughCopy('src');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addWatchTarget('src');
  eleventyConfig.addWatchTarget('src/styles');
  eleventyConfig.addPassthroughCopy('public');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes'
    },
    templateFormats: ['njk', 'html', 'md']
  };
}