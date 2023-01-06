export const merge = (col1 :number[],col2:number[]) :number[] => {
    const arr :number[] = []
    let i = 0 //index of col1
    let j = 0 //index of col2
    let x = 0 //index of arr
    //step 1
    while(i<col1.length && j<col2.length){
        if (col1[i]<=col2[j]){
            arr[x]=col1[i]
            i++
        }
        else{
            arr[x]=col2[j]
            j++
        }
        x++
    }
    //step 2
    while(i<col1.length){
        arr[x]=col1[i]
        x++
        i++
    }
    //step 3
    while(j<col2.length){
        arr[x]=col2[j]
        x++
        j++
    }
    return arr
}
console.log(merge([1,3,5,7],[2,4,6,8,10]));

