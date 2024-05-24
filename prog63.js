arr = [10,11,12,3,2,4]

//1) sort the given array in ascending order

//ALGORITHM :

//get the search item
//initialize lower index and upper index
//mid = low + up/2
//  - mid = search item
          //item found the display
//  - mid > search item
          //up = mid-1
//  - mid < search item
          //low = mid+1
//repeat the above statements until the low and up value meets


//get the search item
searchItem = 2
//initialize lower index and upper index
low = 0
up = arr.length - 1
isPresent = false
//sort the given array
arr.sort((a,b) => a - b)
console.log(arr);
//mid = low + up/2
count =0
while (low <= up)
{
    mid= Math.floor((low+up)/2)

//  - mid = search item
          //item found the display
          if (arr [mid] ==searchItem)
          {
            isPresent  = true
            break
          }
       
//  - mid > search item
          //up = mid-1
          else if (arr[mid] > searchItem)
          {
            up = mid - 1
          }
//  - mid < search item
          //low = mid+1
          else
          {
            low = mid + 1
          }
//repeat the above statements until the low and up value meets

        }
        console.log(count);
        console.log(isPresent?'present' :'not present');