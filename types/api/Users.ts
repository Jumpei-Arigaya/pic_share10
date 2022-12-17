export type Users = {
    user_id: string;
    email: string;
    username: string;
    password: string;
    introduction: string;
    profile_image: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    follower?: {
        id: number;
        follower_user?: number;
        followered_user?: number;
    }
    followered?: {
        id: number;
        follower_user?: number;
        followered_user?: number;
    }
}