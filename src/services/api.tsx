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

interface postTaskData {
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
        const res = await apiRequest.post("/tasks/", {
            title: data.title,
            description: data.title,
            date: new Date(),
        });
        return res.data
    } catch(_) {
        return []
    }
}
