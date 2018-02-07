export default function(opts) {
  const textNodes = ['h1', 'h2', 'h4', 'h5', 'p', 'span', 'label', 'title']
  if (textNodes.find(n => n == this.root.localName)) {
    let unit = opts.unit
    if (!unit) {
      switch(this.root.localName) {
        case 'h1': case 'h2': case 'h3': case 'h4': case 'h5':
          unit = 'word'
          break
        case 'span':
          unit = 'sentence'
          break
        case 'p':
          unit = 'paragraph'
          break
        default:
          unit = 'word'
          break
      }
    }
    const size = opts.size || 'md'
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
    switch (unit) {
      case 'word':
        this.root.innerHTML = this.placeholder.word()
        break
      case 'sentence':
        this.root.innerHTML = this.placeholder.sentence(sizes[unit][size])
        break
      case 'paragraph':
        this.root.innerHTML = this.placeholder.paragraph(sizes[unit][size], '<br />')
        break
    }
  }
}
