import { Router } from 'express';
import TripController from '../controllers/tripController';

const router = Router();

router.get('/', TripController.getAllTrips);
router.post('/booking', TripController.addTrip);
router.get('/:id', TripController.getTripByUserID);
router.put('/:id', TripController.updatedTrip);
router.delete('/:id', TripController.deleteTrip);
router.post('/nearbycabs', TripController.nearbyCabs);

export default router;