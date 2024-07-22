import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Pagination = ({postsPerPage, totalPosts, nextPagination, 
  prevPagination, paginate, active ,set, setId, previous,
   next, id, currentPage, support }) => {

 const [news, setNews] = useState(0);
 const [old, setOld] = useState(3);
 console.log(postsPerPage)
 console.log(totalPosts)


  const PageNumbes = []

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
    PageNumbes.push(i)
  }  
  
  


  const recent = PageNumbes?.slice(news ,old)
  console.log(recent)




  const backward = () => {
        if(news === 0 || news === PageNumbes[0] ){
          setNews(0)
          setOld(old)
        } else if(news !== PageNumbes[0] && (news - 10) < PageNumbes[0]){
          const newNews = Math.max(0, news - 10); // Ensure newNews is not less than 0
          setNews(0);
          if(PageNumbes?.length > 10) {
            setOld(old + 10);
          } else {
            setOld(PageNumbes?.length)
          }
          
        } else if(news !== PageNumbes[0] && (news - 10) > PageNumbes[0]) {
          setNews(news - 10);
          setOld(old - 10)
          // if(PageNumbes?.length > 10) {
          //   setOld(old + 10);
          // } else {
          //   setOld(PageNumbes?.length)
          // }

        }
        // if(previous !== null){
        //   setId(id + 1)
        // }

  }


  console.log(id)


  const forward = () => {
    if(old === PageNumbes[PageNumbes?.length - 1]){
      setOld(old)
      setNews(news)
      
    }  
    else if(old !== PageNumbes[PageNumbes?.length - 1] && (old + 10) > PageNumbes[PageNumbes?.length - 1]) {
      setOld(old + (PageNumbes?.length - old))
      setNews(news + (PageNumbes?.length - old))

    }
    else if(old !== PageNumbes[PageNumbes?.length - 1] && (old + 10 ) < PageNumbes[PageNumbes?.length - 1]){
      setOld(old + 10)
      setNews(news + 10)
    }
    //  if(next !== null){
    //   setId(id + 1)
    //  }
  }

  console.log(id)





    // const PageNumbes = [
    //     {
    //       id: 0,
    //       number: 1
    //     },
    //     {
    //       id: 0,
    //       number: 2
    //     },
    //      {
    //       id: 0,
    //       number: 3
    //     },
    //     {
    //       id: 0,
    //       number: 4
    //     },
    //     {
    //       id: 0,
    //       number: 5
    //     }    

    // ]
  return (
    <Flex support={support}>
        {
            totalPosts === 0
            ?
            ''
            :
            <>
            <div className='show'>
            <span className='titles'>Showing</span>
            <div className='current'>{ (currentPage + 1) * 10 > totalPosts ? totalPosts : (currentPage + 1) * 10  }</div>
            <span className='total'>of</span>
            <span className='total'>{totalPosts}</span>
            </div>
            <ul className='arrange'>
            
            <div className='prev'>
            <svg  width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => backward()} style={{cursor:'pointer'}}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00833 11.8274C6.64379 12.192 6.05274 12.192 5.6882 11.8274L1.02082 7.16005C0.656278 6.7955 0.656278 6.20446 1.02082 5.83991L5.6882 1.17254C6.05274 0.807996 6.64379 0.807996 7.00833 1.17254C7.37288 1.53708 7.37288 2.12813 7.00833 2.49267L3.00102 6.49998L7.00833 10.5073C7.37287 10.8718 7.37287 11.4629 7.00833 11.8274Z" fill="#C4C4CA"/>
            </svg>
            </div>
                {
                    recent.map( (page) => {
                        return (

                        
                                <span key={page} className={`paging ${set === page ? 'sums' : '' } `}  onClick={() => paginate(page)}>
                                {page}
                                </span>

                            //   <span key={page} className= 'sums' onClick={() => paginate(page)}>
                            //   {page}
                            //  </span>
                        
                        
                        )
                    })  
                }
                <div className='next'>
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => forward()} style={{cursor:'pointer'}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.629366 1.17246C0.99391 0.807912 1.58495 0.807912 1.9495 1.17246L6.61687 5.83983C6.98142 6.20438 6.98142 6.79542 6.61687 7.15996L1.9495 11.8273C1.58495 12.1919 0.99391 12.1919 0.629366 11.8273C0.264821 11.4628 0.264821 10.8717 0.629366 10.5072L4.63667 6.4999L0.629366 2.49259C0.264821 2.12804 0.264821 1.537 0.629366 1.17246Z" fill="#1C1C1C"/>
                </svg>
                </div>
            </ul>
            </>
        }
    </Flex>
  )
}



const Flex = styled.div`
  background-color:white;
  display: flex;
  flex-direction: ${(props) => props?.support ? 'column' : 'row'};
  justify-content: ${(props) => props?.support ? 'center' : 'space-between'};
  align-items: ${(props) => props?.support ? 'center' : ''};
  gap: ${(props) => props?.support ? '10px' : ''};
  padding-block:  ${(props) => props?.support ? '10px' : ''};
  padding-left: 10px;
  padding-right: 20px;
  .show{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    .titles{
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        text-align: left;
        color: #8D9196;

    }
    .current{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding-left: 5px;
        border: 1px solid #E2E8F0;
        border-radius: 6px;
        height: 29px;
        width: 43px;
    }
    .total{
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.44067373871803284px;
        text-align: left;
        color: #8B909A;

    }
  }
  .arrange{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 7px;

      .prev{
          width: 24px;
          height: 24px;
          background: #F3F6FF ;
          color: #8D9196;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
      }
        
      .paging{
        background: #F3F6FF ;
        color: #8D9196;
        // color: black ;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 7px;
        border-radius: 6px;
        width: 29px;
        height: 29px;
      }


      .sums{
        // margin-inline: 20px;
        background: #9932CC ;
        color: #FFFFFF;
        // color: black ;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 7px;
        border-radius: 6px;
        width: 24px;
        height: 24px;
      }


      .next{
          width: 24px;
          height: 24px;
          background: #F3F6FF ;
          color: #8D9196;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
      }



  }
`

export default Pagination