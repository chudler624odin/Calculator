//number color functions
const nums = document.querySelectorAll('.num');
nums.forEach(num => {
  num.addEventListener('mouseover', function handleClick(event) {
    //num.style.backgroundColor= 'rgb(29, 216, 5) '
    num.style.backgroundImage= 'linear-gradient(to bottom right, green, yellow)';
    num.style.color='white'
    num.style.border= 'white solid 2px'
  });
});

nums.forEach(num => {
    num.addEventListener('mouseout', function handleClick(event) {
      num.style.backgroundColor='white'
      num.style.color='rgb(29, 216, 5) '
      num.style.backgroundImage= 'none';
      num.style.border='2px rgb(29, 216, 5)  solid'
    });
  });

  //operator color functions

  let operators = document.querySelectorAll('.operator');
  operators.forEach(op => {
    op.addEventListener('mouseover', function handleClick(event) {
      //op.style.backgroundColor= 'orange '
      op.style.backgroundImage= 'linear-gradient(to bottom right, orange, red)';
      op.style.color='white'
      op.style.border= 'white solid 2px'
    });
  });
  
  operators.forEach(op => {
      op.addEventListener('mouseout', function handleClick(event) {
        op.style.backgroundColor='white'
        op.style.backgroundImage= 'none';
        op.style.color='orange'
        op.style.border='2px orange  solid'
      });
    });

    const clear = document.querySelector('#clear');
    clear.onmouseover = function(){
        clear.style.backgroundColor = ('paleturquoise')
        clear.style.backgroundImage = ('none')
        clear.style.border = ('2px paleturquoise solid')
        
    }

    clear.onmouseout = function(){
        
        clear.style.backgroundImage = ('linear-gradient(to bottom right, paleturquoise, white)')
        clear.style.color = ('black');
        clear.style.backgroundImage = ('none')
        clear.style.border = ('2px black solid');
    }

    const del = document.querySelector('#delete');
    del.onmouseover = function(){
        del.style.backgroundColor = ('lightcoral')
        del.style.backgroundImage = ('none')
        del.style.border = ('2px lightcoral solid')
        
    }

    del.onmouseout = function(){
        
        del.style.backgroundImage = ('linear-gradient(to bottom right, lightcoral, white)')
        del.style.color = ('black');
        del.style.backgroundImage = ('none')
        del.style.border = ('2px black solid')
    }

    const equal = document.querySelector('.equal');
    equal.onmouseover = function(){
        equal.style.backgroundColor = ('none')
        equal.style.backgroundImage = ('linear-gradient(to bottom right, blue, lightblue)')
        equal.style.color = ('white') 
        equal.style.border = ('2px white solid')
        
    }

    equal.onmouseout = function(){
        equal.style.backgroundColor = ('white')
        equal.style.backgroundImage = ('none')
        equal.style.color = ('blue');
        equal.style.backgroundImage = ('none')
        equal.style.border = ('2px blue solid')
    }

    const dec = document.querySelector('.decimal');
    dec.onmouseover = function(){
        dec.style.backgroundColor = ('none')
        dec.style.backgroundImage = ('linear-gradient(to bottom right, rgb(7, 200, 248), white)')
        dec.style.color = ('white') 
        dec.style.border = ('2px white solid')
        
    }

    dec.onmouseout = function(){
        dec.style.backgroundColor = ('white')
        dec.style.backgroundImage = ('none')
        dec.style.color = ('rgb(7, 200, 248)');
        dec.style.backgroundImage = ('none')
        dec.style.border = ('2px rgb(7, 200, 248) solid')
    }