let doWork = function(){
  throw new Error('Unable to do work')
}

try {
  doWork()
} catch (e) {
  console.log(e.message)
} finally {
  console.log('Do some cleanup code');
}
