
const contentNumber = document.querySelectorAll('[contentNumber]');
const contentOperator = document.querySelectorAll('[contentOperator]')
const previousText = document.querySelector('.previous');
const currentText = document.querySelector('.current');
const allClear = document.querySelector('.all-clear');
const deleteSingleText = document.querySelector('.delete');
const assignmentOperator = document.querySelector('.equalto');

const appendNumber = function(number){
    if(currentText.textContent.includes('.') && number === '.')return;
    currentText.textContent += number;
}
const addContentsToPreviousText = function(){
    previousText.textContent = currentText.textContent;
    currentText.textContent = '';
}
const compute = function(){
    const newText = previousText.textContent + currentText.textContent;
    currentText.textContent = eval(newText);
}

contentNumber.forEach((button)=>{
    button.addEventListener('click', function(e){
        if(previousText.textContent.includes('/')||
previousText.textContent.includes('*')||
previousText.textContent.includes('+')||
previousText.textContent.includes('-') || previousText.textContent === '')
        appendNumber(button.textContent);
    });
})

contentOperator.forEach((button)=>{
    button.addEventListener('click', function(e){
        if(currentText.textContent === '' && previousText.textContent === '')return;
        else if(previousText.textContent === ''){
            appendNumber(button.textContent);
            addContentsToPreviousText();
        }
        else{
            compute();
            appendNumber(button.textContent);
            addContentsToPreviousText();
        }
    });
})

assignmentOperator.addEventListener('click', function(e){
if(previousText.textContent.includes('/')||
previousText.textContent.includes('*')||
previousText.textContent.includes('+')||
previousText.textContent.includes('-')){
        compute();
        addContentsToPreviousText();
    }
})

allClear.addEventListener('click', function(){
    previousText.textContent = '';
    currentText.textContent = '';
})
deleteSingleText.addEventListener('click', function(){
    currentText.textContent = currentText.textContent.slice(0,- 1);
})