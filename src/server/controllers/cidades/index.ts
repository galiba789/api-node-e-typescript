import * as Create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as DeleteById from './DeleteById';


export const cidadesController = {
    ...Create,
    ...getAll,
    ...getById,
    ...updateById,
    ...DeleteById
};



