module.exports = {
    create : (product)=>product,
    remove : ()=>true,
    find : (code) => Promise.resolve([{description:"A",price:1.1,code:2,cost:3.1,stock:9}])
}