import { PostAuthor } from "../model/user/post-author";

// 用户仓储接口
export interface IUserRepository {

    // 根据id查找发帖人
    getById(id: number): Promise<PostAuthor>;

}