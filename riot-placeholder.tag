<ph>
  <style>
    @keyframes loading{
      0%{
        background-position: -468px 0;
      }
      100%{
        background-position: 468px 0;
      }
    }
    :scope {
      cursor: default;
    }
    :scope span.ph-mask {
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: loading;
      animation-timing-function: linear;
      background: #f6f7f8;
      background: linear-gradient(to right, #eeeeee 8%, #cccccc 18%, #eeeeee 33%);
      background-size: 1000px 104px;
      height: 338px;
      position: relative;
      overflow: hidden;
    }
    :scope.ph-img {
      display: block;
    }
  </style>
  <script>
    const generator = new (require('foobar-ipsum'))()
    const type = this.root.localName

    switch (type) {
      case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'p': case 'span':
        let unit = this.opts.unit
        if (!unit) {
          switch(type) {
            case 'h1': case 'h2': case 'h3': case 'h4': case 'h5':
              unit = 'word'
              break
            case 'span':
              unit = 'sentence'
              break
            case 'p':
              unit = 'paragraph'
              break
          }
        }
        const size = this.opts.size || 'md'
        const sizes = {
          sentence: {
            sm: 5,
            md: 15,
            lg: 25
          },
          paragraph: {
            sm: 3,
            md: 5,
            lg: 7
          }
        }
        const masked = 'loading' in this.opts
        switch (unit) {
          case 'word':
            const word = generator.word()
            this.root.innerHTML = masked ? `<span class="ph-mask">${word}</span>` : word
            break
          case 'sentence':
            const sentence = generator.sentence(sizes[unit][size])
            this.root.innerHTML = masked ? `<span class="ph-mask">${sentence}</span>` : sentence
            break
          case 'paragraph':
            const paragraph = generator.paragraph(sizes[unit][size], '<br />')
            this.root.innerHTML = masked ? paragraph.split('.').filter(c => c)
            .map(sentence => {
                return sentence.startsWith(' ') ?
                ` <span class="ph-mask">${sentence.trim()}.</span>` :
                ` <span class="ph-mask">${sentence}.</span>`
            }).join(' ') : paragraph
            break
          default:
            break
        }
        break
      case 'img':
        this.root.className += 'ph-img'
        this.root.src = `https://via.placeholder.com/${this.root.height}x${this.root.width}`
        break
    }
  </script>
</ph>
