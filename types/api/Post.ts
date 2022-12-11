export type Post = {
    id?: number;
    content: string;
    post_image: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
    users?: {
        id?: number;
        username?: string;
        profile_image?: string;
        follower?: [{
            id?: number;
            follower_user?: number;
            followered_user?: number;
        }]
        followered?: [{
            follower_user?: number;
            followered_user?: number;
        }]
    }
}