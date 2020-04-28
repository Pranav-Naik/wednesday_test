import database from '../src/models';
import Util from '../utils/Utils';
const util = new Util();

class UserService {
  static async getAllUsers() {
    try {
      return await database.users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      newUser['id'] = util.uuidv4();
      return await database.users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await database.users.findOne({
        where: { id: Number(id) }
      });

      if (userToUpdate) {
        await database.users.update(updateUser, { where: { id: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const theUser = await database.users.findOne({
        where: { id: Number(id) }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.users.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await database.users.destroy({
          where: { id: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;