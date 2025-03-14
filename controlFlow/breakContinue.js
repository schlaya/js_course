let i = 0;
while (i <= 10) {
    // when JS sees the break keyword it escapes the loop
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        // when JS sees the continue keyword it jumps to the next iteration
        continue;
    }

    console.log(i);
    i++;
}