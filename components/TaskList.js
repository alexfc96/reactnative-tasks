import { FlatList, RefreshControl } from 'react-native';
import React, {useState, useEffect} from 'react';

import TaskItem from './TaskItem'
import { getTasks } from '../api'

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const loadTasks = async () => {
      const data =  await getTasks()
      setTasks(data)
    }
  
    useEffect( () => {
      loadTasks()
    }, []);

    const renderItem = ({item}) => {
        return <TaskItem task={item} />;
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })

    return (
        <FlatList 
        style={{ width: '100%'}}
            data={tasks}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    colors={["#78e08f"]}
                    onRefresh={onRefresh}
                />
            }
        />
    );
}

export default TaskList;
