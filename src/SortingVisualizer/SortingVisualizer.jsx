import React from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/sortingAlgorithms";
import './SortingVisualizer.css';

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
        for (let i = 0; i < 310; i++) {
            let value = randomIntFromInterval(5, 730);
            array.push(value);
            //console.log(value);
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = sortingAlgorithms.mergeSort(this.state.array);

    }
    quickSort() { }
    bubbleSort() { }
    heapSort() { }

    testSortingAlgorithm() {
        for (let i = 0; i < 300; i++) {
            this.resetArray();
            const jsSortedArray = this.state.array
                .slice().
                sort((a, b) => a - b);
            const sortedArray = mergeSortHelp(this.state.array);
            console.log(isArraysEqual(jsSortedArray, sortedArray));
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: "pink",
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
                    <button onClick={() => this.testSortingAlgorithm()}>Test Sorting Algorithm</button>
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