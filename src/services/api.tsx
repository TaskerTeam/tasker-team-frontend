//Requisições aqui

import { apiRequest } from "../utils/axios";

export async function getNotificationsList() {
    try {
        const res = await apiRequest.get('/notifications')
        return res.data
    } catch(_) {
        return []
    }
}

export interface postTaskData {
    taskId: number
    title: string
    description: string
    date: string
}
export async function getListTask() {
    try {
        const res = await apiRequest.get("/tasks/");
        return res.data
    } catch(_) {
        return []
    }
}

export async function postTask(data: postTaskData) {
    try {
        const date = new Date()
        const res = await apiRequest.post("/tasks/", {
            title: data.title,
            description: data.title,
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 1:00:00`,
        });
        return res.data
    } catch(_) {
        return []
    }
}

export async function deleteTask(id: number) {
    try {
        const res = await apiRequest.delete(`/tasks/${id}`);
        return res.data
    } catch(_) {
        return []
    }
}
