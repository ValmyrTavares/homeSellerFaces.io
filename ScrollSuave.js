export default class ScrollSuave{
    constructor(link){
        this.link = document.querySelector('.link')       
        this.options = {
            behavior: 'smooth',
            block:'start'
        }
    }




    addEvent(){
      this.link.addEventListener('click',()=>{
              this.scrollToSection(event)
          })
    }

   
    scrollToSection(event){
        event.preventDefault(event)
        const href = event.currentTarget.getAttribute("href")
        const sectionScroll = document.querySelector(href)
        sectionScroll.scrollIntoView(this.options)
      }


    init(){
        this.addEvent()
       console.log(this.link)
    }

}
