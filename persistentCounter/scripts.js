function incrementCounter(){
    try{
        let count = parseInt(localStorage.getItem('count')) || 0;
        count++;
        localStorage.setItem('count', count.toString());
        document.getElementById('counter').textContent = count;
        console.log(count)
    }catch(error){
        console.error('Could not increment counter:', error);
    }
}

function resetCounter(){
    try{
        localStorage.removeItem('count');
        document.getElementById('counter').textContent = 0;
    }catch(error){
        console.error('Could not reset counter:', error);
    }
}