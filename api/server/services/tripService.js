import database from '../src/models';
import Util from '../utils/Utils';
const util = new Util();

class TripService {
  static async getAllTrips() {
    try {
      return await database.trips.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addTrip(newTrip) {
    try {
      newTrip['id'] = util.uuidv4();
      return await database.trips.create(newTrip);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  static async updateTrip(id, updateTrip) {
    try {
      const userToUpdate = await database.trips.findOne({
        where: { id: Number(id) }
      });

      if (userToUpdate) {
        await database.trips.update(updateTrip, { where: { id: Number(id) } });

        return updateTrip;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getTripByUserID(id) {

    try {
      console.log("inside sercive,",id);
      const theTrip = await database.trips.findAll({
        where: { user_id: Number(id) }
      });

      return theTrip;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async deleteTrip(id) {
    try {
      const userToDelete = await database.trips.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedTrip = await database.trips.destroy({
          where: { id: Number(id) }
        });
        return deletedTrip;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async nearbyCabs() {
    try {
      return await database.cab.findAll();
    } catch (error) {
      throw error;
    }
}
   
}

export default TripService;