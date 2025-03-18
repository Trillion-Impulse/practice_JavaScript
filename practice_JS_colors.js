function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night mode'){
        target.style.backgroundColor = 'darkgray';
        self.value = 'day mode'
    }
    else{
        target.style.backgroundColor = 'white';
        self.value = 'night mode'
    }
}