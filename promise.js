
class promise {
    constructor(fn){
        this.fulfilledList=[];
        this.rejectedList=[];
        this.eventSign=0;
        this.asyncOperation={
            status:null,
            result:null
        };
        fn(this.resolve(),this.reject());
        return this

    }
    catch(fn){
        if (this.asyncOperation.status==='rejected'){

        }
    }
    resolve(){
        return (result)=> this.eventSign=setTimeout(()=>{
            this.fulfilledList.map(fn=>fn(result));
            clearTimeout(this.eventSign)
        },0);
    }
    reject(fn){

    }
    then(onFulfilled, onRejected){
        this.fulfilledList.push(onFulfilled);
        this.rejectedList.push(onRejected);
        return this;
    }
    static resolve(){

    }
}
const test=new promise(((resolve, reject) => setTimeout(function () {
    resolve(1)
},1000)));
test.then((x)=>console.log(x));