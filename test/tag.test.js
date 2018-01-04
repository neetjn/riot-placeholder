describe('given a placeholder tag is referenced by an element', function() {

  beforeEach(function() {
    // # clean up our context before each test
    document.body.innerHTML = ''
    riot.util.vdom.forEach(v => v.unmount())
  })

  it('should properly load defaults for text elements', function() {
    const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'span', 'p']
    textElements.forEach(el => {
      const v = document.createElement(el)
      v.setAttribute('data-is', 'ph')
      document.body.appendChild(v)
    })
    mounted = riot.util.vdom.length // # store number of mounted tags before mount
    riot.mount('ph') // # must manually mount because of plugin load order
    // # check each text element was mounted
    expect(riot.util.vdom.length).toBe(mounted + textElements.length)
    // # check each text element was properly mounted with content
    textElements.forEach(el => {
      document.querySelector(el).innerHTML.length > 0
    })
  })

  it('should properly load an image', function() {
    const img = document.createElement('img')
    const width = Math.floor(Math.random() * 10)
    const height = Math.floor(Math.random() * 10)
    img.setAttribute('data-is', 'ph')
    img.setAttribute('width', width)
    img.setAttribute('height', height)
    document.body.appendChild(img)
    mounted = riot.util.vdom.length // # store number of mounted tags before mount
    riot.mount('ph') // # must manually mount because of plugin load order
    expect(riot.util.vdom.length).toBe(mounted + 1)
    expect(document.querySelector('img').src.indexOf(`${height}x${width}`) > -1).toBe(true)
  })

})
