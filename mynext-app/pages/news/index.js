   import Link from 'next/link';
   import {Fragment} from 'react';
   function NewsPage (){
      return(
         <Fragment>
     <h1>The News Page</h1>
     <ul>
      <li>
       <Link  >
       NextJs Details
       </Link>
      </li>
      <li>
         <Link>
         Other Related
         </Link>
        
      </li>
     </ul>
      
         </Fragment>
      )
        
      }
      export default NewsPage;