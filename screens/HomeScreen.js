import React from 'react';

import Layout from '../components/Layout'
import TasksList from '../components/TaskList'

const HomeScreen = () => {
  return (
    <Layout>
      <TasksList />
    </Layout>
  )
}

export default HomeScreen;