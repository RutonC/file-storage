"use client"
import Image from "next/image";
import {Button} from 'antd'
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, SignedIn, SignedOut, useOrganization, useUser } from "@clerk/nextjs";


export default function Home() {
  const organization = useOrganization();
  const user = useUser();

  let orgId:string | undefined = undefined;
  if(organization.isLoaded && user.isLoaded){
    orgId = organization.organization?.id ?? user.user?.id;

  }
  const createFile = useMutation(api.file.createFile);
  const getFiles = useQuery(api.file.getFiles, orgId ? {orgId} : "skip");

  const handleButtonInsert = () => {
    if(!orgId) return; 

    createFile({
      name:"Ola Mundo!",
      orgId
    })
  }

   
  return (
    <main>
      <Button onClick={()=> {
         if(!orgId) return; 

         createFile({
           name:"Ola Mundo!",
           orgId
         })
      }}>Create Files</Button>
      {
        getFiles?.map((files)=>{
          return (
            <div key={files._id}>{files.name}</div>
          )
        })
      }
    </main>
  );
}
