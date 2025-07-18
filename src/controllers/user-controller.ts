import { Request, Response } from 'express';
import { UserData } from '../models/user-model';
import userService from '../services/user-service';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userData = userService.getUsers();

    if (!userData || userData.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Data user tidak ditemukan!',
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Sukses mendapatkan user!',
      data: userData,
    });
  } catch (error: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const addUser = async (req: Request, res: Response) => {
  const userData = req.body;

  const addUser = userService.addUser(userData);

  if (!addUser) {
    return res.status(400).json({ message: 'Gagal menambahkan data' });
  }
  
  return res.status(200).json({
    message: 'Berhasil tambah data',
    data: userData,
  });
};

export default {
  getUsers,
  addUser
};