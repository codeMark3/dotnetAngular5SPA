export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotoUr: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}