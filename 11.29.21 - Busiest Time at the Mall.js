function findBusiestPeriod(data) {
    // your code goes here
    // Reduce through the data array 
    // Flatten the current index or look inside each index of that array or splice it and look at that value
    // assign index zero to time 
      // index two to amount of people 
      // and index three to inOrOut
    
    // assign a variable called currentTime
    // assign variable called topTrafficTime to 0
      // assign variable called currentTrafficPop to 0
      // assign variable called topTrafficPop
    // Look at currentIndex[0]
      // if value is between low or highRangTime variables 
        // and currentIndex[1] equal 1
           // then add the amount to currentTrafficPop 
        // if currentIndex[0] equal 0 
            // subtract from currentPop 
    // if currentTrafficPop is > topTrafficPop 
      // then save currentIndex[0] to topTrafficTime 
    // return topTrafficTime
    let timeInterval = [1487799425, 1487901211];
    let currentTrafficPop = 0; 
    let topTrafficPop = 0; 
    let topTrafficTimeStamp = 0
    
  
    function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  let timeRange = range(1487799425, 1487901211); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(timeRange);
  
  const top = timeRange.map(currentTime => {
  
        let busiestTime = data.reduce((topTrafficTime, currentIndex) => {
          //console.log("start of", currentIndex[0], "at", currentTrafficPop)
          if (currentIndex[0] === currentTime && currentIndex[2] === 1) {
            currentTrafficPop += currentIndex[1];
            if (currentTrafficPop > topTrafficPop) {
              topTrafficPop = currentTrafficPop
            }
          } 
          
          if (currentIndex[0] === currentTime && currentIndex[2] === 0) {
            //console.log(currentTrafficPop)
            currentTrafficPop -= currentIndex[1];
            if (currentTrafficPop > topTrafficPop) {
              topTrafficPop = currentTrafficPop
            }
          };
          //console.log(currentTrafficPop)
  
          if (currentTrafficPop > topTrafficPop) {
            topTrafficTime = currentIndex[0]
          }
          
        
              currentTime++
  
            //console.log(topTrafficTime)
              return topTrafficTime;
        }, 0)
        if (busiestTime > topTrafficTimeStamp) {
          topTrafficTimeStamp = busiestTime
        }
  
    return topTrafficTimeStamp
  
  })
  
  
        console.log(topTrafficPop)
        return topTrafficTimeStamp
  
  
  
  }
  
  
  
  
        
  
  let data = [ [1487799425, 14, 1], 
                   [1487799425, 4,  0],
                   [1487799425, 2,  0],
                   [1487800378, 10, 1],
                   [1487801478, 18, 0],
                   [1487801478, 18, 1],
                   [1487901013, 1,  0],
                   [1487901211, 7,  1],
                   [1487901211, 7,  0] ]
  
  
  findBusiestPeriod(data)