var mySingletonMod = (function () {
    function mySingletonMod() {
        if (mySingletonMod._instance) {
            throw new Error("Error: Instantiation failed. Singleton module! Use .getInstance() instead of new.");
        }
        mySingletonMod._instance = this;
    }
    mySingletonMod.getInstance = function () {
        if (mySingletonMod._instance === null) {
            mySingletonMod._instance = new mySingletonMod();
        }
        return mySingletonMod._instance;
    };
    mySingletonMod._instance = null;
    return mySingletonMod;
})();
module.exports = mySingletonMod;
