import {User} from '../../shared/model/user';

interface IUserService {
  getCurrentUser(): User;
}

export default IUserService;
