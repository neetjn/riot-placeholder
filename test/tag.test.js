describe('given a placeholder tag is referenced by an element', function() {

  beforeEach(function() {
    document.querySelectorAll('[data-is="ph"]').forEach(e => e._tag.unmount())
    Placeholder(riot)
  })

  it('should properly load defaults for text elements', function() {
    const textNodes = ['h1', 'h2', 'h3', 'h4', 'h5', 'span', 'p']
    textNodes.forEach(el => {
      const v = document.createElement(el)
      v.setAttribute('data-is', 'ph')
      document.body.appendChild(v)
    })
    mounted = riot.util.vdom.length // # store number of mounted tags before mount
    riot.mount('ph') // # must manually mount because of plugin load order
    // # check each text element was mounted
    expect(riot.util.vdom.length).toBe(mounted + textNodes.length)
    // # check each text element was properly mounted with content
    textNodes.forEach(el => {
      document.querySelector(el).innerHTML.length > 0
    })
  })

})
