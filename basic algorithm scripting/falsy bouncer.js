function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);

// This will remove all the above values from array.
