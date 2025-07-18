import { CourseData } from '../models/course-model';
const courseData = require('../data/courses');

const getCourses = (): CourseData[] => {
  return courseData || [];
};

export default {
  getCourses
};