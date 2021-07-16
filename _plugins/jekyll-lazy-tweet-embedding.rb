require "open-uri"
require "json"

module Jekyll

  # convert tweet url to embedding html
  class LazyTweetEmbedding
    def get_html(id)
        url = "https://api.twitter.com/1/statuses/oembed.json?id=#{id}"
        JSON.parse(URI.open(url).read, { :symbolize_names => true })[:html]
    end

    def convert(line)
      r = /^https?:\/\/twitter\.com\/[a-zA-Z0-9_]+\/status(es)?\/([0-9]+)\/?$/
      r =~ line ? get_html($~[2]) : line
    end

    def embed(content)
      content.lines.collect {|line| convert(line) }.join
    end
  end

  # for markdown, extend oroginal parser's convert method
  module Converters
    class Markdown < Converter
      alias_method :parser_converter, :convert

      def convert(content)
        parser_converter(Jekyll::LazyTweetEmbedding.new.embed(content))
      end
    end
  end

  # for html, extend converter as a plugin
  class EmbeddingTweetIntoHTML < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.html$/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      Jekyll::LazyTweetEmbedding.new.embed(content)
    end
  end

end


# Cache class that writes to filesystem
  # TODO: Do i really need to cache?
  # @api private
  class FileCache
    def initialize(path)
      @cache_folder = File.expand_path path
      FileUtils.mkdir_p @cache_folder
    end

    def read(key)
      file_to_read = cache_file(key)
      JSON.parse(File.read(file_to_read)) if File.exist?(file_to_read)
    end

    def write(key, data)
      file_to_write = cache_file(key)

      File.open(file_to_write, "w") do |f|
        f.write(JSON.generate(data.to_h))
      end
    end

    private

    def cache_file(key)
      File.join(@cache_folder, cache_filename(key))
    end

    def cache_filename(cache_key)
      "#{cache_key}.cache"
    end
  end

  # Cache class that does nothing
  # @api private
  class NullCache
    def initialize(*_args); end

    def read(_key); end

    def write(_key, _data); end
  end