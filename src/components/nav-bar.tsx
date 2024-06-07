
import { OrganizationSwitcher, UserButton } from '@clerk/clerk-react'
import {Button, Flex} from 'antd'
import { SignInButton, SignOutButton, SignedIn, SignedOut, useOrganization, useUser } from "@clerk/nextjs";


const NavBar = () => {
  return(
    <div className='w-full'>
    <Flex align='center' justify='flex-end'>
      <OrganizationSwitcher/>
      <UserButton/>
      <SignedOut>
        
        <Button>Login</Button>
        
      </SignedOut>
      
    </Flex>
    </div>
  )
}

export default NavBar;