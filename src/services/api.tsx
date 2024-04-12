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