import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Project} from '../../model/project';
import {Model} from 'mongoose';

@Injectable()
export class ProjectService {
    constructor(@InjectModel('Project') public projectRepository: Model<Project>) {
    }

    async add(project?: Project): Promise<void> {
        const name = 'test44';
        const title = 'title44';
        const newProject = new this.projectRepository({name, title});
        newProject.save();
    }
}
