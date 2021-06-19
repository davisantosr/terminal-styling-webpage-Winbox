const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const pTag = document.getElementsByClassName('box-text')

window.addEventListener('load', () => {
  console.log('LOAD')

  console.log(pTag)
})

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About me',
    width: '400px',
    // modal: true,
    // background: '#00aa00',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function(){
      this.setBackground('#00aa00')
      console.log('chamou', pTag)
      pTag[0].classList.add('open')
      console.log(pTag)

    },
    onblur: function(){
      this.setBackground('#777')
      pTag[0].classList.remove('open')
      console.log(pTag)

    },
  })

  
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 150,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function(){
      this.setBackground('#00aa00')
      pTag[1].classList.add('open')
      console.log(pTag)

    },
    onblur: function(){
      this.setBackground('#777')
      pTag[1].classList.remove('open')
      console.log(pTag)

    }
  })
})
