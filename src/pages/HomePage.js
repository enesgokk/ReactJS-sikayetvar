import React,{useState,useEffect} from 'react'
import HomeList from '../components/home/HomeList'
import MainLayout from '../layout/MainLayout'
import { getAllPosts } from '../services/homeServices';

const HomePage = () => {
    const [allPosts,setAllPosts]=useState();

    useEffect(() => {
        async function getPosts() {
            setAllPosts((await getAllPosts()))
        }
        getPosts();
    }, [])

    return (
       <MainLayout>
           <HomeList allPosts={allPosts} />
       </MainLayout>
    )
}

export default HomePage
