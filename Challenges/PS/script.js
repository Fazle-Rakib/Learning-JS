function doubleTon(n){
    let numString = n.toString();
    let dist = 0,disX,disY,index;
    let digits = new Array(10);
    digits.fill(false);
    for(let i = 0;i<numString.length;i++)
    {
        const single = parseInt(numString[i]);
        if(!digits[single])
        {
            digits[single] = true;
            dist++;
            if(dist == 1)
            {
                disX = single;
            }
            else
            {
                disY = single;
                index = i;
                break;
            }
        }
    }
    if(dist < 2)
    {
        if(n > 10)
        {
            return ++n;
        }
        else
        {
            return 10;
        }
    }
    if(disX > disY)
    {
        const temp = disX;
        disX = disY;
        disY = temp;
    }
    // numString[0] = 3;
    console.log(index,disX,disY);
    for(let i = index+1;i<numString.length;i++)
    {
        if(numString[i] != disX && numString[i] != disY)
        {
            if(numString[i-1] == disX)
            {
                console.log(numString[i-1]);
                numString[i-1] = disY;
                console.log(numString[i-1]);
                for(let j = i;j<numString.length;j++)
                {
                    numString[i] = disX;
                }
                console.log(numString);
                return parseInt(numString);
            }
            else
            {
                if(numString[0] == disX) disY++;
                else 
                {
                    disX++;
                    if(disX == disY) disX++;
                }
                index = i;
                break;
            }
        }
    }
    console.log(numString);
    if(numString[0] == disX)
    {
        for(let i = 0;i<index;i++)
        {
            numString[i] = numString[i] == disX ? disX : disY;
        }
        for(let i = index;i<numString.length;i++)
        {
            numString[i] = disX;
        }
    }
    else 
    {
        for(let i = 0;i<index;i++)
        {
            numString[i] = numString[i] == disY ? disY : disX;
        }
        for(let i = index;i<numString.length;i++)
        {
            numString[i] = disY;
        }
    }
    return parseInt(numString);

}

console.log(doubleTon(1214));