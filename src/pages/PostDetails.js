import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PostDetail from '../components/postDetail/PostDetail'
import MainLayout from '../layout/MainLayout'
import { getPost } from '../services/postDetailServices';

const PostDetails = () => {
    const { id } = useParams();
    const [postDetail,setPostDetail]=useState([]);

    useEffect(() => {
        async function getSinglePost() {
            setPostDetail([await getPost(id)])
        }
        getSinglePost();
    }, [])

    return (
      <MainLayout>
          <PostDetail postDetail={postDetail} />
      </MainLayout>
    )
}

export default PostDetails
