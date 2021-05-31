
import Actor from "../models/Actor";

export const createActor = async (req, res) => {
  const { name,age, imgURL,weight,history,production_id} = req.body;



  try {
    const newActor = new Actor({
      name,
      age,
      weight,
      history,
      imgURL,
      production_id,
    });

    const actorSaved = await newActor.save();

    res.status(201).json(actorSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }


};


export const getActorByName = async (req, res) => {
  const { actorName } = req.params;

  const actor = await Actor.findByName(actorName);
  res.status(200).json(actor);
};




export const getActors = async (req, res) => {
  const actors = await Actor.find();
  return res.json(actors);
};

export const updateActorByName = async (req, res) => {
  const updateActor = await Actor.findByNameAndUpdate(
    req.params.actorId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedActor);
};

  

export const deleteActorByName = async (req, res) => {
  const { actorName } = req.params;

  await Actor.findByNameAndDelete(actorName);

  // code 200 is ok too
  res.status(204).json();
};