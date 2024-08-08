import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppThunkDispatch, RootState } from 'redux/store'
import { useAppDispach, useAppSelector } from '../../redux/hook'
import { getVisitors } from '../../redux/slice/apiCallSlice'

const TotalRevenue = () => {

  const dispatch:AppThunkDispatch = useDispatch()
  const revenuState = useAppSelector(state => state.apis.revenueState)

  useEffect(()=>{
    dispatch(getVisitors())
  },[dispatch])

  return (
    <div>TotalRevenue</div>
  )
}

export default TotalRevenue