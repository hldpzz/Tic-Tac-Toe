let lineChecker = function(line){
    if( line[0]==line[1]&&line[1]==line[2]){
        if(line[0]!=null){
            return true
        }else{
            return false
        }
    }else{
      return false
    }
  }
  
  export function boardChecker(board){
      let ncount = 0
      for(let r of board){
          for(let n of r){
              if(n==null){
                  ncount+=1
              }
          }
      }
      if(ncount==0){
          return 'draw'
      }
      let diag1 = [board[0][0],board[1][1],board[2][2]]
      let diag2 = [board[1][1],board[2][0],board[0][2]]
      let row = []
      let cols = []
  
      for(let i=0;i<board.length;i+=1){
        let crow = []
        let ccol = []
        for(let j=0;j<board[0].length;j+=1){
          crow.push(board[i][j])
          ccol.push(board[j][i])
        }
        row.push(crow)
        cols.push(ccol)
      }
      if (lineChecker(diag1)){
        return true
      }
      if (lineChecker(diag2)){
        return true
      }
      for(let r of row){
        if (lineChecker(r)){
          return true
        }
      }
      for(let c of cols){
        if(lineChecker(c)){
          return true
        }
      }
  
  
  
      console.log(row)
      console.log(cols)
  
      return false
  }
  
  
  //testBoard = [[1,2,3],[4,3,6],[3,8,9]]
  
  
  //boardChecker(testBoard)