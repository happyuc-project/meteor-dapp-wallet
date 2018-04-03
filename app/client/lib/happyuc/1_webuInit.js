// set providor
if(typeof webu !== 'undefined')
  webu = new Webu(webu.currentProvider);
else
  webu = new Webu(new Webu.providers.HttpProvider("http://localhost:8545"));
  