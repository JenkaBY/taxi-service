import {User} from '../../shared/model/user';
import {Observable} from 'rxjs';

interface IUserService {
  getCurrentUser(): Observable<User>;
}

export default IUserService;
