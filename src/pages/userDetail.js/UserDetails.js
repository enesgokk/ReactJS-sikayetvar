import React,{useState,useEffect} from 'react'
import UserDetail from '../../components/userDetail/UserDetail'
import MainLayout from '../../layout/MainLayout'
import { userDetails } from '../../services/userDetailServices'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {id}=useParams();
    const [detailUser,setDetailUser]=useState([])

    
    useEffect(() => {
        async function getUserDetail() {
            setDetailUser([await userDetails(id)])
        }
        getUserDetail();
    }, [])

    return (
        <MainLayout>
            <UserDetail detailUser={detailUser} />
        </MainLayout>
    )
}

export default UserDetails
