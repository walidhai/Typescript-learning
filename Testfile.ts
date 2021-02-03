function func(){

    console.log("test");
    
}
func()




function stringTrav(a :string[]) {
   for (let i = 0; i < a.length; i++) {
       
    let element = a[i];
    console.log(element);
       
   }
}

function arrayMerge(a: String[]) {
    let tmpArray: string = ""

    for (let i = 0; i < a.length; i++) {
        
        tmpArray = tmpArray + a[i]
    }

    console.log(tmpArray);
    
}

let testArray: string[] = ["hei", "på", "deg"]
stringTrav(testArray)
arrayMerge(testArray)

function arrarr(a: String) {
    let tmpString = a.split(" ",2)
    console.log(tmpString);
    
}

arrarr("hello hello hello hello hello")
