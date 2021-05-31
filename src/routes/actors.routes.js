import {Router} from "express";
const router = Router();

import * as actorsCtrl from "../controllers/actors.controller";
import { authJwt } from "../middlewares";

router.post("/",[authJwt.verifyToken, authJwt.isModerator],
  actorsCtrl.createActors
);

router.get("/", actorsCtrl.getActors);

router.get("/:actorName", actorsCtrl.getActorByName);

router.put(
"/:actorName",
  [authJwt.verifyToken, authJwt.isModerator],
  actorsCtrl.updateActorByName
);

router.delete(
  "/:actorName",
  [authJwt.verifyToken, authJwt.isAdmin],
  actorsCtrl.deleteActorByName
);

export  default router;