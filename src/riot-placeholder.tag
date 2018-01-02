<ph>
    <style>
    @keyframes loading{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
    }
    :scope span.ph-mask {
    cursor: default;
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
const generator = new foobarIpsum()
const type = this.root.localName

console.log(this)

switch (type) {
    case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'p': case 'span':
    const tUnit = this.opts.unit
    const size = this.opts.size
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
    switch (tUnit) {
        case 'word':
            const word = generator.word()
        this.root.innerHTML = masked ? `<span class="ph-mask">${word}</span>` : word
        return
        case 'sentence':
        const sentence = generator.sentence(sizes[tUnit][size || 'md'])
        this.root.innerHTML = masked ? `<span class="ph-mask">${sentence}</span>` : sentence
        return
        case 'paragraph':
        const paragraph = generator.paragraph(sizes[tUnit][size || 'md'], '<br />')
        this.root.innerHTML = masked ? paragraph.split('.').filter(c => c)
        .map(sentence => {
            return sentence.startsWith(' ') ? ` <span class="ph-mask">${sentence.trim()}</span>` : ` <span class="ph-mask">${sentence}</span>`
        }).join(' ') : paragraph
        return
        default:
        return
    }
    case 'img':
    this.root.className += 'ph-img'
    this.root.src = `http://via.placeholder.com/${this.root.height}x${this.root.width}`
    break
}
</ph>