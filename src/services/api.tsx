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

export async function postTask(data) {
    try {
        const res = await apiRequest.post('/notifications')
        return res.data
    } catch(_) {
        return []
    }
}