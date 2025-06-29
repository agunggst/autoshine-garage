"use client"
import { useEffect } from 'react';
import { useHeaderStore } from '@/store/headerStore';

export default function Reviews() {
  const { updateTitle, updateSubTitle } = useHeaderStore()
    useEffect(() => {
      updateTitle('Reviews & Ratings')
      updateSubTitle("Monitor customer feedback and respond to reviews")
  
      return () => {
        updateTitle('')
        updateSubTitle('')
      }
    }, [])

  return (
    <></>
  )
}