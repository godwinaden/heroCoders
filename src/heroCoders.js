/*
 * HeroCoders
 * Copyright 2021
 * Author: Aden Godwin John
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Project: https://github.com/godwinaden/herocoders
 */


function HeroCoders() {
    let _this = this;
    const PI = 3.14;
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    this.areaOfCircle = (radius) => {
        //radius must be a number
        if (typeof(radius) !== 'number') throw new Error('Radius Must be a Number');
        console.log("Radius is a number");
        area = PI * (Math.pow(radius, 2));
        console.log(`The area of a circle with radius ${radius} is ${area}`);
        return area;
    }

    this.isSentenceCase = (text) => {
        if (typeof(text) !== 'string') throw new Error('Radius Must be a Number');
        console.log("text is a string");
        firstLetter = text.charAt(0);
        console.log(`first letter is ${firstLetter}`);
        return UPPERCASE.indexOf(firstLetter) === -1 ? false : true;
    }

    /**
     * test function
     * @param {string} desc
     * @param {function} fn
     */
    function it(desc, fn) {
        try {
            fn();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        } catch (error) {
            console.log('\n');
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.error(error);
        }
    }

    function assert(isTrue) {
        if (!isTrue) {
            throw new Error();
        }
    }

}

const heroCoders = new HeroCoders();