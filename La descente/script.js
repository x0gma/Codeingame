while (true) {
    let mountainMax = 0;
    let imax = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline());

        if (mountainH > mountainMax) {
            mountainMax = mountainH;
            imax = i;
        }

    }
    console.log(imax);    
}