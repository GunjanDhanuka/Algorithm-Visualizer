import React from "react";
import { getMergeSortAnimations, getBubbleSortAnimations } from "../SortingAlgorithms/sortingAlgorithms";
import './SortingVisualizer.css';
import useWindowDimensions from "./utilities";



// TODO: Make the NUMBER_OF_ARRAY_BARS responsive depending on the width
// TODO: Make the HEIGHT of bars responsive depending on height
// TODO: Put a slider to choose the Animation Speed.
// TODO: Add a green colour to those which are in their sorted positions.

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';



export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        

        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            let value = randomIntFromInterval(5, 730);
            array.push(value);
            //console.log(value);
        }
        this.setState({ array });
        
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }
    quickSort() { }
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //const isColorChange = i % 3 !== 2;

            // if (isColorChange) {
            //     const [barOneIdx, barTwoIdx] = animations[i];
            //     const barOneStyle = arrayBars[barOneIdx].style;
            //     const barTwoStyle = arrayBars[barTwoIdx].style;
            //     const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            //     setTimeout(() => {
            //         barOneStyle.backgroundColor = color;
            //         barTwoStyle.backgroundColor = color;

            //     }, i * ANIMATION_SPEED_MS);
            // } else {
            //     setTimeout(() => {
            //         const [barOneIdx, newHeight] = animations[i];
            //         const barOneStyle = arrayBars[barOneIdx].style;
            //         barOneStyle.height = `${newHeight}px`;
            //     }, i * ANIMATION_SPEED_MS);
            // }
            const [val1, val2, type] = animations[i];
            //console.log(animations[i]);
            if (type === 'compare1') {
                const [barOneIdx, barTwoIdx, type] = animations[i];


                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = SECONDARY_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i*ANIMATION_SPEED_MS);

            } else if (type === 'compare2') {
                const [barOneIdx, barTwoIdx, type] = animations[i];
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = PRIMARY_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i*ANIMATION_SPEED_MS);
            }

            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, type] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    heapSort() { }

    // testSortingAlgorithm() {
    //     for (let i = 0; i < 300; i++) {
    //         this.resetArray();
    //         const jsSortedArray = this.state.array.slice().sort((a, b) => a - b);
    //         const sortedArray = (this.state.array);
    //         console.log(isArraysEqual(jsSortedArray, sortedArray));
    //     }
    // }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: `pink`,
                            height: `${value}px`
                        }}
                    >
                    </div>
                ))}
                <div>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    {/* <button onClick={() => this.testSortingAlgorithm()}>Test Sorting Algorithm</button> */}
                </div>

            </div>

        );
    }

}

function randomIntFromInterval(min, max) {
    //Returns a random number from [min, max]
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}