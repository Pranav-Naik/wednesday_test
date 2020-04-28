import TripService from '../services/tripService';
import Util from '../utils/Utils';

const util = new Util();

class TripController {
  static async getAllTrips(req, res) {
    try {
      const allTrips = await TripService.getAllTrips();
      if (allTrips.length > 0) {
        util.setSuccess(200, 'Trips retrieved', allTrips);
      } else {
        util.setSuccess(200, 'No trip found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTrip(req, res) {
    if (!req.body.cab_no || !req.body.cab_type || !req.body.pick_up || !req.body.user_id || !req.body.cab_id) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTrip = req.body;
    try {
      const createdTrip = await TripService.addTrip(newTrip);
      util.setSuccess(201, 'Trip Added!', createdTrip);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTrip(req, res) {
    const alteredTrip = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTrip = await TripService.updateTrip(id, alteredTrip);
      if (!updateTrip) {
        util.setError(404, `Cannot find trip with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Trip updated', updateTrip);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getTripByUserID(req, res) {
    const { id } = req.params;
    console.log("inside controller :",id);
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      console.log("calling trip service");
      const theTrip = await TripService.getTripByUserID(id);

      if (!theTrip) {
        util.setError(404, `Cannot find trip with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Trip', theTrip);
      }
      return util.send(res);
    } catch (error) {
      console.log(error);
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteTrip(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const tripToDelete = await TripService.deleteTrip(id);

      if (tripToDelete) {
        util.setSuccess(200, 'Trip deleted');
      } else {
        util.setError(404, `Trip with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async nearbyCabs(req, res) {
    if (!req.body.lat || !req.body.long) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTrip = req.body;
    try {
      const createdTrip = await TripService.nearbyCabs(newTrip);
      util.setSuccess(201, 'cab nearby!', createdTrip);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

}

export default TripController;