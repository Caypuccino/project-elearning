import { Request, Response } from 'express';
import { CourseData } from '../models/course-model';  
import courseService from '../services/course-service';

const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = courseService.getCourses();

        if (!courses || courses.length === 0) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Data course tidak ditemukan!',
            });
        }

        return res.status(200).json({
            statusCode: 200,
            message: 'Sukses mendapatkan course!',
            data: courses,
        });
    } catch (error: any) {
        return res.status(500).json({
            message: 'Internal server error!'
        });
    }
};

export default { getCourses };