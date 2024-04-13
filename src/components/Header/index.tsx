import { useEffect, useState } from "react";
import styled from "styled-components";
import { getNotificationsList } from "../../services/api";

interface NotificationListProps {
    notifications: Array<{
        id: number;
        taskTitle: string;
        typeMessage: number;
        message: string;
        date: Date;
    }>;
}

export default function Header() {
    const [notificationsDropdown, setNotificationDropdown] = useState(false);
    const [notificationsList, setNotificationsList] =
        useState<NotificationListProps>({ notifications: [] });

    async function getNotifications() {
        const notifications = await getNotificationsList();
        setNotificationsList(notifications);
    }

    useEffect(() => {
        getNotifications();
    }, []);

    return (
        <HeaderContent>
            <div className="logo">
                <img src="src/assets/icons/logo.svg" />
                <span>TaskerTeam</span>
            </div>
            <NotificationsDropdown
                open={notificationsDropdown}
                onClick={() => setNotificationDropdown((p) => !p)}
            >
                <img src="src/assets/icons/NotifyIcon.svg" />
                {notificationsDropdown && (
                    <NotificationsDropdownContent>
                        <h2>Notificações:</h2>
                        <NotificationsList>
                            {notificationsList.notifications.map(
                                (notification) => (
                                    <DivNotificationElement key={notification.id}>
                                        <p>{notification.taskTitle}</p>
                                        <span>{notification.message}</span>
                                    </DivNotificationElement>
                                )
                            )}
                        </NotificationsList>
                    </NotificationsDropdownContent>
                )}
            </NotificationsDropdown>
        </HeaderContent>
    );
}

const DivNotificationElement = styled.div`
    p {
        font-size: 14px;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    span {
        font-size: 12px;
    }

    border: 1px solid #2496FF;
    border-radius: 16px;
    padding: 6px 16px;

    &:hover {
        filter: opacity(0.5);
    }
`;

const NotificationsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
`;

const NotificationsDropdownContent = styled.div`
    background-color: white;
    filter: drop-shadow(2px 2px 10px #00000042);
    border-radius: 16px;
    width: 300px;
    height: 500px;
    position: absolute;
    top: 50px;

    padding: 16px;
`;

const NotificationsDropdown = styled.div<{ open: boolean }>`
    position: absolute;
    left: 42px;
    cursor: pointer;

    img {
        filter: ${({ open }) =>
            open &&
            "brightness(0) saturate(100%) invert(46%) sepia(96%) saturate(1926%) hue-rotate(188deg) brightness(100%) contrast(103%)"};
    }
`;

const HeaderContent = styled.header`
    width: 100vw;
    height: 74px;
    gap: 0px;
    border-bottom: 1px solid #a9a9a9;

    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
            color: #2496ff;
            font-size: 24px;
            font-weight: bold;
        }

        img {
            width: 24px;
            height: 22px;
        }
    }
`;
